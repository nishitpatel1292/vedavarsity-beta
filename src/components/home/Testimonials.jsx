'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { testimonials } from 'data/testimonials';
import { counter } from 'data/counter';
import CountUp from 'react-countup';
import { useState } from 'react';
// import VisibilitySensor from 'react-visibility-sensor';

import { useRef } from 'react';
import { InView } from 'react-intersection-observer';

// components/TestimonialSlider.tsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

// const testimonials = [
//   {
//     name: 'Anthony',
//     role: 'Front-end Developer',
//     image: '/anthony.jpg',
//     text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.`,
//   },
//   // Add more testimonials if needed...
// ]

export default function Testimonials() {
  return (
    <div
      className="relative bg-cover bg-center text-white py-20 px-6"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">WHAT PEOPLE SAY</h2>
        <p className="mb-8 text-sm text-gray-300">
          How real people said about Education WordPress Theme.
        </p>

        <Swiper
          modules={[Navigation]}
          navigation
          loop
          className="w-full"
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <p className="text-lg italic mb-6 max-w-2xl mx-auto">{item.desc}</p>
              <div className="flex justify-center space-x-4 mt-6">
                {testimonials.map((t, index) => (
                  <img
                    key={index}
                    src={t.image}
                    alt={t.name}
                    className={`w-20 h-20 rounded-full border-4 ${
                      i === index ? 'border-white scale-110' : 'border-transparent opacity-50'
                    } transition-transform duration-300`}
                  />
                ))}
              </div>
              <div className="mt-6">
                <h4 className="text-xl font-bold">{item.name}</h4>
                {/* <p className="text-sm text-gray-400">{item.role}</p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

// const Testimonials = () => {
//   const swiperRef = useRef(null);
//   const [focus, setFocus] = useState(false);
//   return (
//     <section className="bg-cloud" id="testimonial">
//       <div className="relative m-auto max-w-7xl px-4 py-12">
//         <h2 className="text-center  text-28px font-bold  lg:text-38px">Testimonials</h2>
//         <ul className="mx-auto my-8  grid max-w-4xl   grid-cols-2 gap-10 lg:grid-cols-4">
//           {counter.map((each) => (
//             <li className="rounded-lg px-2 py-4 text-center shadow-lg shadow-mist" key={each.label}>
//               <CountUp
//                 suffix={each.suffix}
//                 end={each.count}
//                 duration={3}
//                 delay={1}
//                 start={focus ? 0 : null}>
//                 {({ countUpRef }) => (
//                   // <VisibilitySensor
//                   <InView
//                     onChange={(isVisible) => {
//                       if (isVisible) {
//                         setFocus(true);
//                       }
//                     }}>
//                     <span
//                       ref={countUpRef}
//                       className="text-32px font-bold md:text-38px"
//                       style={{ color: each.color }}
//                     />
//                   </InView>
//                   // </VisibilitySensor>
//                 )}
//               </CountUp>
//               <p className="mt-1 text-xs font-medium text-gray-500 md:text-base">{each.label}</p>
//             </li>
//           ))}
//         </ul>

//         <Swiper
//           className="mt-12 items-stretch "
//           spaceBetween={20}
//           slidesPerView={1}
//           centerInsufficientSlides
//           ref={swiperRef}
//           breakpoints={{
//             768: {
//               slidesPerView: 2
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 40
//             }
//           }}>
//           {testimonials.map((testimony, index) => (
//             <SwiperSlide key={index}>
//               <div className="m-2 min-h-[486px] rounded-lg p-4 text-center ring-2 ring-secondary">
//                 <Image src={testimony.image} alt={testimony.name} placeholder="blur" />
//                 <h3 className="my-2  text-lg font-semibold">{testimony.name}</h3>
//                 <p className="text-base ">{testimony.desc}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <button
//           onClick={() => swiperRef.current.swiper.slidePrev()}
//           className={`absolute left-0 top-1/2 z-10  lg:-left-20 xl:inline`}>
//           <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <circle r="23" transform="matrix(-1 0 0 1 24 24)" stroke="#2D81F7" strokeWidth="2" />
//             <path
//               d="m27 30-6-6 6-6"
//               stroke="#2D81F7"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>
//         <button
//           onClick={() => swiperRef.current.swiper.slideNext()}
//           className={`absolute right-0 top-1/2 z-10  lg:-right-20`}>
//           <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <circle cx="24" cy="24" r="23" stroke="#2D81F7" strokeWidth="2" />
//             <path
//               d="m21 30 6-6-6-6"
//               stroke="#2D81F7"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>
//       </div>
//     </section>
//   );
// };

