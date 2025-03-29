'use client';
import CourseCard from 'components/shared/CourseCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';

const RelatedContent = ({ relatedCourses }) => {
  // console.log(relatedCourses);
  const swiperRef = useRef(null);
  return (
    <section className="relative m-auto max-w-6xl px-3 py-12">
      <div className="mb-8">
        <h2 className=" text-2xl font-semibold md:text-32px">Related Content</h2>
      </div>

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
        {relatedCourses.map((course, index) => (
          <SwiperSlide key={index} className="p-5 md:px-2">
            <CourseCard course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => swiperRef.current.swiper.slidePrev()}
        className={`absolute left-2 top-1/3 z-10  lg:-left-10 xl:inline ${
          relatedCourses.length <= 0 ? 'hidden' : 'xl:inline'
        }`}>
        <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle r="23" transform="matrix(-1 0 0 1 24 24)" stroke="#2D81F7" strokeWidth="2" />
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
        className={`absolute right-2 top-1/3 z-10  lg:-right-10  ${
          relatedCourses.length <= 0 ? 'hidden' : 'xl:inline'
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
    </section>
  );
};

export default RelatedContent;
