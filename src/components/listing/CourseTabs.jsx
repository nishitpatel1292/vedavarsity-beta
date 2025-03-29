'use client';
import CourseCard from 'components/shared/CourseCard';
import NoCourse from 'components/shared/NoCourse';
import { atom, useAtom } from 'jotai';
import { useRef, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { coursesFilter } from 'utils/filter';
import FilterCourse from './FilterCourse';

export const loadingAtom = atom(false);

const CourseTabs = ({ courses, allTeachers, allCategories, enabledTabs, title, allLanguages }) => {
  const [loadingState] = useAtom(loadingAtom);
  const [tabIndex, setTabIndex] = useState(0);
  let { upcoming, ongoing, comingSoon, categoryMap } = coursesFilter(courses);
  const scrollContainerRef = useRef(null);
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200; // Adjust scroll amount
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  const tabLists = [
    { label: 'Upcoming Courses', allCoursesData: upcoming },
    { label: 'Ongoing Courses', allCoursesData: ongoing },
    { label: 'Coming Soon', allCoursesData: comingSoon }
  ];

  // If no enabledTabs prop is provided, show all tabs
  const categoryTabLists = [];
  for (let category in categoryMap) {
    let tabObject = {};
    tabObject.label = category;
    tabObject.allCoursesData = categoryMap[category];
    categoryTabLists.push(tabObject);
  }

  // If no enabledTabs prop is provided, show all tabs
  const tabsToShow =
    title === 'bhaktiyoga' || title === 'school of love' || title === 'lifestyle'
      ? tabLists.map((tab, index) => ({ ...tab, index }))
      : categoryTabLists.map((tab, index) => ({ ...tab, index }));

  return (
    <section className="bg-cloud">
      <div className="relative m-auto max-w-6xl px-4 py-12">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="mb-4 flex items-center space-x-2">
            {/* Left Scroll Button */}
            {title !== 'bhaktiyoga' && title !== 'lifestyle' && title !== 'school of love' && (
              <button
                onClick={() => handleScroll('left')}
                className="rounded-full bg-gray-200 p-2 shadow-md hover:bg-gray-300 md:p-3">
                <svg
                  className="h-5 w-5 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* Tab List */}
            <TabList
              ref={scrollContainerRef}
              className="scrollbar-hide flex flex-1 space-x-3 overflow-x-auto md:space-x-5 md:overflow-x-hidden">
              {tabsToShow.map((tab) => (
                <Tab
                  key={tab.index}
                  className={`cursor-pointer whitespace-nowrap rounded-full px-6 py-2 font-semibold capitalize transition-all duration-200 ${
                    tabIndex === tab.index ? 'bg-primary text-white' : 'bg-gray-100 text-black'
                  } hover:bg-gray-200`}>
                  {tab.label}
                </Tab>
              ))}
            </TabList>

            {/* Right Scroll Button */}
            {title !== 'bhaktiyoga' && title !== 'lifestyle' && title !== 'school of love' && (
              <button
                onClick={() => handleScroll('right')}
                className="rounded-full bg-gray-200 p-2 shadow-md hover:bg-gray-300 md:p-3">
                <svg
                  className="h-5 w-5 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
          </div>

          <FilterCourse
            teachers={allTeachers}
            categories={allCategories}
            languages={allLanguages}
            title={title}
          />

          {tabsToShow.map((eachTab) => (
            <TabPanel
              key={eachTab.index}
              className="grid justify-center gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              {loadingState ? (
                <>
                  {[1, 2, 3].map((each) => (
                    <div className="h-[546px] animate-pulse rounded-lg bg-gray-200 p-4" key={each}>
                      <div className="h-[196px] max-w-[360px] rounded-lg bg-gray-300"></div>
                      <div className="mt-10 h-3 w-full rounded-lg bg-gray-300"></div>
                      <div className="mt-10 h-3 w-60 rounded-lg bg-gray-300"></div>
                      <div className="mt-10 h-3 w-28 rounded-lg bg-gray-300"></div>
                    </div>
                  ))}
                </>
              ) : eachTab.allCoursesData.length > 0 ? (
                eachTab.allCoursesData.map((course) => (
                  <CourseCard key={course.bundle_id} course={course} title={title} />
                ))
              ) : (
                <NoCourse />
              )}
            </TabPanel>
          ))}
        </Tabs>
        {/* if completed courses are present then print */}
        {/* {!(
          title === 'vedavarsity' ||
          title === 'Ancient-Wisdom' ||
          title === 'Kids-Parents'
        ) &&
          completed.length > 0 && (
            <div className="mt-16">
              <div className="my-12">
                <h2 className="text-2xl font-semibold md:text-32px">Completed Courses</h2>
              </div>
              <div className="grid justify-center gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                {completed.map((course) => (
                  <CourseCard key={course.bundle_id} course={course} title={title} />
                ))}
              </div>
            </div>
          )} */}
      </div>
    </section>
  );
};

export default CourseTabs;
