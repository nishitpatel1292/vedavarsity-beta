'use client';
import Image from 'next/image';
import teacher_img from 'public/images/teacher-default.png';

const Teacher = ({ teacherDetails }) => {
  return (
    <div className="items-start  space-y-4 rounded-xl bg-white px-4 py-6 shadow-lg shadow-mist/70 md:flex md:gap-10 md:space-y-0 md:px-14 md:py-10">
      <h2 className="text-2xl font-semibold md:hidden">About the Teacher</h2>
      <div className="max-w-[140px] space-y-2">
        <Image
          src={teacherDetails.img_url == '' ? teacher_img : teacherDetails.img_url} //TODO: add default image incase not available
          alt="teacher"
          width={140}
          height={140}
          objectFit="cover"
          className="rounded-lg"
        />
        <p className="font-semibold md:text-xl">{teacherDetails.tutor_name}</p>
      </div>
      <div className=" md:max-w-xl md:space-y-5">
        <h2 className="hidden  text-32px font-semibold md:block">About the Teacher</h2>
        {teacherDetails.about == null ? (
          <p>Details Not Provided</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: teacherDetails.about }} />
        )}
      </div>
    </div>
  );
};

export default Teacher;
