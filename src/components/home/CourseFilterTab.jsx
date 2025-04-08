'use client';
// import CourseCard from 'components/shared/CourseCard';
import NewCourseCard from 'components/shared/NewCourseCard'
import NoCourse from 'components/shared/NoCourse';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const CourseFilterTab = ({ courseTabs }) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="relative">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {courseTabs.map((tab, i) => (
            <Tab
              key={i}
              className={`cursor-pointer whitespace-nowrap  px-6 py-2 font-semibold capitalize transition-all duration-200 ${
                tabIndex === i ? 'bg-primary text-white' : 'bg-gray-100 text-black'
              } hover:bg-gray-200 text-black hover:text-black`}>
              {tab.label}
            </Tab>
          ))}
        </TabList>

        {courseTabs.map((tab, i) => (
          <TabPanel key={i}>
            {tab.data.length > 0 ? (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                {tab.data.slice(0,8).map((course, index) => (
                  <NewCourseCard key={index} course={course} title={tab.label} />
                ))}
              </div>
            ) : (
              <NoCourse />
            )}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default CourseFilterTab;
