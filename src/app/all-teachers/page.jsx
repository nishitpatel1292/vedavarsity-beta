'use client';
import Hero from '@/src/components/all-teachers/Hero';
import { subTitles } from '@/src/data/courseSubTitles';
import courseTypeMap from '@/src/data/courseTypeMap';
import { categoriesID, languageTagID } from '@/src/data/tags';
import { teachers } from '@/src/data/teachers';
import axios from 'axios';
import CourseTabs from 'components/listing/CourseTabs';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// export const metadata = {
//   title: 'ISKCON Board Of Examination Courses | Certificate Courses',
//   description:
//     'Enrol in ISKCON Board Courses to deepen your understanding of spiritual wisdom through Bhagavad Gita, Iskcon Disciple Course, and Bhakti Shastri studies.'
// };

const TeacherCard = ({ id, name, image, bio }) => {
  return (
    <div className="w-full max-w-xs overflow-hidden  bg-white shadow-md">
      <div className="relative h-60 w-full">
        {image ? (
          <Image src={image} alt={name} layout="fill" objectFit="cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
            No Image
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between items-end p-2">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="mt-3 line-clamp-4 text-sm text-gray-700">{bio}</p>
        </div>
        <div className="mx-auto my-2 w-fit bg-gray-100 px-4 py-2 text-sm transition hover:bg-gray-200">
          <Link href={`teacher/${id}`} className="">
            VIEW PROFILE
          </Link>
        </div>
      </div>
    </div>
    // <div className="flex items-start gap-6">
    //   <div className="group relative h-48 w-48 min-w-[12rem] overflow-hidden">
    //     <Image
    //       src={image || ''}
    //       alt="Teacher"
    //       width={192}
    //       height={192}
    //       className="h-full w-full object-cover"
    //     />
    //   </div>

    //   <div>
    //     <h3 className="text-lg font-semibold">{name}</h3>
    //     <p className="mt-3 line-clamp-4 text-sm text-gray-700">{bio}</p>
    //     <div className="mt-4 w-fit bg-gray-100 px-4 py-2 text-sm transition hover:bg-gray-200">
    //       <Link href={`teacher/${id}`} className="">
    //         VIEW PROFILE
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default function CourseDescription() {
  // const [allTeachers, setAllTeachers] = useState([]);

  // const fetchTutors = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.NEXT_PUBLIC_API_URL}/institute/${process.env.NEXT_PUBLIC_INST_ID}/courses?get_tutors=1&get_tags=1&get_student_count=1`
  //     );

  //     const data = response.data;
  //     console.log('API data:', data);

  //     const { data: categoryCourses } = await axios.get(
  //       `${process.env.NEXT_PUBLIC_API_URL}/institute/${process.env.NEXT_PUBLIC_INST_ID}/courses?get_tutors=1&get_tags=1&get_student_count=1}`
  //     );
  //     const courses = categoryCourses.institute_courses[0]?.course_bundles;

  //     setAllTeachers(data.tutors || []);
  //   } catch (err) {
  //     console.error('Error fetching data:', err);
  //   }
  // };
  // useEffect(() => {
  //   fetchTutors();
  // }, []);

  return (
    <>
      <Hero title={'Our beloved teachers'} />
      <div className="m-auto flex max-w-7xl items-center justify-center">
        {teachers.length > 0 && (
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teachers.map((tutor) => (
              <TeacherCard
                key={tutor.key}
                id={tutor.key}
                name={tutor.name}
                bio={tutor.bio}
                image={tutor.image}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
