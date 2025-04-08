import CourseCard from '../shared/NewCourseCard';
import SectionTitle from '../shared/SectionTitle';

const CoursesSection = ({ bhaktiYogaCourses }) => {
  console.log(bhaktiYogaCourses, 'courses');
  return (
    <section className="px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <SectionTitle title={'COURSES IN OUR UNIVERSITY'} />
          <p className="mt-4 text-gray-600">
            Find online courses and a wide range of related learning content.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bhaktiYogaCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default CoursesSection;
