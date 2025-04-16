'use client';
import Image from 'next/image';
import { BsFacebook, BsTwitter, BsGoogle, BsPinterest, BsYoutube } from 'react-icons/bs';
import { teachers } from '@/src/data/teachers';
import { useParams, useRouter } from 'next/navigation';

const TeacherProfile = () => {
  const router = useRouter();
  const { name } = useParams();
  const socialIcons = [
    { icon: <BsFacebook />, href: '#' },
    { icon: <BsTwitter />, href: '#' },
    { icon: <BsGoogle />, href: '#' },
    { icon: <BsPinterest />, href: '#' },
    { icon: <BsYoutube />, href: '#' }
  ];
  console.log(name);
  const teacher = teachers.find((teacher) => teacher.key === name); // Find the teacher by key
  console.log(teacher);
  if (!teacher) {
    return <p className="text-center text-xl text-gray-500">Teacher not found</p>; // Handle case where teacher is not found
  }
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Teacher Image Section */}
          <div className="w-full md:w-1/3">
            <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
              {teacher.image ? (
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
                  No Image
                </div>
              )}
            </div>
          </div>

          {/* Teacher Info Section */}
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold text-gray-900">{teacher.name}</h1>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900">DESCRIPTION</h2>
              <p className="mt-2 text-gray-700">{teacher.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherProfile;
