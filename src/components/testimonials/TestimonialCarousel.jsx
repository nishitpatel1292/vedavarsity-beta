'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { testimonials } from '@/src/data/testimonials';
import SparklesText from '@/components/ui/sparkles-text';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function TestimonialsCarousel() {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Default for small screens
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows: false, // We’ll use custom buttons instead
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1,
          centerMode: false // Disable center mode for mobile
        }
      },
      {
        breakpoint: 1024, // Medium screens (e.g., tablets, small laptops)
        settings: {
          slidesToShow: 2, // Show 2 cards
          centerMode: true
        }
      },
      {
        breakpoint: 1280, // Larger screens (e.g., desktop)
        settings: {
          slidesToShow: 3, // Show 3 cards
          centerMode: true
        }
      }
    ]
  };

  return (
    <section className="bg-white py-12" id="testimonial">
      <div className="relative m-auto max-w-7xl px-4">
        {/* Header */}
        <h2 className="mb-6 text-left text-28px font-bold lg:text-38px">
          <SparklesText text="Testimonials" sparklesCount={5} />
        </h2>

        {/* Carousel */}
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimony, index) => (
              <div key={index} className="flex justify-center p-4">
                <div className="flex h-80 w-full max-w-3xl flex-col justify-between rounded-lg bg-primary p-6 text-white shadow-lg ring-2 ring-yellow-500 sm:flex-row md:h-60">
                  {/* Rating and Score */}
                  {/* <div className="order-last my-4 flex flex-col items-center justify-center sm:order-first sm:mb-0 sm:mr-8">
                    <div className="text-2xl font-bold">{testimony.rating?.toFixed(1) || 3.5}</div>
                    <div className="ml-2 flex">
                      {[1, 2, 3, 4, 5].map((starIndex) => (
                        <svg
                          key={starIndex}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 ${
                            starIndex <= Math.round(testimony.rating || 3.5)
                              ? 'text-yellow-400'
                              : 'text-gray-400'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 24 24">
                          <path d="M12 17.75l-6.763 4.114 1.75-7.313L2 9.886l7.485-.614L12 2.75l2.515 6.522 7.485.614-4.987 4.665 1.75 7.313z" />
                        </svg>
                      ))}
                    </div>
                  </div> */}

                  <div>
                    {/* Quote Icon */}
                    <div className="mb-4 text-4xl text-yellow-500">“</div>

                    {/* Profile */}
                    <div className="mb-4 flex items-center">
                      <Image
                        src={`/avatars/${testimony.image}.png`}
                        alt={testimony.name}
                        width={50}
                        height={50}
                        className="rounded-full border-2 border-yellow-500 bg-white"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">{testimony.name}</h3>
                        <span className="text-sm opacity-75">{testimony.role}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-justify text-sm leading-relaxed">{testimony.quote}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Buttons */}
          <button
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md lg:-left-8"
            onClick={() => sliderRef.current.slickPrev()}
            aria-label="Previous">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6 text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md lg:-right-8"
            onClick={() => sliderRef.current.slickNext()}
            aria-label="Next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6 text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19l7-7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
