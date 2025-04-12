import { Clock, Folder, MapPin, User, UserCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function EventsNewsSection() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-12 md:grid-cols-3">
      <div>
        <h2 className="mb-4 inline-block text-xl  font-bold text-slate-900">
          EVENT UPCOMING
          <div className={`mt-2 h-0.5 w-20 ${'bg-[#0a3254]'} `}></div>
        </h2>
        <div className="relative overflow-hidden rounded bg-slate-800 text-white">
          <Image
            src="https://media.istockphoto.com/id/1094465614/photo/speaker-addressing-group-of-females.jpg?s=612x612&w=0&k=20&c=FaITb4X3lC2dMfY10htrG9YMeoqkN0riFuP-USjvfq8=" // replace with your actual image
            alt="Event Upcoming"
            width={500}
            height={300}
            className="h-64 w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1 text-4xl font-bold">
            <div className="flex space-x-3 px-2">
              <span>18</span>
              <span className="ml-1 self-end text-base font-medium">Days</span>
              <span>14</span>
              <span className="ml-1 self-end text-base font-medium">Hours</span>
              <span>52</span>
              <span className="ml-1 self-end text-base font-medium">Mins</span>
              <span>29</span>
              <span className="ml-1 self-end text-base font-medium">Sec</span>
            </div>
          </div>
        </div>
        <div className="bg-white px-4 py-3 shadow-sm">
          <p className="font-semibold text-slate-900">LEARNING LIVE</p>
          <p className="flex flex-row items-center gap-1 text-sm text-gray-600">
            <MapPin size={16} /> 2347 Neil Ave Columbus
          </p>
        </div>
      </div>

      {/* Event Happening */}
      <div>
        <h2 className="mb-4 inline-block text-xl font-bold text-slate-900">
          EVENT HAPPENING
          <div className={`mt-2 h-0.5 w-20 ${'bg-[#0a3254]'} `}></div>
        </h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Image
              src="https://media.istockphoto.com/id/1094465614/photo/speaker-addressing-group-of-females.jpg?s=612x612&w=0&k=20&c=FaITb4X3lC2dMfY10htrG9YMeoqkN0riFuP-USjvfq8="
              alt="Learning Live"
              width={80}
              height={80}
              className="h-20 w-20 rounded object-cover"
            />
            <div>
              <p className="font-semibold text-slate-900">LEARNING LIVE</p>
              <p className="flex flex-row items-center gap-1 text-sm text-gray-600">
                <MapPin size={16} /> 2347 Neil Ave Columbus
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="https://media.istockphoto.com/id/1094465614/photo/speaker-addressing-group-of-females.jpg?s=612x612&w=0&k=20&c=FaITb4X3lC2dMfY10htrG9YMeoqkN0riFuP-USjvfq8="
              alt="Learning Tech"
              width={80}
              height={80}
              className="h-20 w-20 rounded object-cover"
            />
            <div>
              <p className="font-semibold text-slate-900">LEARNING TECHNOLOGIES</p>
              <p className="flex flex-row items-center gap-1 text-sm text-gray-600">
                <MapPin size={16} /> 2347 Neil Ave Columbus
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div>
        <h2 className="mb-4 inline-block text-xl font-bold text-slate-900">
          LATEST NEWS
          <div className={`mt-2 h-0.5 w-20 ${'bg-[#0a3254]'} `}></div>
        </h2>
        <div className="bg-white shadow-sm">
          <Image
            src="https://media.istockphoto.com/id/1094465614/photo/speaker-addressing-group-of-females.jpg?s=612x612&w=0&k=20&c=FaITb4X3lC2dMfY10htrG9YMeoqkN0riFuP-USjvfq8="
            alt="Latest News"
            width={500}
            height={300}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <p className="truncate font-semibold text-slate-900">
              THREE REASONS WHY ENGLISH SPELLING...
            </p>
            <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
              <span className='flex flex-row items-center gap-1'><Clock size={18}/> Jan 13, 2017</span>
              <span className='flex flex-row items-center gap-1'><UserCircle2 size={18}/> admin</span>
              <span className='flex flex-row items-center gap-1'><Folder size={18}/> Advices</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
