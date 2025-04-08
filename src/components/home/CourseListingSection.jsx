'use client';
import CourseFilterTab from './CourseFilterTab';
// import CourseTabView from './CourseTabView';

const CourseListingSection = ({ bhaktiYogaCourses, selfPacedCourses, lifeStyleCourses }) => {
  return (
    <section className="bg-cloud" id="courses">
      <div className="m-auto max-w-7xl px-4">
        <CourseFilterTab
          courseTabs={[
            { label: 'Bhaktiyoga', data: bhaktiYogaCourses },
            { label: 'Self Paced', data: selfPacedCourses },
            { label: 'Lifestyle', data: lifeStyleCourses }
          ]}
        />
      </div>
    </section>
  );
};

export default CourseListingSection;
