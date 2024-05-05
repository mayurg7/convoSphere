'use client'
import React, { useState } from 'react'; // Import useState from 'react' package
import ReactDatePicker from 'react-datepicker';
import MeetingTypeList from '@/components/MeetingTypeList';

// Custom component for managing selected date state
const DateSelection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <ReactDatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date || new Date())}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="MMMM d, yyyy h:mm aa"
      className="text-4xl font-extrabold lg:text-7xl"
    />
  );
};

const Home = () => {
  return (
    <section className="flex size-full flex-col gap-5 text-black">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            {/* Use DateSelection component for selecting date and time */}
            <DateSelection />
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
