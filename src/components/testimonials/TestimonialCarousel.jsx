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
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={5}
          centeredSlides
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          initialSlide={0}
          loop
          spaceBetween={30}
          className="px-8 py-6">
          {testimonials.map((t, index) => (
            <SwiperSlide key={t.id} className="flex justify-center">
              <img
                src={`/avatars/${t.image}.png`}
                alt={t.name}
                className={`rounded-full border-4 transition-all duration-300 
                  ${activeIndex === index ? 'scale-130 border-white' : 'scale-100 opacity-80'}
                `}
                style={{
                  width: '80px',
                  height: '80px'
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
