'use client';
import SubscribeForm from './SubscribeForm';

const NewsLetterSection = () => {
  return (
    <section
      className="bg-[url('http://demoapus-wp.com/campress/wp-content/uploads/2017/01/bg-register-1.jpg')] bg-cover bg-center bg-no-repeat ">
      <div className="">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 lg:grid-cols-2">
          <div className="space-y-4">
            {/* <p className="text-xl font-bold text-green-400 lg:text-2xl">
              Read, Live and Inspire
            </p>
            <h3 className="text-3xl font-bold text-white lg:text-4xl leading-snug">
              Inspire and Elevate yourself every fortnight
            </h3> */}
          </div>

          <div className="flex justify-center">
            <SubscribeForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSection;
