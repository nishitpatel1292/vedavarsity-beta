import Image from 'next/image';
import empty from 'public/svgs/empty.svg';

const NoCourse = () => {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      {/* Centered Image */}
      <Image src={empty} alt="no course" width={320} height={225} className="mx-auto" />

      {/* Title */}
      <h3 className="my-3 text-2xl font-bold">Coming Soon</h3>

      {/* Description */}
      <p>
        We will be publishing new courses soon <br /> Please come back later.
      </p>
    </div>
  );
};

export default NoCourse;
