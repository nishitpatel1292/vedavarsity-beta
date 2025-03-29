import { navLinks } from '@/src/data/navigation';
import Link from 'next/link';
const extras = [
  { link: '/privacy-policy', label: 'Privacy Policy' }
  // { link: '/terms-of-use', label: 'Terms of Use' }
];

export function Navigation() {
  return (
    <nav className="flex flex-col items-center gap-y-2 border-b border-gray-200 pb-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6">
      {[...navLinks, ...extras]
        .filter((linkObj) => linkObj.label !== 'Publications')
        .map((link) => (
          <Link
            key={link.link}
            href={link.link}
            className="capitalize text-gray-600 transition-colors hover:text-primary">
            {link.label}
          </Link>
        ))}
    </nav>
  );
}
