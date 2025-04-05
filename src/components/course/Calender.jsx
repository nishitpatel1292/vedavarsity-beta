import React, { useState } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay
} from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CourseCalendar = ({ classDates }) => {
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
  const today = new Date();

  // Convert all rawDate strings to Date objects once
  const courseDates = classDates.map((d) => new Date(d.rawDate));

  const isCourseDay = (day) => {
    return courseDates.some((courseDate) => isSameDay(day, courseDate));
  };

  const renderHeader = () => (
    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-white">
      <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
        <ChevronLeft />
      </button>
      <div className="text-lg font-bold">{format(currentMonth, 'MMMM yyyy')}</div>
      <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
        <ChevronRight />
      </button>
    </div>
  );

  const renderDays = () => {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    return (
      <div className="grid grid-cols-7 border-b text-center font-semibold">
        {days.map((day, i) => (
          <div key={i} className="py-2 text-gray-600">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const formattedDate = format(cloneDay, 'd');
        const isDisabled = !isSameMonth(cloneDay, monthStart);
        const isToday = isSameDay(cloneDay, today);
        const highlight = isCourseDay(cloneDay);

        days.push(
          <div
            key={cloneDay}
            className={`flex h-12 items-center justify-center border py-2 text-center
              ${isDisabled ? 'text-gray-400' : 'text-black'}
              ${highlight ? 'bg-green-700 font-bold text-white' : ''}
              ${isToday ? 'bg-black text-white' : ''}
            `}>
            {formattedDate}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  return (
    <div className="mx-auto w-full overflow-hidden rounded">
      <div className="mb-4">
        <h2 className="relative inline-block text-xl font-extrabold uppercase text-[#002B45] after:mt-1 after:block after:h-1 after:w-8 after:bg-[#002B45]">
          Calendar
        </h2>
      </div>{' '}
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default CourseCalendar;
