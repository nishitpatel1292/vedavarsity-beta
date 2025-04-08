import SectionTitle from "../shared/SectionTitle";

const Location = () => {
  return (
    <div className="h-[397px] flex flex-col max-w-7xl justify-center mx-auto  rounded-lg bg-white p-8 shadow-xl shadow-mist/70 md:py-12 py-6 my-12">
      <SectionTitle title={'Locate us'}/>
      <div className="relative mt-4">
        <div className="mt-8 h-64 animate-pulse rounded-lg bg-gray-200"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.741448215697!2d77.6540893!3d27.5742182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736f6f31bde6d1%3A0x5e9d978d9749fff7!2sOmaxe%20Eternity%20Vrindavan!5e0!3m2!1sen!2sin!4v1652701994357!5m2!1sen!2sin"
          className="absolute top-0 h-64 w-full rounded-lg border-0"
          loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default Location;
