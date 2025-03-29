'use client';
import { Magazine } from 'components/books/Magazine';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useSWRInfinite from 'swr/infinite';

const fetcher = (url) => fetch(url).then((res) => res.json());
const PAGE_SIZE = 12;

// export const metadata = {
//   description:
//     'Our online e-magazine provides readers with insightful articles, and updates about Vedic philosophy and ancient wisdom. Stay informed.'
// };
const EMagazines = ({}) => {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState(query);

  // const [magazines,setMagazines] = useState(docs);

  const router = useRouter();

  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null; // reached the end
    return `api/books?query=${encodeURIComponent(search)}&startIndex=${
      pageIndex * PAGE_SIZE
    }&pageSize=${PAGE_SIZE}`; // SWR key
  };
  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  const issues = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);

  const searchCourse = async (e) => {
    e.preventDefault();
    setSearch(query);
  };
  return (
    <>
      <section
        className={`bg-black/75 bg-explore-hero bg-cover bg-bottom bg-no-repeat bg-blend-multiply`}>
        <div className={`m-auto max-w-[1176px] px-4 pb-5  md:py-14`}>
          <div className="max-w-[570px] space-y-6">
            <h1 className="text-32px font-bold capitalize text-white md:text-5xl">E-Magazines</h1>

            <p className="text-base text-white sm:text-lg">
              Read from our collection of over 193+ E-Magazines. We publish authentic and high
              quality magazines every month.
            </p>
            {/* <form
              className="flex items-center p-2 bg-white shadow rounded-xl"
              onSubmit={(e) => searchCourse(e)}>
              <input
                type="search"
                placeholder="Search Magazines"
                value={query}
                className="block w-full pl-2 mr-3 rounded-md focus:outline-none"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="submit"
                className="inline-block rounded-md bg-primary px-8 py-2 text-center font-semibold capitalize text-white ring-2 ring-primary hover:bg-[#266ED2]">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </section>
      <section className="bg-darkcloud bg-pattern">
        <div className="m-auto max-w-[1176px]  px-4 py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {issues.map(({ document }) => (
              <Magazine data={document} key={document.title} />
            ))}
          </div>
          <button
            className="m-auto mt-14 box-content block rounded-md border-2  border-primary px-4 py-2 text-base capitalize leading-[19px] text-primary hover:bg-[#EEF5FE]"
            disabled={isLoadingMore || isReachingEnd}
            onClick={() => setSize(size + 1)}>
            {isLoadingMore ? 'Loading...' : isReachingEnd ? 'No more Magazines' : 'Load More'}
          </button>
        </div>
      </section>
    </>
  );
};

export default EMagazines;
