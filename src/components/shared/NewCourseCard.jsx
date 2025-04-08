import Image from 'next/image';
import { findTagValue } from '@/src/utils/parse';
import { Star, TimerIcon, Wallet } from 'lucide-react';
import { categoriesID, durationTagID, isCertificateAvailableID } from 'data/tags';
import dayjs from 'dayjs';
import Badge, { Certify } from './Badge';
import { BsPeople } from 'react-icons/bs';
import Price from './Price';
import Link from 'next/link';

export default function CourseCard({ course }) {
  console.log(course);
  const haveCategories = findTagValue(course.tags, categoriesID);
  const geoPrice = {
    cost: course?.cost,
    position: course?.position,
    currency_symbol: course?.currency_symbol
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const hasHalfStar = rating % 1 >= 0.5; // Check if there's a half star
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

    return (
      <div className="flex text-green-500">
        {/* Full Stars */}
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <Star key={`full-${i}`} fill="currentColor" size={12} />
          ))}

        {/* Half Star */}
        {hasHalfStar && <Star key="half" fill="none" size={12} stroke="currentColor" />}

        {/* Empty Stars */}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <Star key={`empty-${i}`} fill="none" size={12} stroke="currentColor" />
          ))}
      </div>
    );
  };
  const calculateDaysLeft = (startDate) => {
    const today = dayjs();
    const start = dayjs.unix(startDate);
    const daysLeft = start.diff(today, 'day'); // Difference in days
    return daysLeft > 0 ? `${daysLeft} Days Left` : '-';
  };
  return (
    <Link
      href={`/course-details/${course.pretty_name}-${course.institution_bundle_id}`}
      className="min-h-[342px] transition-transform duration-300 hover:scale-105"
      target="_blank"
      rel="noreferrer">
      <div className="min-h-[342px] max-w-sm overflow-hidden border bg-white shadow-lg">
        {/* Image Section */}
        <div className="relative">
          <img
            src={course.img_url || '/images/course-default.png'} // Replace with actual image path
            alt="Course"
            className="h-48 w-full object-cover"
          />
          {/* Green Badge */}
          <div className="gap- absolute right-2 top-2 flex flex-row bg-green-500 px-3 py-1 text-xs font-bold text-white">
            <TimerIcon size={16} /> <span>{calculateDaysLeft(course.course_start_date)} Days</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex items-center justify-between space-x-3 bg-gray-100 p-2">
          {/* <img
              src="/user.jpg" // Replace with actual user image path
              alt="Instructor"
              className="w-8 h-8 rounded-full border"
            /> */}
          <span className="w-[200px] overflow-hidden text-[12px] font-medium text-gray-700">
            {course.tutors[0]?.tutor_name || 'Unknown Tutor'}
          </span>
          <div className="mt-2 flex items-center justify-end gap-2">
            <span className="flex flex-row items-center gap-1 text-xs font-semibold md:text-sm">
              <Wallet className="inline-block" size={16} />{' '}
              {course.package_cost_set == 1 && <Price geoPrice={geoPrice} />}
            </span>
            <div className="flex items-center gap-1 text-xs text-gray-500 md:text-sm">
              <span className="material-icons">
                <BsPeople size={16} />
              </span>{' '}
              <span>{course.student_count}</span>
            </div>
          </div>
        </div>
        <div className="p-2">
          {/* User Info */}

          {/* Price & Reviews */}

          {/* Course Info */}
          <div className="mt-2 flex flex-row justify-between">
            <span className="text-sm text-gray-600">
              {haveCategories !== 'N/A' && <div>{haveCategories}</div>}
            </span>
            <div className="mt-1 flex items-center">
              {/* Rating Stars */}
              <div className="felx-row flex text-green-500">
                {renderStars(course.rating)}
              </div>
              <span className="ml-2 text-sm text-gray-500">{course.num_of_rating} review</span>
            </div>
          </div>

          {/* Course Title */}
          <h2 className="mt-2 text-sm font-bold text-[#002b46]">{course.bundle_name}</h2>
        </div>
      </div>
    </Link>
  );
}
