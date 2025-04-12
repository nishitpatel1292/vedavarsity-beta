'use client';
import { useEffect, useState } from 'react';
import CourseFilterTab from './CourseFilterTab';
// import CourseTabView from './CourseTabView';

const CourseListingSection = ({ bhaktiYogaCourses, schoolOfLoveCourses, lifeStyleCourses }) => {
  const [allCoursesData, setAllCoursesData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch course data
        const [allCourses] =
          await Promise.all([
            axios.get(
              `${process.env.NEXT_PUBLIC_API_URL}/institute/${process.env.NEXT_PUBLIC_INST_ID}/courses?get_tutors=1&get_tags=1&get_student_count=1`
            ),
          ]);

          // console.log(lifeStyleCoursesRes.data,'all')

        setAllCoursesData(allCourses.data?.institute_courses[0]?.course_bundles || []);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="bg-cloud mb-20" id="courses">
      <div className="m-auto max-w-7xl px-4">
        <CourseFilterTab
          courseTabs={[
            { label: 'Bhaktiyoga', data: bhaktiYogaCourses },
            { label: 'School of Love', data: schoolOfLoveCourses },
            { label: 'Vedic Lifestyle', data: lifeStyleCourses }
          ]}
        />        
      </div>
    </section>
  );
};

export default CourseListingSection;
