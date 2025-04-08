import Image from 'next/image';
import SectionTitle from '../shared/SectionTitle';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const teachers = [
  {
    tutor_id: 91255982,
    tutor_name: 'ShriLaxmi Priya ',
    img_url: 'https://dme2wmiz2suov.cloudfront.net/User(91255982)/3634379-INSS_HD_logo_.pdf.png'
  },
  {
    tutor_id: 91355674,
    tutor_name: 'Bhakti Karunamayi Vanamali Swami',
    img_url:
      'https://dme2wmiz2suov.cloudfront.net/User(91355674)/3725377-WhatsApp_Image_2025-01-15_at_4.41.22_PM.jpeg'
  }
  // ... add rest of the tutors
];

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

export default function OurTeachers() {
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

  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <SectionTitle title={'Our Teachers'} />
        {/* <h2 className="text-3xl font-bold mb-2">OUR TEACHERS</h2> */}
        <p className="mb-10 text-gray-600">
          Find online courses and a wide range of related learning content.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allTeachers.slice(0,4).map((tutor) => (
            <TeacherCard key={tutor.tutor_id} name={tutor.tutor_name} image={tutor.img_url} />
          ))}
        </div>
        <div className="mt-10">
          <Link href='/all-teachers' className="bg-gray-800 px-6 py-3 text-white transition hover:bg-gray-700">
            VIEW MORE OUR TEACHERS
          </Link>
        </div>
      </div>
    </section>
  );
}
