'use client'; // Declare this as a client component

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
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

const Details = () => {
  const [courseDetails, setCourseDetails] = useState(null);
  const [courseSchedule, setCourseSchedule] = useState(null);
  const [fullCourseContent, setFullCourseContent] = useState(null);
  const [detailSchedule, setDetailSchedule] = useState(null);
  const [relatedCourses, setRelatedCourses] = useState([]);
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
      } catch (err) {
        console.error('got error', err);
        setError('Failed to fetch course data.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [id]);

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
      <Info courseTags={courseDetails.tags} />
      <section className="bg-cloud">
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
      </section>

      <Faq />
      {relatedCourses.length > 0 && <RelatedContent relatedCourses={relatedCourses} />}
    </>
  );
};

export default Details;
