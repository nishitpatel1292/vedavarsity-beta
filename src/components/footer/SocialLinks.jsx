import { socialLinks } from '@/src/data/social';
import Link from 'next/link';

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.label}
            href={link.link}
            className="group text-gray-600 transition-colors hover:text-[#0066cc]"
            target="_blank"
            rel="noopener noreferrer">
            <span className="sr-only">{link.label}</span>
            {Icon}
            {/* <Icon className="h-5 w-5 group-hover:fill-[#0066cc]" /> */}
          </Link>
        );
      })}
    </div>
  );
}
