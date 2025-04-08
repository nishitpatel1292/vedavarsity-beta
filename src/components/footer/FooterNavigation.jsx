import { navLinks } from '@/src/data/navigation';
import Link from 'next/link';

const column1 = navLinks.slice(0, 4);
const column2 = [
  ...navLinks.slice(4, 8),
  { link: '/privacy-policy', label: 'Privacy Policy' },
];
// const column3 = [
//   { link: '/terms-of-use', label: 'Terms of Use' }
// ];

export function Navigation() {
  return (
    <div className="flex flex-wrap justify-center gap-12">
      {[column1, column2].map((column, i) => (
        <ul key={i} className="space-y-2 text-center capitalize md:text-left">
          {column.map((link) => (
            <li key={link.link}>
              <Link href={link.link} className="transition-colors hover:text-primary">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
