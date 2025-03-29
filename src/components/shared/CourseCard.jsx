import { categoriesID, durationTagID, isCertificateAvailableID } from 'data/tags';
import dayjs from 'dayjs';
import Image from 'next/image';
import { findTagValue } from 'utils/parse';
import Badge, { Certify } from './Badge';

dayjs.extend(require('dayjs/plugin/utc'));

const CourseCard = ({ course, title }) => {
  const haveCategories = findTagValue(course.tags, categoriesID);

  return (
    <a
      href={`/course-details/${course.pretty_name}-${course.institution_bundle_id}`}
      className="m-auto flex h-[480px] w-[300px] flex-col justify-center overflow-hidden rounded-xl bg-primary text-white shadow-lg transition-transform duration-300 hover:scale-105"
      target="_blank"
      rel="noreferrer">
      {/* Course Image */}
      <div className="relative h-[180px]">
        <Image
          src={course.img_url || '/images/course-default.png'}
          alt="Course Image"
          // layout="fill"
          width={300}
          height={180}
          objectFit="cover"
          // className="rounded-t-xl"
        />
      </div>

      {/* Course Details */}
      <div className="flex flex-col gap-4 px-6 py-4">
        <h3 className="line-clamp-2 text-xl font-bold">{course.bundle_name}</h3>
        {/* <p className="line-clamp-2 text-sm">{course.bundle_description}</p> */}
      </div>

      <div className="flex flex-col gap-2 px-6 py-2">
        {/* Tutor Name and Badge */}
        <div className="flex items-center justify-between text-gray-200">
          <p className="text-base font-semibold">
            By {course.tutors[0]?.tutor_name || 'Unknown Tutor'}
          </p>
          <Badge free={course.cost > 0 ? false : true} />
        </div>

        {/* Duration and Start Date */}
        <div className="mt-2 flex justify-between text-gray-200">
          <div
            dangerouslySetInnerHTML={{
              __html: findTagValue(course.tags, durationTagID)
            }}
          />
          {course.course_start_date && title !== 'Self paced courses' && (
            <span className="text-sm font-semibold text-white">
              Start date -{' '}
              <time>
                {dayjs(course.course_start_date * 1000)
                  .utc()
                  .format('MMM DD')}
              </time>
            </span>
          )}
        </div>

        {/* Category and Certificate */}
        <div className="flex justify-between text-gray-200">
          {haveCategories !== 'N/A' && <div>{haveCategories}</div>}
          {findTagValue(course.tags, isCertificateAvailableID) === 'true' && <Certify />}
        </div>
      </div>

      {/* Enroll Now Button */}
      <div className="mt-auto px-6 pb-6">
        <button className="w-full rounded-md bg-white py-2 text-lg font-semibold text-gray-900 shadow-md transition hover:bg-secondary">
          Enroll Now
        </button>
      </div>
    </a>
  );
};

export default CourseCard;
