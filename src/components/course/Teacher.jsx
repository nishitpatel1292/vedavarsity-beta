'use client';
import Image from 'next/image';
import teacher_img from 'public/images/teacher-default.png';

const Teacher = ({ teacherDetails }) => {
  return (
    <div className="rounded-xl bg-white py-2">
      <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Our Main Teachers</h2>

      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        {/* Teacher Image */}
        <div className="flex-shrink-0">
          <Image
            src={teacherDetails.img_url == '' ? teacher_img : teacherDetails.img_url}
            alt="teacher"
            width={140}
            height={140}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Teacher Details */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900">{teacherDetails.tutor_name}</h3>

          {/* Teacher Description */}
          <div className="prose prose-gray max-w-none">
            {teacherDetails.about == null ? (
              <p className="text-gray-600">Details Not Provided</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: teacherDetails.about }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
