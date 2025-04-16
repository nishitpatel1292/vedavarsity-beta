'use client';

import { useState } from 'react';
import { Calendar, Settings, GraduationCap, Presentation } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';

export default function UniversitySection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      icon: Calendar,
      title: 'Programs',
      description:
        'Deepen your spiritual journey with courses in Bhakti Yoga, Vedic history, lifestyle, and more.'
    },
    {
      icon: Settings,
      title: 'Affordability',
      description: 'Quality education at prices that are accessible to all.'
    },
    {
      icon: GraduationCap,
      title: 'Certification',
      description: 'Earn recognized certificates as you grow in wisdom and practice'
    },
    {
      icon: Presentation,
      title: 'Courses',
      description: 'Explore a variety of topics—from Gita and Bhagavatam to Sanskrit and spiritual relationships.'
    }
  ];

  return (
    <section className="mx-auto mt-12 max-w-7xl px-4 py-8">
      <div className="mb-12 text-center">
        <SectionTitle title={'WELCOME TO VEDAVARSITY'} />
        <p className="mx-auto max-w-3xl text-gray-600">
          Hare Krishna! Welcome to Vedavarsity, your spiritual learning home. Dive into the wisdom
          of the Vedas, Bhagavatam, and Bhakti Yoga with expert teachers and inspiring courses.
          Learn. Practice. Share. Let devotion and knowledge transform your life.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex h-full flex-col items-center p-6 text-center transition-all duration-300"
            style={{
              backgroundColor: hoveredCard === index ? '#6cc51d' : 'white'
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}>
            <div
              className="mb-4 rounded-full p-3"
              style={{
                color: hoveredCard === index ? 'white' : '#9ca3af'
              }}>
              <card.icon size={40} />
            </div>
            <h3
              className="mb-3 text-xl font-semibold"
              style={{
                color: hoveredCard === index ? 'white' : '#0a3254'
              }}>
              {card.title}
            </h3>
            <p
              className="mb-6 flex-grow"
              style={{
                color: hoveredCard === index ? 'white' : '#4b5563'
              }}>
              {card.description}
            </p>
            {/* <a
              href="#"
              className="uppercase font-bold text-sm tracking-wider mt-auto"
              style={{
                color: hoveredCard === index ? "white" : "#0a3254",
              }}
            >
              Learn More
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
}
