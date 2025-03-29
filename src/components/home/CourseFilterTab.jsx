import CourseCard from 'components/shared/CourseCard';
import NoCourse from 'components/shared/NoCourse';
import { useRef, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Swiper, SwiperSlide } from 'swiper/react';

import { coursesFilter } from 'utils/filter';

const CourseFilterTab = ({ instituteCourses, enabledTabs, title }) => {
  const { upcoming, ongoing, comingSoon, categoryMap } = coursesFilter(instituteCourses);
  const scrollContainerRef = useRef(null);
  console.log('courses', instituteCourses);
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
  const categoryTabLists = [];
  for (let category in categoryMap) {
    let tabObject = {};
    tabObject.label = category;
    tabObject.allCoursesData = categoryMap[category];
    categoryTabLists.push(tabObject);
  }

  // If no enabledTabs prop is provided, show all tabs
  const tabsToShow =
    title === 'Bhaktiyoga' || title === 'School Of Love' || title === 'Lifestyle'
      ? tabLists.map((tab, index) => ({ ...tab, index }))
      : categoryTabLists.map((tab, index) => ({ ...tab, index }));

  const [tabIndex, setTabIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="relative my-4">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="flex items-center space-x-2">
          {/* Left Scroll Button */}
          {title !== 'Bhaktiyoga' && title !== 'Lifestyle' && title !== 'School Of Love' && (
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
          {title !== 'Bhaktiyoga' && title !== 'Lifestyle' && title !== 'School Of Love' && (
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

        {tabsToShow.map((eachTab) => (
          <TabPanel key={eachTab.index}>
            {eachTab.allCoursesData.length > 0 ? (
              <>
                <Swiper
                  ref={swiperRef}
                  spaceBetween={20}
                  slidesPerView={1}
                  centerInsufficientSlides
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 40
                    }
                  }}>
                  {eachTab.allCoursesData.map((course, index) => (
                    <SwiperSlide key={index} className="p-5 md:px-2">
                      <CourseCard course={course} title={title} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button
                  onClick={() => swiperRef.current.swiper.slidePrev()}
                  className={`absolute -left-4 top-1/2 z-10  lg:-left-10 xl:inline ${
                    eachTab.allCoursesData.length <= 0 ? 'hidden' : ''
                  }`}>
                  <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle
                      r="23"
                      transform="matrix(-1 0 0 1 24 24)"
                      stroke="#2D81F7"
                      strokeWidth="2"
                    />
                    <path
                      d="m27 30-6-6 6-6"
                      stroke="#2D81F7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => swiperRef.current.swiper.slideNext()}
                  className={`absolute -right-4 top-1/2 z-10  lg:-right-10  ${
                    eachTab.allCoursesData.length <= 0 ? 'hidden' : 'xl:inline'
                  }`}>
                  <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="23" stroke="#2D81F7" strokeWidth="2" />
                    <path
                      d="m21 30 6-6-6-6"
                      stroke="#2D81F7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </>
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
