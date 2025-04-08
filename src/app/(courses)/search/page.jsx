'use client'; // Mark this as a client component

import { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import Hero from '@/src/components/listing/Hero';
import CourseCard from '@/src/components/shared/CourseCard';
import NewCourseCard from '@/src/components/shared/NewCourseCard'
import { useSearchParams } from 'next/navigation';

function SearchCoursesContent() {
  const [searchBundles, setSearchBundles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const query = searchParams.get('q'); // Query parameter passed through the URL

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/institute/${process.env.NEXT_PUBLIC_INST_ID}/courses?get_tutors=1&get_tags=1&get_student_counts=1&search=${query}`
      );

      console.log('search results', data);

      // Combine the course bundles
      const allCourse = [
        ...(data.institute_courses?.[0]?.course_bundles || []),
        ...(data.institute_courses?.[1]?.course_bundles || [])
      ];

      setSearchBundles(allCourse);
    } catch (err) {
      console.error('Failed to fetch courses:', err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('query', query);
    if (query) {
      fetchCourses();
    } else {
      setSearchBundles(null);
      setLoading(false);
      return;
    }
  }, [query]);

  return (
    <>
      <Hero searchBased={query ? 'Explore Courses' : 'Explore'} />

      {loading ? (
        <h2 className="my-10 text-center text-2xl font-semibold">Loading...</h2>
      ) : error ? (
        <h2 className="my-10 text-center text-2xl font-semibold text-red-500">{error}</h2>
      ) : searchBundles?.length > 0 ? (
        <div className="m-auto max-w-7xl px-4 py-12">
          <div className="grid justify-center gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {searchBundles.map((course) => (
              <NewCourseCard key={course.bundle_id} course={course} />
            ))}
          </div>
        </div>
      ) : query ? (
        <h1 className="my-10 text-center text-4xl font-bold">No Courses found</h1>
      ) : (
        <h2 className="my-10 text-center text-4xl font-bold">What are you looking for?</h2>
      )}
    </>
  );
}

export default function SearchCourses() {
  return (
    <section className="bg-cloud">
      <Suspense fallback={<h2 className="my-10 text-center text-2xl font-semibold">Loading...</h2>}>
        <SearchCoursesContent />
      </Suspense>
    </section>
  );
}
