import React from 'react';

const SectionTitle = ({ title, background }) => {
  return (
    <h2
      className={`mb-4 text-2xl text-center font-extrabold ${
        background === 'dark' ? 'text-white' : 'text-[#0a3254]'
      }  md:text-3xl`}>
      {title}
      <div
        className={`mx-auto mt-2 h-0.5 w-20 ${
          background === 'dark' ? 'bg-white' : 'bg-[#0a3254]'
        } `}></div>
    </h2>
  );
};

export default SectionTitle;
