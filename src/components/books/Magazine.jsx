import Image from 'next/image';
import React from 'react';

export const Magazine = ({ data }) => {
  var options = { day: 'numeric', year: 'numeric', month: 'short' };

  let date = new Date(data.publishDate).toLocaleDateString('en-US', options);

  return (
    <a
      key={data.docname}
      href={`https://issuu.com/${data.username}/docs/${data.name}`}
      target="_blank"
      className="shadow-[0_16px_32x_0px_rgba(233, 238, 242, 0.7)] flex flex-row rounded-lg bg-white"
      rel="noopener noreferrer">
      <div className="relative aspect-[180/242] w-full min-w-[180px] max-w-[180px] overflow-hidden rounded-md rounded-tr-none rounded-br-none bg-[#f1f1f16f] leading-6">
        <Image
          src={`https://image.isu.pub/${data.documentId}/jpg/page_1_thumb_large.jpg`}
          alt="dummy"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-grow flex-col overflow-auto p-4">
        <p className="mb-2 text-xl font-semibold uppercase text-[#181C2E] line-clamp-2">
          {data.title}
        </p>
        <p className="mb-4 h-[40px] text-base leading-[19px] text-[rgba(0,0,0,0.5)] line-clamp-2">
          {data.description}
        </p>
        <span className="mt-auto mb-2 text-right text-sm leading-[15px] text-primary">{date}</span>
      </div>
    </a>
  );
};
