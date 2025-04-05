'use client';
import {
  durationTagID,
  languageTagID,
  noOfSessionTagID,
  sessionPerWeekTagID,
  videoTagID,
  eligibilityId
} from 'data/tags';
import { BadgeCheckIcon, Book, Languages, PlayCircleIcon, Timer } from 'lucide-react';
import { MdOutlineNumbers } from 'react-icons/md';
import { findTagValue } from 'utils/parse';

const Info = ({ courseTags, title }) => {
  console.log(courseTags,'course tags')
  const allInfo = [
    {
      title: 'Course Duration',
      subtitle: findTagValue(courseTags, durationTagID),
      icon: <Timer size={24}/>
    },
    {
      title: 'Videos',
      subtitle: findTagValue(courseTags, videoTagID),
      icon: <PlayCircleIcon  size={24}/>
    },
    {
      title: 'No. Of Sessions',
      subtitle: findTagValue(courseTags, noOfSessionTagID),
      icon: <Book size={24}/>
    },
    {
      title: 'Sessions per week',
      subtitle: findTagValue(courseTags, sessionPerWeekTagID),
      icon: <MdOutlineNumbers size={24}/>
    },
    {
      title: 'Language',
      subtitle: findTagValue(courseTags, languageTagID),
      icon: <Languages size={24}/>
    },
    {
      title: 'Eligibility',
      subtitle: findTagValue(courseTags, eligibilityId), //TODO: change this will real Eligibility tag id
      icon: <BadgeCheckIcon size={24}/>

    }
  ];

  return (
    <section className="bg-[#f5f5f5]">
      <h3 className='text-[#002b46] font-bold text-lg uppercase px-4 py-4'>Course Features</h3>
      <div className="m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden justify-between gap-4 pb-4 lg:px-2">
        {allInfo.map((info) => (
          <InfoCard title={info.title} subtitle={info.subtitle} icon={info.icon} key={info.title} />
        ))}
      </div>
    </section>
  );
};

export default Info;

const InfoCard = ({ title, subtitle, icon }) => {
  return (
    <div className="px-2 overflow-hidden">
      <div className="w-max text-sm flex items-center justify-center gap-1 space-y-2 text-center !mt-0">
        <span className='text-gray-500'>
        {icon?icon:''}
        </span>
        <span className="text-gray-500 font-semibold !mt-0">{title}</span>
        <br />

        <div className='!mt-0' dangerouslySetInnerHTML={{ __html: subtitle }}></div>
      </div>
    </div>
  );
};
