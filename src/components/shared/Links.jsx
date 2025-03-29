import Link from 'next/link';
import React from 'react';

export const OutLink = ({ href, className, children, ...props }) => (
  <a href={href} target="_blank" rel="noreferrer" className={className} {...props}>
    {children}
  </a>
);

export const InLink = ({ href, className, children }) => (
  <Link href={href} className={className}>
    {children}
  </Link>
);

export const IconLink = ({ children, href, icon, viewInMob = false }) => {
  if (viewInMob) {
    return (
      <li className="lg:hidden">
        <a
          href={href}
          className="flex items-center space-x-2 text-white transition-colors duration-300 hover:text-primary">
          {icon}
          <span className="hidden sm:inline">{children}</span>
        </a>
      </li>
    );
  }

  return (
    <li>
      <a href={href} className="flex items-center space-x-2 text-white hover:text-primary">
        {icon}
        <span className="hidden sm:inline">{children}</span>
      </a>
    </li>
  );
};
