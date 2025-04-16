import Hero from '@/src/components/all-teachers/Hero';
import Breadcrumbs from '@/src/components/shared/Breadcrumbs';

export default function About() {
  const contentData = [
    {
      title: 'Rooted in Authenticity',
      content:
        'Our foundation is firmly grounded in the teachings of His Divine Grace A.C. Bhaktivedanta Swami Prabhupāda, the founder of ISKCON and one of the most respected spiritual leaders of the modern era. Every course, class, and teaching offered on Vedavarsity reflects the pure and unaltered essence of Gaudiya Vaishnava philosophy, inspired by our guiding light, Sri Srimad Gaur Krishna Das Goswami.'
    },
    {
      title: 'Expert-Led Courses',
      content:
        'Vedavarsity brings together a team of experienced and spiritually mature teachers who are not only knowledgeable in scripture but are also committed practitioners of what they teach. Our instructors include disciples and followers of Srila Prabhupāda who have spent years studying and living the teachings of the Bhagavatam, Bhagavad Gita, Upanishads, and other Vedic scriptures.'
    },
    {
      title: 'Diverse and Relevant Curriculum',
      content:
        'We offer a wide range of certificate and diploma programs across various subjects including:\n\n- Bhakti Yoga and Devotional Practices\n- Vedic History and Puranas\n- Sanskrit Language Courses\n- Lifestyle and Ayurvedic Wisdom\n- Marriage and Family Life in Krishna Consciousness\n- Parenting the Vedic Way\n- Science and Spirituality\n\nEach course is designed to not just inform but transform. Whether you\'re looking to apply these teachings to your personal life or share them with others, Vedavarsity equips you with knowledge and practical tools.'
    },
    {
      title: 'Learn at Your Own Pace',
      content:
        'All our courses are delivered online with flexible scheduling, making it easy for you to learn at your own pace. Whether you\'re a student, working professional, homemaker, or a full-time devotee, you can integrate learning into your lifestyle with ease.'
    },
    {
      title: 'Affordable Spiritual Education',
      content:
        'We believe that spiritual wisdom should never be out of reach. That’s why all our programs are affordably priced. We aim to serve, not to profit. The small course fees help us maintain high standards while reaching seekers around the world.'
    },
    {
      title: 'Certified Programs',
      content:
        'Upon completion of any course, you receive a certificate that recognizes your efforts and progress. These certifications can also support your service in temples, spiritual organizations, or simply add credibility to your spiritual practice and sharing.'
    },
    {
      title: 'A Growing Spiritual Community',
      content:
        'When you join Vedavarsity, you’re not just signing up for a course — you’re becoming part of a global community of sincere seekers. Our students are connected by a shared desire to understand Vedic wisdom and live it in daily life. Engage in discussions, satsangs, and even collaborative service opportunities.'
    }
  ];

  return (
    <section className="bg-pattern">
      <Hero title={'About Us'} />
      <Breadcrumbs lastPath={'/about-us'} />
      {/* Top Section */}
      <section className="bg-ice px-4 py-12 text-gray-800 md:py-8 lg:py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center md:flex-row">
          <div className="md:w-2/3">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">VEDAVARSITY</h1>
            <p className="mb-4 text-lg leading-relaxed text-gray-700">
              In a world full of information overload and spiritual confusion, finding a reliable
              and authentic source of Vedic wisdom can be challenging. Vedavarsity is here to change
              that. At Vedavarsity, we are committed to delivering timeless spiritual knowledge in a
              format that's modern, engaging, and deeply rooted in tradition. Whether you're a
              beginner exploring Vedic teachings or a dedicated practitioner seeking deeper
              understanding, Vedavarsity is your trusted companion on the journey of
              self-realization.
            </p>
          </div>
          <div className="text-center md:w-1/3">
            {/* Placeholder for Logo */}
            <img
              src="/inss-logo.png"
              alt="VEDAVARSITY Logo"
              className="mx-auto h-48 w-48 object-contain md:h-64 md:w-64"
            />
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section className="relative bg-ice py-12 text-gray-200 md:py-4 lg:py-6">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-primary md:text-4xl">
            Know More About Us
          </h2>
          {contentData.map((section, index) => (
            <div className="mb-4 md:mb-4" key={index}>
              <h3 className="mb-4 text-2xl font-bold text-sun">{section.title}</h3>
              <p className="leading-relaxed text-black whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}