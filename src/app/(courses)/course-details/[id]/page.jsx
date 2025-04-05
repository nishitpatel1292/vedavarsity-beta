'use client'; // Declare this as a client component

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Hero from 'components/course/Hero';
import Info from 'components/course/Info';
import Overview from 'components/course/Overview';
import RelatedContent from 'components/course/RelatedContent';
import Schedule from 'components/course/Schedule';
import Teacher from 'components/course/Teacher';
import CourseContent from 'components/course/CourseContent';
import Faq from 'components/course/Faq';
import { mainURL } from 'data/seo';
import { categoriesID } from 'data/tags';
import { extractInstBundleId, findTagValue } from 'utils/parse';
import { Loader } from 'lucide-react';
import Breadcrumbs from '@/src/components/shared/Breadcrumbs';
import Price from '@/src/components/shared/Price';
import CourseCalendar from '@/src/components/course/Calender';

const Details = () => {
  const [courseDetails, setCourseDetails] = useState(null);
  const [courseSchedule, setCourseSchedule] = useState(null);
  const [fullCourseContent, setFullCourseContent] = useState(null);
  const [detailScheduleData, setDetailSchedule] = useState(null);
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [geoPrice, setGeoPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const fetchCourseData = async () => {
      try {
        setLoading(true);
        const institutionBundleID = extractInstBundleId(id);

        // Fetch course details
        const { data: courseDetailsData } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/organization/bundles/${institutionBundleID}?get_tutors=1`
        );
        setCourseDetails(courseDetailsData);

        // Fetch course schedule
        const { data: courseScheduleData } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/bundles/${courseDetailsData.bundle.bundle_id}/masterbatches?organization_id=${courseDetailsData.bundle.organization_id}`
        );
        setCourseSchedule(courseScheduleData);

        // Fetch full course content
        const { data: courseIdData } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/public/tutor/courses/all/${institutionBundleID}`
        );

        const { data: fullCourseContentData } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/public/tutor/class/curriculum/${courseIdData.courses[0].course_id}?institution_bundle_id=${institutionBundleID}`
        );
        setFullCourseContent(fullCourseContentData);
        console.log('full course', fullCourseContentData);
        // Fetch detailed schedule
        const { data: detailScheduleData } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/public/masterbatches/${
            courseScheduleData.master_batches[0].master_batch_id
          }/classes?offset=${new Date().getTimezoneOffset()}`
        );
        setDetailSchedule(detailScheduleData);
        console.log('detailed schedule', detailScheduleData);

        // Fetch related courses
        if (findTagValue(courseDetailsData.tags, categoriesID) !== 'N/A') {
          const { data: relatedCoursesData } = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/institute/${
              process.env.NEXT_PUBLIC_INST_ID
            }/courses?get_tutors=1&get_tags=1&get_student_count=1&tag_categories_name_array=[{"Categories":["${findTagValue(
              courseDetailsData.tags,
              categoriesID
            )}"]}]`
          );

          setRelatedCourses([...relatedCoursesData.institute_courses[0].course_bundles]);
        }
        let result = {
          cost: courseDetailsData?.bundle.cost,
          position: courseDetailsData?.bundle.position,
          currency_symbol: courseDetailsData?.bundle.currency_symbol
        };
        setGeoPrice(result);
        console.log(courseDetails, 'bundle');
      } catch (err) {
        console.error('got error', err);
        setError('Failed to fetch course data.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [id]);

  const categoriesObject = courseDetails?.tags.find((item) => item.label === 'Categories');

  // Get the values
  const categories = categoriesObject ? categoriesObject.value : [];

  if (loading)
    return (
      <div className="p-10">
        <div className="loader"></div>
      </div>
    );
  if (error) return <p>{error}</p>;

  const getMetaTitle = (data, id) => {
    const filteredObject = data.tags.find((obj) => obj.id === id);
    return filteredObject
      ? filteredObject.value[0].replace(/<[^>]+>/g, '')
      : ` Course | ${courseDetails.bundle.bundle_name}`;
  };

  const getMetaDesc = (data, id) => {
    const filteredObject = data.tags.find((obj) => obj.id === id);
    return filteredObject && filteredObject.value.length > 0
      ? filteredObject.value[0].replace(/<[^>]+>/g, '')
      : courseDetails.bundle.bundle_description;
  };

  const getRegularClasses = (data, id) => {
    const filteredObject = data.tags.find((obj) => obj.id === id);
    return filteredObject && filteredObject.value[0] === 'True';
  };
  console.log(detailScheduleData);

  const data = detailScheduleData.classes[0].schedule;

  const formattedClasses = data.map((item) => {
    // Convert class_date to JS Date
    const classDate = new Date(item.class_date * 1000);

    // Convert start and end time (minutes to HH:MM)
    const startHour = Math.floor(item.start_time / 60);
    const startMinute = item.start_time % 60;
    const endHour = Math.floor(item.end_time / 60);
    const endMinute = item.end_time % 60;

    const formattedDate = classDate.toDateString(); // e.g. "Mon Apr 28 2025"
    const formattedStart = `${String(startHour).padStart(2, '0')}:${String(startMinute).padStart(
      2,
      '0'
    )}`;
    const formattedEnd = `${String(endHour).padStart(2, '0')}:${String(endMinute).padStart(
      2,
      '0'
    )}`;

    return {
      date: formattedDate,
      time: `${formattedStart} - ${formattedEnd}`,
      rawDate: classDate
    };
  });

  console.log(formattedClasses, 'classes');

  return (
    <>
      {/* <NextSeo
        title={getMetaTitle(courseDetails, 243)}
        description={getMetaDesc(courseDetails, 244)}
        canonical={`${mainURL}/course/${courseDetails.bundle.pretty_name}-${courseDetails.bundle.institution_bundle_id}`}
        openGraph={{
          url: `${mainURL}/course/${courseDetails.bundle.pretty_name}-${courseDetails.bundle.institution_bundle_id}`,
          title: `${getMetaTitle(courseDetails, 243)}`,
          description: courseDetails.bundle.bundle_description,
          images: [
            {
              url:
                courseDetails.bundle.img_url === ''
                  ? '/images/course-default.png'
                  : courseDetails.bundle.img_url
            }
          ],
          siteName: 'vedvarsity'
        }}
      /> */}
      <Hero courseDetails={courseDetails} />
      <Breadcrumbs lastPath={courseDetails.bundle.bundle_name} />
      <section>
        <div className="mx-auto flex max-w-7xl flex-col gap-8 p-6 md:flex-row">
          {/* Left Column - Big Image */}
          <div className="md:w-3/4">
            <h1 className="tect-[#464646] mb-4 text-3xl font-bold">
              {courseDetails.bundle.bundle_name}
            </h1>

            <div className="mb-6 flex items-center gap-3">
              <div className="flex items-center gap-1 text-sm font-semibold text-gray-400">
                Price: {courseDetails.bundle.package_cost_set == 1 && <Price geoPrice={geoPrice} />}
              </div>
              <button className="bg-green-600 px-6 py-3 text-white transition-colors hover:bg-green-700">
                TAKE THIS COURSE
              </button>
            </div>

            <div className="my-6 border-t border-gray-200"></div>
            <div className="relative h-[70vh] w-full overflow-hidden">
              <Image
                src={courseDetails.bundle.img_url} // Replace with your image path
                alt="Online Learning Tips"
                fill
              />
            </div>
            <Info courseTags={courseDetails.tags} title={courseDetails.bundle.bundle_name} />
          </div>

          {/* Right Column - Content */}
          <div className="md:w-1/4">
            <div className="flex flex-col">
              <div className='mb-4'>
                <div className="mb-4">
                  <h2 className="relative inline-block text-xl font-extrabold uppercase text-[#002B45] after:mt-1 after:block after:h-1 after:w-8 after:bg-[#002B45]">
                    Categories
                  </h2>
                </div>{' '}
                <ul className="space-y-3">
                  {categories?.map((category, index) => (
                    <li className="font-semibold text-gray-700" key={index}>
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
              <CourseCalendar classDates={formattedClasses} />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-cloud">
        <div className="m-auto max-w-5xl space-y-12 px-4 py-10 md:space-y-24 md:py-16">
          <Schedule
            courseDetails={courseDetails}
            courseSchedule={courseSchedule.master_batches[0]}
            detailSchedule={detailSchedule}
            regularClasses={getRegularClasses(courseDetails, 245)}
          />
          <Overview courseOverview={courseDetails.bundle} />
          {fullCourseContent.course_curriculum?.resources?.length > 0 && (
            <CourseContent fullCourseContent={fullCourseContent} />
          )}
          <Teacher teacherDetails={courseSchedule.master_batches[0]} />
        </div>
      </section> */}

      <Faq />
      {relatedCourses.length > 0 && <RelatedContent relatedCourses={relatedCourses} />}
    </>
  );
};

export default Details;
