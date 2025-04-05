'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
const Hero = ({ searchBased, subTitle, hideSearch = false, small = false, className }) => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (router.query?.q != undefined) {
      const prevQuery = router.query.q;
      setQuery(prevQuery);
    }
  }, []);

  const searchCourse = async (e) => {
    e.preventDefault();
    router.push(`/search?q=${query}`, { scroll: true });
    // router.push({
    //   pathname: '/search',
    //   query: { q: query }
    // });
  };

  return (
    <section
      id="vanta-background"
      className={`vanta-background bg-black/75 bg-explore-hero bg-cover bg-no-repeat bg-blend-multiply  ${className}`}>
      <div className={`m-auto max-w-7xl px-4 pb-5  ${small ? 'md:py-14' : 'md:pb-28 md:pt-28'}`}>
        <div className="max-w-[570px] space-y-6">
          <h1 className="text-32px font-bold capitalize text-white md:text-5xl">{searchBased}</h1>
          <p className="text-base text-white sm:text-lg">{subTitle}</p>
          {!hideSearch && (
            <form
              className="flex items-center rounded-xl bg-white p-2 shadow"
              onSubmit={(e) => searchCourse(e)}>
              <input
                type="search"
                placeholder="Search Courses"
                value={query}
                required
                className="mr-3 block w-full rounded-md pl-2 focus:outline-none"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="submit"
                className="inline-block rounded-md bg-primary px-8 py-2 text-center font-semibold capitalize text-white ring-2 ring-primary hover:bg-[#266ED2]">
                Search
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
