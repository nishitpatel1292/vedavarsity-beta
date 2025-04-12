'use client';
import NewCourseCard from 'components/shared/NewCourseCard';
import NoCourse from 'components/shared/NoCourse';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { coursesFilter } from '@/src/utils/filter';
import { RiArrowDownSLine } from 'react-icons/ri';

const CourseFilterTab = ({ courseTabs }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [timeFilter, setTimeFilter] = useState('upcoming'); // Set 'upcoming' as default

  return (
    <div className="relative">
      <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="w-full">
          <TabList className="scrollbar-hide flex space-x-4 overflow-x-auto pb-4">
            {courseTabs.map((tab, i) => (
              <Tab
                key={i}
                className={`cursor-pointer whitespace-nowrap rounded px-6 py-2 font-semibold capitalize transition-all duration-200 ${
                  tabIndex === i ? 'bg-primary text-white' : 'bg-gray-100 text-black'
                } hover:bg-gray-200 hover:text-black`}>
                {tab.label}
              </Tab>
            ))}
          </TabList>

          <div className="relative w-full md:w-auto">
            <div className="relative inline-block w-48">
              <select
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-10 text-sm font-medium text-gray-700 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="comingSoon">Coming Soon</option>
              </select>

              {/* Dropdown arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <RiArrowDownSLine className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          </div>

          {courseTabs.map((tab, i) => {
            const { ongoing, upcoming, comingSoon } = coursesFilter(tab.data);

            let filteredCourses = tab.data;
            if (timeFilter === 'ongoing') {
              filteredCourses = ongoing;
            } else if (timeFilter === 'upcoming') {
              filteredCourses = upcoming;
            } else if (timeFilter === 'comingSoon') {
              filteredCourses = comingSoon;
            }

            return (
              <TabPanel key={i}>
                {filteredCourses.length > 0 ? (
                  <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredCourses.map((course, index) => (
                      <NewCourseCard key={index} course={course} title={tab.label} />
                    ))}
                  </div>
                ) : (
                  <NoCourse />
                )}
              </TabPanel>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default CourseFilterTab;
