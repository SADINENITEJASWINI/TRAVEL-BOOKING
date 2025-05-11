import React, { useState, useRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  onChange: (dates: [Date | null, Date | null]) => void;
  placeholder?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ 
  startDate, 
  endDate, 
  onChange,
  placeholder = "Select dates"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleChange = (dates: [Date | null, Date | null]) => {
    onChange(dates);
    if (dates[0] && dates[1]) {
      setIsOpen(false);
    }
  };
  
  const formatDateRange = () => {
    if (!startDate) return placeholder;
    
    const formatDate = (date: Date) => {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };
    
    if (endDate) {
      return `${formatDate(startDate)} - ${formatDate(endDate)}`;
    }
    
    return formatDate(startDate);
  };
  
  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type="text"
        className="input pl-10 cursor-pointer"
        value={formatDateRange()}
        onClick={() => setIsOpen(!isOpen)}
        readOnly
      />
      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-1">
          <ReactDatePicker
            selected={startDate}
            onChange={handleChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            monthsShown={2}
            minDate={new Date()}
            calendarClassName="bg-white shadow-medium border border-gray-200 rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
