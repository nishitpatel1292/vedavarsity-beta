'use client';
import Modal from 'components/shared/Modal';
import { sessionDaysTagID, sessionTimeTagID } from 'data/tags';
import dayjs from 'dayjs';
import 'dayjs/plugin/utc';
import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { schedTime } from 'utils/hours';
import { findTagValue } from 'utils/parse';

dayjs.extend(require('dayjs/plugin/utc'));
/* eslint-disable @next/next/no-img-element */
const Schedule = ({ courseDetails, courseSchedule, detailSchedule, regularClasses }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="space-y-9 rounded-xl bg-white px-4 py-6 shadow-lg shadow-mist/70 md:px-20">
      <h2 className="text-2xl font-semibold md:text-32px">Schedule of Classes</h2>
      <div className="items-center justify-between space-y-9 md:flex md:space-y-0">
        <div className="relative flex items-center space-x-5">
          <img src="/svgs/calendar.svg" alt="calendar" className="absolute left-0" loading="lazy" />

          <p className="pl-14">
            <span className="text-primary">
              Starts on{' '}
              <time>
                {dayjs(courseSchedule.start_date_unix * 1000)
                  .utc()
                  .format('MMM DD')}
              </time>
            </span>
            <br />
            <time>
              {dayjs(courseSchedule.start_date_unix * 1000)
                .utc()
                .format('MMM DD, YYYY')}
            </time>{' '}
            -{' '}
            <time>
              {dayjs(courseSchedule.end_date_unix * 1000)
                .utc()
                .format('MMM DD, YYYY')}
            </time>
          </p>
        </div>
        <div className="relative flex items-center space-x-5">
          <img src="/svgs/clock.svg" alt="calendar" className="absolute left-0" loading="lazy" />
          <div className="pl-14">
            <span
              dangerouslySetInnerHTML={{
                __html: findTagValue(courseDetails.tags, sessionTimeTagID)
              }}
            />
            <span
              dangerouslySetInnerHTML={{
                __html: `${regularClasses ? '' : 'Regular classes on'} ${findTagValue(
                  courseDetails.tags,
                  sessionDaysTagID
                )}`
              }}
            />
          </div>
        </div>
      </div>
      <button
        className="flex items-center font-semibold text-primary"
        onClick={() => setModalOpen(true)}>
        <span>View Detailed Schedule</span>
        <RiArrowDropDownLine size={24} />
      </button>
      <Modal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        heading="View Detailed Schedule"
        size="max-w-md">
        {detailSchedule.classes.map((clas, index) => (
          <div key={index} className="flex justify-center">
            <table>
              <thead>
                <tr>
                  <th className="border px-8 py-4 text-center">Session Date</th>
                  <th className="border px-8 py-4 text-center">Time</th>
                </tr>
              </thead>
              <tbody>
                {clas.schedule.map((sched, index) => (
                  <tr key={index}>
                    <td className="border px-8 py-4">
                      <time>{dayjs.unix(sched.gmt_start_time).format('MMM DD, YYYY')}</time>
                    </td>
                    <td className="border px-8 py-4">
                      <time>
                        {schedTime(sched.gmt_start_time)} to {schedTime(sched.gmt_end_time)}
                      </time>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default Schedule;
