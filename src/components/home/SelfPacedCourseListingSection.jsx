'use client';
import { useEffect, useState } from 'react';
import CourseFilterTab from './CourseFilterTab';
import axios from 'axios';
// import CourseTabView from './CourseTabView';
const courses = [
  {
    title: 'history'
  },
  {
    title: 'gita_wisdom'
  },
  {
    title: 'parenting'
  },
  {
    title: 'bhakti_yoga'
  },
  {
    title: 'school_of_love'
  },
  {
    title: 'afterschool'
  },
  {
    title: 'sanskrit'
  },
  {
    title: 'lifestyle'
  }
];
const SelfPacedCourseListingSection = ({
  bhaktiYogaCourses,
  schoolOfLoveCourses,
  lifeStyleCourses
}) => {
  //   const [bhaktiYogaCourses, setBhaktiYogaCourses] = useState([]);
  //   const [schoolOfLoveCourses, setSchoolOfLoveCourses] = useState([]);
  //   const [lifeStyleCourses, setLifeStyleCourses] = useState([]);
  const [communityLinks, setCommunityLinks] = useState({ whatsapp: '', telegram: '' });
  const [allCoursesData, setAllCoursesData] = useState([]);
  //   const [bhaktiYogaCourses, setBhaktiYogaCourses] = useState([]);
  //   const [schoolOfLoveCourses, setSchoolOfLoveCourses] = useState([]);
  //   const [lifeStyleCourses, setLifeStyleCourses] = useState([]);
  const [historyCourses, setHistoryCourses] = useState([]);
  const [puranasCourses, setPuranasCourses] = useState([]);
  const [gitaCourses, setGitaCourses] = useState([]);
  const [parentingCourses, setParentingCourses] = useState([]);
  const [sanskritCourses, setSanskritCourses] = useState([]);
  const [afterSchoolCourses, setAfterSchoolCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/institute/${process.env.NEXT_PUBLIC_INST_ID}/courses?get_tutors=1&get_tags=1&get_student_count=1`
        );

        const courses = response.data?.institute_courses[0]?.course_bundles || [];
        setAllCoursesData(courses);
        console.log(courses, 'allcourses');

        // Filter courses based on categories
        const bhaktiYoga = courses.filter((course) =>
          course.tags?.some((tag) => tag.id === 479 && tag.value.includes('Bhakti Yoga'))
        );
        const schoolOfLove = []; // You might need to define what constitutes "School of Love"
        const lifeStyle = courses.filter((course) =>
          course.tags?.some((tag) => tag.id === 479 && tag.value.includes('Lifestyle'))
        );
        const history = courses.filter((course) =>
          course.tags?.some((tag) => tag.id === 479 && tag.value.includes('History'))
        );
        const puranas = courses.filter((course) =>
          course.tags?.some((tag) => tag.id === 479 && tag.value.includes('Puranas'))
        );
        const gita = courses.filter((course) =>
          course.tags?.some((tag) => tag.id === 479 && tag.value.includes('Gita Wisdom'))
        );
        const parenting = courses.filter((course) =>
          course.tags?.some((tag) => tag.id === 479 && tag.value.includes('Parenting'))
        );
        const sanskrit = courses.filter((course) =>
          course.tags?.some((tag) => tag.id === 479 && tag.value.includes('Sanskrit'))
        );
        const afterSchool = courses.filter((course) =>
          course.tags?.some((tag) => tag.id === 479 && tag.value.includes('After school for kids'))
        );

        // setBhaktiYogaCourses(bhaktiYoga);
        // setSchoolOfLoveCourses(schoolOfLove);
        // setLifeStyleCourses(lifeStyle);
        setHistoryCourses(history);
        setPuranasCourses(puranas);
        setGitaCourses(gita);
        setParentingCourses(parenting);
        setSanskritCourses(sanskrit);
        setAfterSchoolCourses(afterSchool);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="mb-12 bg-cloud" id="courses">
      <div className="m-auto max-w-7xl px-4">
        <CourseFilterTab
          courseTabs={[
            { label: 'Puranas', data: puranasCourses },
            { label: 'Gita Wisdom', data: gitaCourses },
            { label: 'History', data: historyCourses },
            { label: 'Bhaktiyoga', data: bhaktiYogaCourses },
            { label: 'School of Love', data: schoolOfLoveCourses },
            { label: 'Vedic Lifestyle', data: lifeStyleCourses },
            // { label: 'Bhakti Yoga', data: bhaktiYogaCourses },
            // { label: 'Lifestyle', data: lifeStyleCourses },
            { label: 'Parenting', data: parentingCourses },
            { label: 'Sanskrit', data: sanskritCourses },
            { label: 'After School', data: afterSchoolCourses }
          ]}
        />
      </div>
    </section>
  );
};

export default SelfPacedCourseListingSection;
