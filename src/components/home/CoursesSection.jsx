import CourseCard from "../shared/NewCourseCard"


const CoursesSection = ({ bhaktiYogaCourses }) => {
    console.log(bhaktiYogaCourses,'courses')
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a3254]">
            COURSES IN <span>OUR UNIVERSITY</span>
            <div className="w-20 h-0.5 bg-[#0a3254] mx-auto mt-2"></div>

          </h2>
          <p className="text-gray-600 mt-4">Find online courses and a wide range of related learning content.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bhaktiYogaCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
           ))} 
        </div>
      </div>
    </section>
  )
}

export default CoursesSection

