import Image from 'next/image';
import { findTagValue } from '@/src/utils/parse';
import { Star, TimerIcon, Wallet } from 'lucide-react';
import { categoriesID, durationTagID, isCertificateAvailableID } from 'data/tags';
import dayjs from 'dayjs';
import Badge, { Certify } from './Badge';
import { BsPeople } from 'react-icons/bs';

export default function CourseCard({ course }) {
  console.log(course);
  const haveCategories = findTagValue(course.tags, categoriesID);
  return (
    <div className="max-w-sm overflow-hidden border bg-white shadow-lg">
      {/* Image Section */}
      <div className="relative">
        <img
          src={course.img_url || '/images/course-default.png'} // Replace with actual image path
          alt="Course"
          className="h-48 w-full object-cover"
        />
        {/* Green Badge */}
        <div className="gap- absolute right-2 top-2 flex flex-row bg-green-500 px-3 py-1 text-xs font-bold text-white">
          <TimerIcon size={16} /> <span>10 Days</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex items-center justify-between space-x-3 bg-gray-100 p-2">
        {/* <img
              src="/user.jpg" // Replace with actual user image path
              alt="Instructor"
              className="w-8 h-8 rounded-full border"
            /> */}
        <span className="font-medium text-gray-700 w-[250px] overflow-hidden">
          {course.tutors[0]?.tutor_name || 'Unknown Tutor'}
        </span>
        <div className="mt-2 flex items-center justify-end gap-1">
          <span className="font-semibold inline-block"><Wallet className='inline-block'/> $20</span>
          <div className="flex items-center text-sm text-gray-500 gap-1">
            <span className="material-icons">
              <BsPeople size={20}/>
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
              <Star fill="currentColor" size={12} />
              <Star fill="currentColor" size={12} />
              <Star fill="currentColor" size={12} />
              <Star fill="currentColor" size={12} />
              <Star size={12} />
            </div>
            <span className="ml-2 text-sm text-gray-500">4 review</span>
          </div>
        </div>

        {/* Course Title */}
        <h2 className="mt-2 text-sm font-bold text-[#002b46]">{course.bundle_name}</h2>
      </div>
    </div>
  );
}
