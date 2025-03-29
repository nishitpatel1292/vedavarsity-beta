'use client';
import SubscribeForm from './SubscribeForm';
import SubscribeTitle from './SubscribeTitle';

const NewsLetterSection = () => {
  return (
    <section className="m-auto grid max-w-6xl items-center  gap-10 px-4 py-14 lg:grid-cols-2 lg:gap-56">
      <SubscribeTitle />
      <SubscribeForm />
    </section>
  );
};

export default NewsLetterSection;
