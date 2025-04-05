import Image from 'next/image';
import SparklesText from '../../../components/ui/sparkles-text';
const courses = [
  {
    icon: 'history',
    title: 'Vedic History and Puranas',
    description: 'Preserving ancient wisdom for modern understanding.',
    iconBg: 'bg-primary'
  },
  {
    icon: 'gita_wisdom',
    title: 'Gita Wisdom',
    description: 'Guiding life through timeless spiritual teachings.',
    iconBg: 'bg-amber-500'
  },
  {
    icon: 'parenting',
    title: 'Parenting',
    description: 'Nurturing values with love and wisdom',
    iconBg: 'bg-primary'
  },
  {
    icon: 'bhakti_yoga',
    title: 'Bhaktiyoga',
    description: 'Connecting hearts through devotional practice.',
    iconBg: 'bg-emerald-500'
  },
  {
    icon: 'school_of_love',
    title: 'School Of Love',
    description: 'Learn the art of loving and being loved.',
    iconBg: 'bg-emerald-500'
  },
  {
    icon: 'afterschool',
    title: 'After School for Kids',
    description: 'Shaping young minds with culture and creativity.',
    iconBg: 'bg-amber-500'
  },
  {
    icon: 'sanskrit',
    title: 'Sanskrit',
    description: 'Reviving the language of the divine.',
    iconBg: 'bg-emerald-500'
  },
  {
    icon: 'lifestyle',
    title: 'Lifestyle',
    description: 'Harmonizing modern living with Vedic values.',
    iconBg: 'bg-amber-500'
  }
];

export default function CourseLibrary() {
  return (
    <section>
      <div className="m-auto max-w-7xl px-4 py-12">
        <span className="mb-3 text-28px font-bold md:mr-10 lg:text-38px">
          <SparklesText text={'Course Library'} sparklesCount={5} />
        </span>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative rounded-lg border-2 bg-primary p-4 shadow-md transition-all duration-300 hover:border-2 hover:border-amber-400 hover:shadow-lg">
              {/* Icon Background */}
              <div
                className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white`}>
                <Image
                  src={`/icons/${course.icon}.gif`}
                  width={40}
                  height={40}
                  alt={course.title}
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-white">{course.title}</h3>

              {/* Description */}
              <p className="text-sm text-white">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
