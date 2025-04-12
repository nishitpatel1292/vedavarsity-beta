'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { testimonials } from '@/src/data/testimonials';
import { Navigation, Pagination } from 'swiper';
import SectionTitle from '../shared/SectionTitle';
// import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="relative bg-black bg-cover bg-center px-4 py-20 text-white"
      style={{ backgroundImage: "url('/images/testimonial-bg.webp')" }}>
      {' '}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="mx-auto max-w-4xl text-center">
        <SectionTitle title={'WHAT PEOPLE SAY'} background={'dark'} />
        <p className="mb-8 text-lg">How real people said about us.</p>

        {/* Quote Section */}
        <div className="mb-4 mt-20 transition-all duration-500">
          <p className="mx-auto mb-4 max-w-2xl text-xl italic">{testimonials[activeIndex].quote}</p>
          <p className="text-lg font-bold uppercase text-white">{testimonials[activeIndex].name}</p>
        </div>

        {/* Avatars Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <div className="absolute left-0 z-10 hidden md:block">
            <div className="swiper-button-prev !text-3xl !text-white" />
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            loop
            centeredSlides
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            initialSlide={0}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 }
            }}
            className="max-w-full px-4 py-6">
            {testimonials.map((t, index) => (
              <SwiperSlide key={t.id} className="flex justify-center">
                <img
                  src={`/avatars/${t.image}.png`}
                  alt={t.name}
                  className={`rounded-full border-4 transition-all duration-300 
            ${activeIndex === index ? 'scale-130 border-white' : 'scale-100 opacity-80'}
          `}
                  style={{ width: '80px', height: '80px' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Arrow */}
          <div className="absolute right-0 z-10 hidden md:block">
            <div className="swiper-button-next !text-3xl !text-white" />
          </div>
        </div>
      </div>
      {/* Extra styling for scale */}
      <style jsx>{`
        .scale-130 {
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
}
