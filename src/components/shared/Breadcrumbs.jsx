'use client'; // Ensure it's a client component

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use usePathname instead of useRouter

const Breadcrumbs = ({ lastPath }) => {
  const pathname = usePathname(); // Get the current path
  const paths = pathname?.split('/').filter(Boolean) || [];

  return (
    <nav className="bg-[#f8f8f8] p-4 ">
      <ul className="flex text-gray-500 max-w-7xl m-auto text-xs">
        <li className='flex items-center justify-center'>
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>
        {paths.map((path, index) => {
          const href = '/' + paths.slice(0, index + 1).join('/');
          const isLast = index === paths.length - 1;
          return (
            <li key={href} className="flex items-center justify-center capitalize">
              <span className="mx-2"><ChevronRight size={12}/></span>
              {isLast ? (
                <span className="font-semibold text-gray-800">
                  {lastPath ? lastPath : decodeURIComponent(path)}
                </span>
              ) : (
                <Link href={href} className="hover:text-blue-600">
                  {decodeURIComponent(path)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
