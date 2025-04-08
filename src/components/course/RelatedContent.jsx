'use client';
import CourseCard from 'components/shared/CourseCard';
import NewCourseCard from 'components/shared/NewCourseCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';

const LatestPostCard = ({ course }) => {
  // Format the start date as shown in the image (e.g., "13 Jan 2017")
  const formattedDate = course.course_start_date
    ? dayjs.unix(course.course_start_date).format('DD MMM YYYY')
    : 'Date not available';

  return (
    <Link
      href={`/course-details/${course.pretty_name}-${course.institution_bundle_id}`}
      className="group">
      <div className="mb-4 flex flex-row gap-2 border-b border-gray-200 pb-4 last:border-0 last:pb-0">
        <div className="mr-4 h-16 w-16 flex-shrink-0">
          <img
            src={course.img_url || ''} // Fallback image if img_url is not available
            alt={course.bundle_name || 'Course Image'}
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div className='flex flex-col justify-between'> 
          <h3 className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
            {course.bundle_name || 'Untitled Course'}
          </h3>
          <p className="text-xs text-gray-500">{formattedDate}</p>
        </div>
      </div>
    </Link>
  );
};

const RelatedContent = ({ relatedCourses }) => {
  // console.log(relatedCourses);
  const swiperRef = useRef(null);
  return (
    // <section className="relative m-auto max-w-7xl px-3 py-12">
    //   <div className="mb-8">
    //     <h2 className=" text-2xl font-semibold md:text-32px">Related Content</h2>
    //   </div>

    //   <Swiper
    //     ref={swiperRef}
    //     spaceBetween={20}
    //     slidesPerView={1}
    //     centerInsufficientSlides
    //     breakpoints={{
    //       768: {
    //         slidesPerView: 2,
    //         spaceBetween: 30
    //       },
    //       1024: {
    //         slidesPerView: 3,
    //         spaceBetween: 40
    //       }
    //     }}>
    //     {relatedCourses.map((course, index) => (
    //       <SwiperSlide key={index} className="p-5 md:px-2">
    //         <NewCourseCard course={course} />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    //   <button
    //     onClick={() => swiperRef.current.swiper.slidePrev()}
    //     className={`absolute left-2 top-1/3 z-10  lg:-left-10 xl:inline ${
    //       relatedCourses.length <= 0 ? 'hidden' : 'xl:inline'
    //     }`}>
    //     <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
    //       <circle r="23" transform="matrix(-1 0 0 1 24 24)" stroke="#2D81F7" strokeWidth="2" />
    //       <path
    //         d="m27 30-6-6 6-6"
    //         stroke="#2D81F7"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //     </svg>
    //   </button>
    //   <button
    //     onClick={() => swiperRef.current.swiper.slideNext()}
    //     className={`absolute right-2 top-1/3 z-10  lg:-right-10  ${
    //       relatedCourses.length <= 0 ? 'hidden' : 'xl:inline'
    //     }`}>
    //     <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
    //       <circle cx="24" cy="24" r="23" stroke="#2D81F7" strokeWidth="2" />
    //       <path
    //         d="m21 30 6-6-6-6"
    //         stroke="#2D81F7"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //     </svg>
    //   </button>
    // </section>
    <div className="sidebar-section mt-8">
      <h2 className="relative inline-block text-xl font-extrabold uppercase text-[#002B45] after:block after:h-1 after:w-8 after:bg-[#002B45]">
        Related Courses
      </h2>
      <h3 className="section-title mt-5 uppercase"></h3>
      {relatedCourses.slice(0, 3).map((course) => (
        <LatestPostCard key={course.institution_bundle_id} course={course} />
      ))}
    </div>
  );
};

export default RelatedContent;
