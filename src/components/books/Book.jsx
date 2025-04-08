import Image from 'next/image';
import Link from 'next/link';

export const Book = ({ data }) => {
  return (
    <div className="flex flex-col rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Book Cover Image */}
      <div className="relative aspect-[3/4] w-full h-48 overflow-hidden rounded-md bg-[#F1F1F1]">
        <Image 
          src={data.image} 
          alt={data.title} 
          layout="fill"
          objectFit="contain"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Book Details */}
      <div className="mt-3 flex flex-1 flex-col">
        <h3 className="mb-1 truncate text-sm font-medium text-[#181C2E]">
          {data.title}
        </h3>
        <p className="text-lg font-bold text-[#181C2E]">
          ${data.price?.toFixed(2) || '0.00'}
        </p>

        {/* Available Formats */}
        {data.formats?.length > 0 && (
          <>
            <span className="mt-2 text-xs text-gray-500">Available Formats</span>
            <div className="mb-2 flex flex-wrap gap-1">
              {data.formats.map((format) => (
                <span
                  key={format}
                  className="rounded-full bg-gray-100 px-2 py-1 text-xs text-[#181C2E]"
                >
                  {format}
                </span>
              ))}
            </div>
          </>
        )}

        {/* Vendor Buttons */}
        <div className="mt-auto pt-2">
          <p className="mb-2 text-xs text-gray-500">Available at:</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(data.vendor || {}).map(([name, url]) => (
              <Link
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 whitespace-nowrap rounded border border-blue-500 px-2 py-1 text-center text-xs text-blue-500 hover:bg-blue-50"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};