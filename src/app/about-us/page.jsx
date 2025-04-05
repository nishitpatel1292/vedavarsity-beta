export default function About() {
  const contentData = [
    {
      title: 'Learn',
      content:
        'Vedavarsity will provide vedic education by helping our audience to understand the whys, whats and hows of Sanatana dharma'
    },
    {
      title: 'Practice',
      content:
        "For growing spiritually, we encourage the practical application of the knowledge into action in our daily lives. Making Srimad Bhagavatam a guiding light, we want to help people integrate the Bhagavatam's wisdom into every aspect of their lives."
    },
    {
      title: 'Share',
      content:
        'Finally, Cultivating a love for Srimad Bhagavatam, We want to ignite a passion for learning this sacred scripture.'
    },
    {
      title: 'Who are our teachers?',
      content:
        'Our speakers and teachers are well versed with the topics of We equip devotees with the skills to share Vaisnava knowledge, practices, and values through seminars and lectures.'
    },
    {
      title: 'Join us and be a Beacon of Knowledge',
      content:
        'Whether you’re looking to enhance your own understanding of Vaisnava philosophy or hoping to share it with others, our seminars and lectures will provide you with the tools, knowledge, and confidence to do so effectively. Join us to spread the teachings of Srimad Bhagavatam.'
    }
  ];

  return (
    <section className="bg-pattern">
      {/* Top Section */}
      <section className="bg-ice px-4 py-12 text-gray-800 md:py-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center md:flex-row">
          <div className="md:w-2/3">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">INSS</h1>
            <p className="mb-4 text-lg leading-relaxed text-gray-700">
              Vedavarsity is founded with the aim of creating a space for the spiritually curious
              minds who wish to learn, practice, and share the teachings of Srimad Bhagavatam. We
              also delve into the writings of Gaudiya Vaisnava acaryas and explore various branches
              of Vedic knowledge, including philosophy, culture, yoga, ayurveda, astrology, music,
              and science. All our courses are based on the teachings of His Divine Grace A.C.
              Bhaktivedanta Swami Prabhupada. Vedavarsity’s office is located in Vrindavan, and our
              mission is to spread the message of Srimad-Bhāgavatam and Caitanya-caritāmṛta far and
              wide.
            </p>
          </div>
          <div className="text-center md:w-1/3">
            {/* Placeholder for Logo */}
            <img
              src="/inss.png"
              alt="INSS Logo"
              className="mx-auto h-48 w-48 object-contain md:h-64 md:w-64"
            />
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section className="relative bg-ice py-12 text-gray-200 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-primary md:text-4xl">
            Know More About Us
          </h2>
          {contentData.map((section, index) => (
            <div className="mb-8 md:mb-12" key={index}>
              <h3 className="mb-4 text-2xl font-bold text-sun">{section.title}</h3>
              <p className="leading-relaxed text-black">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
