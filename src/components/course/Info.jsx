'use client';
import {
  durationTagID,
  languageTagID,
  noOfSessionTagID,
  sessionPerWeekTagID,
  videoTagID,
  eligibilityId
} from 'data/tags';
import { findTagValue } from 'utils/parse';

const Info = ({ courseTags, title }) => {
  const allInfo = [
    {
      title: 'Course Duration',
      subtitle: findTagValue(courseTags, durationTagID)
    },
    {
      title: 'Videos',
      subtitle: findTagValue(courseTags, videoTagID)
    },
    {
      title: 'No. Of Sessions',
      subtitle: findTagValue(courseTags, noOfSessionTagID)
    },
    {
      title: 'Sessions per week',
      subtitle: findTagValue(courseTags, sessionPerWeekTagID)
    },
    {
      title: 'Language',
      subtitle: findTagValue(courseTags, languageTagID)
    },
    {
      title: 'Eligibility',
      subtitle: findTagValue(courseTags, eligibilityId) //TODO: change this will real Eligibility tag id
    }
  ];

  return (
    <section className="shadow-xl shadow-mist/70">
      <div className="m-auto flex max-w-6xl justify-between divide-x-2 overflow-x-auto py-7 lg:px-4">
        {allInfo.map((info) => (
          <InfoCard title={info.title} subtitle={info.subtitle} key={info.title} />
        ))}
      </div>
    </section>
  );
};

export default Info;

const InfoCard = ({ title, subtitle }) => {
  return (
    <div className="px-6">
      <h3 className="w-max space-y-2 text-center">
        <span className="text-xl font-semibold ">{title}</span>
        <br />

        <div dangerouslySetInnerHTML={{ __html: subtitle }}></div>
      </h3>
    </div>
  );
};
