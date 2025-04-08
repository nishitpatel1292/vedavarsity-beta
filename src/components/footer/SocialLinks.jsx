import { socialLinks } from '@/src/data/social';
import Link from 'next/link';

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.label}
            href={link.link}
            className="text-gray-500 hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">{link.label}</span>
            {Icon}
          </Link>
        );
      })}
    </div>
  );
}
