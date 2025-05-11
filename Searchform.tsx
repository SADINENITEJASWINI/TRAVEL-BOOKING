import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, Building, MapPin, Calendar, Users, Search } from 'lucide-react';
import DatePicker from '../ui/DatePicker';

type SearchType = 'flights' | 'hotels' | 'packages';

const SearchForm: React.FC = () => {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState<SearchType>('flights');
  const [destination, setDestination] = useState('');
  const [departure, setDeparture] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [travelers, setTravelers] = useState(1);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?type=${searchType}&from=${departure}&to=${destination}&startDate=${startDate?.toISOString()}&endDate=${endDate?.toISOString()}&travelers=${travelers}`);
  };
  
  return (
    <div>
      <div className="flex mb-6 space-x-2 border-b">
        <button
          className={`flex items-center px-4 py-3 font-medium transition-colors ${searchType === 'flights' 
            ? 'text-primary-600 border-b-2 border-primary-600' 
            : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setSearchType('flights')}
        >
          <Plane className="h-5 w-5 mr-2" />
          Flights
        </button>
        <button
          className={`flex items-center px-4 py-3 font-medium transition-colors ${searchType === 'hotels' 
            ? 'text-primary-600 border-b-2 border-primary-600' 
            : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setSearchType('hotels')}
        >
          <Building className="h-5 w-5 mr-2" />
          Hotels
        </button>
        <button
          className={`flex items-center px-4 py-3 font-medium transition-colors ${searchType === 'packages' 
            ? 'text-primary-600 border-b-2 border-primary-600' 
            : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setSearchType('packages')}
        >
          <MapPin className="h-5 w-5 mr-2" />
          Packages
        </button>
      </div>
      
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {searchType === 'flights' && (
            <div className="relative">
              <label htmlFor="departure" className="block text-sm font-medium text-gray-700 mb-1">From</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                  <MapPin className="h-5 w-5" />
                </span>
                <input
                  type="text"
                  id="departure"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  className="input pl-10"
                  placeholder="City or airport"
                  required
                />
              </div>
            </div>
          )}
          
          <div className="relative">
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
              {searchType === 'flights' ? 'To' : 'Destination'}
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                <MapPin className="h-5 w-5" />
              </span>
              <input
                type="text"
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="input pl-10"
                placeholder="City or airport"
                required
              />
            </div>
          </div>
          
          <div className="relative">
            <label htmlFor="dates" className="block text-sm font-medium text-gray-700 mb-1">
              {searchType === 'flights' ? 'Departure - Return' : 'Check-in - Check-out'}
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                <Calendar className="h-5 w-5" />
              </span>
              <DatePicker
                startDate={startDate}
                endDate={endDate}
                onChange={([start, end]) => {
                  setStartDate(start);
                  setEndDate(end);
                }}
                placeholder={searchType === 'flights' ? "Departure - Return" : "Check-in - Check-out"}
              />
            </div>
          </div>
          
          <div className="relative">
            <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                <Users className="h-5 w-5" />
              </span>
              <select
                id="travelers"
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
                className="select pl-10"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <button type="submit" className="btn-primary py-3 px-10">
            <Search className="h-5 w-5 mr-2" />
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
