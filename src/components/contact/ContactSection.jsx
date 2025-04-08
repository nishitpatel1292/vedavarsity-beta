import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactCard } from './ContactCard';
import { vedavarsityEmail, vedavarsityPhone } from '@/src/data/contact';
import Hero from '../all-teachers/Hero';
import Breadcrumbs from '../shared/Breadcrumbs';
import SectionTitle from '../shared/SectionTitle';

export function ContactSection() {
  return (
    <section className="w-full bg-white">
      <Hero title={'contact'} />
      <Breadcrumbs lastPath={'contact'} />
      <div className="mx-auto mt-8 max-w-7xl px-4 py-8">
        <SectionTitle title={'Contact info'} />
        <p className="mx-auto max-w-3xl text-gray-600 text-center ">
          Welcome to our Website. We are glad to have you around.
        </p>
        <div className="grid grid-cols-1 mt-8 gap-8 md:grid-cols-3 md:gap-16">
          <ContactCard
            icon={Mail}
            title="Email"
            subtitle="Our friendly team is here to help."
            contact={vedavarsityEmail}
            isLink={true}
          />
          <ContactCard
            icon={MapPin}
            title="Office"
            subtitle="Come say hello at our office HQ."
            contact={`Omaxe Eternity, Vrindavan, Uttar Pradesh, India - 281121`}
          />
          <ContactCard
            icon={Phone}
            title="Phone"
            subtitle="Mon-Fri from 8am to 7pm."
            contact={vedavarsityPhone}
            isLink={true}
          />
        </div>
      </div>
    </section>
  );
}
