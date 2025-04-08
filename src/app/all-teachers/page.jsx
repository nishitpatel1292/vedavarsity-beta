'use client';
import Hero from '@/src/components/all-teachers/Hero';
import { subTitles } from '@/src/data/courseSubTitles';
import courseTypeMap from '@/src/data/courseTypeMap';
import { categoriesID, languageTagID } from '@/src/data/tags';
import axios from 'axios';
import CourseTabs from 'components/listing/CourseTabs';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// export const metadata = {
//   title: 'ISKCON Board Of Examination Courses | Certificate Courses',
//   description:
//     'Enrol in ISKCON Board Courses to deepen your understanding of spiritual wisdom through Bhagavad Gita, Iskcon Disciple Course, and Bhakti Shastri studies.'
// };

const TeacherCard = ({ name, image }) => {
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
      <div className="p-4">
        <h3 className="text-center text-lg font-semibold">{name}</h3>
      </div>
    </div>
  );
};

export default function CourseDescription() {
  const [allTeachers, setAllTeachers] = useState([]);

  const fetchTutors = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/institute/${process.env.NEXT_PUBLIC_INST_ID}/courses?get_tutors=1&get_tags=1&get_student_count=1`
      );

      const data = response.data;
      console.log('API data:', data);

      const { data: categoryCourses } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/institute/${process.env.NEXT_PUBLIC_INST_ID}/courses?get_tutors=1&get_tags=1&get_student_count=1}`
      );
      const courses = categoryCourses.institute_courses[0]?.course_bundles;

      setAllTeachers(data.tutors || []);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };
  useEffect(() => {
    fetchTutors();
  }, []);
console.log(allTeachers)
  return (
    <>
      <Hero title={'Our beloved teachers'} />
      <div className='max-w-7xl flex justify-center items-center m-auto'>
        {allTeachers.length > 0 && (
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {allTeachers.map((tutor) => (
              <TeacherCard key={tutor.tutor_id} name={tutor.tutor_name} image={tutor.img_url} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
