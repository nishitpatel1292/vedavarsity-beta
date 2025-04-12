import ContactForm from '@/src/components/contact/ContactForm';
import { ContactSection } from '@/src/components/contact/ContactSection';
import Location from 'components/contact/Location';

export const metadata = {
  description:
    'Get in touch with our team for any questions or inquiries regarding our online courses. Start your journey of spiritual discovery today!'
};
export default function Contact() {
  return (
    <>
      <ContactSection />
      <ContactForm/>
      <Location />
    </>
  );
}
