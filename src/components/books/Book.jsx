import Image from 'next/image';
import React from 'react';

export const Book = ({ data }) => {
  return (
    <div className="shadow-[0_16px_32x_0px_rgba(233, 238, 242, 0.7)] flex flex-row rounded-lg bg-white p-6">
      <div className="relative aspect-[186.98/242] w-full max-w-[186px] overflow-hidden rounded-md bg-[#F1F1F1] leading-6">
        <Image src={data.image} alt="dummy" layout="fill" objectFit="contain" />
      </div>
      <div className="ml-4 flex flex-grow flex-col">
        <p className="mb-2 text-xl font-semibold text-[#181C2E]">{data.title}</p>
        {/* <p className="mb-4 h-[40px] text-base leading-[20px] text-[#181C2E]">{data.author}</p> */}
        <span className="mb-2 text-sm leading-[15px] text-[#181c2e80]">Available Book Formats</span>
        <div className="flex gap-2">
          {data.formats.map((e) => (
            <span
              key={e}
              className=" rounded bg-[#181c2e80] px-2 py-1 text-xs uppercase leading-[14px] text-white">
              {e}
            </span>
          ))}
        </div>
        <span className="mb-2 mt-auto text-right text-sm leading-[15px] text-[#181c2e80]">
          Buy this book from
        </span>
        <div className="flex justify-end gap-3">
          {Object.keys(data.vendor).map((e) => (
            <a
              key={e}
              target="_blank"
              rel="noopener noreferrer"
              href={data.vendor[e]}
              className="box-content rounded-md border-2  border-primary px-4 py-2 text-base capitalize leading-[19px] text-primary hover:bg-[#EEF5FE]">
              {e}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
