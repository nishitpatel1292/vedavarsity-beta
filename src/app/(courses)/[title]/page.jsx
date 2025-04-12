'use client';
import Hero from '@/src/components/all-teachers/Hero';
import Breadcrumbs from '@/src/components/shared/Breadcrumbs';
import { subTitles } from '@/src/data/courseSubTitles';
import courseTypeMap from '@/src/data/courseTypeMap';
import { categoriesID, languageTagID } from '@/src/data/tags';
import axios from 'axios';
import CourseTabs from 'components/listing/CourseTabs';
// import Hero from 'components/listing/Hero';
import { atom, useAtom } from 'jotai';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// export const metadata = {
//   title: 'ISKCON Board Of Examination Courses | Certificate Courses',
//   description:
//     'Enrol in ISKCON Board Courses to deepen your understanding of spiritual wisdom through Bhagavad Gita, Iskcon Disciple Course, and Bhakti Shastri studies.'
// };
export const coursesAtom = atom(null);

export default function CourseDescription() {
  let [vedvarsityCourses] = useAtom(coursesAtom);

  let filtered =
    vedvarsityCourses != null ? vedvarsityCourses.institute_courses[0]?.course_bundles : null;
  const [vedavarsity, setvedavarsity] = useState([]);
  const [allTeachers, setAllTeachers] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [allLanguages, setAllLanguages] = useState([]);
  const { title } = useParams();

  const fetchCourse = async () => {
    console.log('Fetching courses...');
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/institute/${process.env.NEXT_PUBLIC_INST_ID}/courses?get_tutors=1&get_tags=1&get_student_count=1`
      );

      const data = response.data;
      console.log('API data:', data);

      const { data: categoryCourses } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/institute/${process.env.NEXT_PUBLIC_INST_ID}/courses?get_tutors=1&get_tags=1&get_student_count=1&categories_ids=${courseTypeMap[title]}`
      );
      const courses = categoryCourses.institute_courses[0]?.course_bundles;

      setvedavarsity(courses || []);
      setAllTeachers(data.tutors || []);
      setAllCategories(data.tags.filter((tag) => tag.tag_categories_id === categoriesID) || []);
      setAllLanguages(data.tags.filter((tag) => tag.tag_categories_id === languageTagID) || []);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };
  useEffect(() => {
    console.log('Title:', title);
    if (title) {
      fetchCourse();
    }
  }, [title]);

  const formattedTitle = title === 'lifestyle' ? 'Vedic Lifestyle' : title.split('-').join(' ');

  return (
    <>
      <Hero title={formattedTitle} />
      <Breadcrumbs lastPath={formattedTitle} />

      {vedavarsity.length > 0 && (
        <CourseTabs
          courses={filtered !== null ? filtered : vedavarsity}
          title={title.split('-').join(' ')}
          allTeachers={allTeachers}
          allCategories={allCategories[0]?.tag_categories_values || []}
          allLanguages={allLanguages[0]?.tag_categories_values || []}
        />
      )}
    </>
  );
}
