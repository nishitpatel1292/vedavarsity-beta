import Image from 'next/image';
import { BsFacebook, BsTwitter, BsGoogle, BsPinterest, BsYoutube } from 'react-icons/bs';
import { useRouter } from 'next/router';

const TeacherProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  const socialIcons = [
    { icon: <BsFacebook />, href: '#' },
    { icon: <BsTwitter />, href: '#' },
    { icon: <BsGoogle />, href: '#' },
    { icon: <BsPinterest />, href: '#' },
    { icon: <BsYoutube />, href: '#' }
  ];

  return (
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
                objectFit="cover"
                className="rounded-lg"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
                No Image
              </div>
            )}
          </div>
          
          {/* Social Icons */}
          <div className="mt-6 flex justify-center space-x-4 text-xl">
            {socialIcons.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-gray-600 transition hover:text-blue-600"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Teacher Info Section */}
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold text-gray-900">{teacher.name}</h1>
          <p className="mt-2 text-lg font-medium text-gray-600">{teacher.role}</p>
          
          {/* Rating and Courses */}
          <div className="mt-4 flex items-center gap-6">
            <div className="flex items-center">
              <span className="text-2xl font-bold">{teacher.rating}</span>
              <div className="ml-2 text-yellow-400">
                {/* Star rating would go here */}
                ★★★★★
              </div>
            </div>
            <div>
              <span className="text-xl font-bold">{teacher.courses}</span>
              <span className="ml-2 text-gray-600">COURSES</span>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">DESCRIPTION</h2>
            <p className="mt-2 text-gray-700">{teacher.bio}</p>
          </div>

          {/* Total Courses */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900">TOTAL COURSES</h2>
            <p className="mt-2 text-gray-700">{teacher.courses} courses available</p>
            {/* Here you would list the actual courses */}
          </div>

          {/* Personal Summary */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">Personal Summary</h2>
            <p className="mt-2 text-gray-700">{teacher.personalSummary}</p>
          </div>
        </div>
      </div>

      {/* Teacher's Courses Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Courses by {teacher.name}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Here you would map through the teacher's courses */}
          {[...Array(teacher.courses)].map((_, i) => (
            <div key={i} className="rounded-lg border p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Course {i + 1}</h3>
              <p className="mt-2 text-gray-600">Course description would go here</p>
              <button className="mt-4 w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700">
                View Course
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;