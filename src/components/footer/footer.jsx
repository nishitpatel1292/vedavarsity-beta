import { Navigation } from './FooterNavigation';
import { SocialLinks } from './SocialLinks';
import { Logo } from './FooterLogo';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 text-sm text-gray-600">
      <div className="container mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 md:flex-row md:items-start md:justify-between">
        {/* Left - Logo and Copyright */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <Logo />
        </div>

        {/* Center - Navigation */}
        <Navigation />

        {/* Right - Socials */}
        <div className="mt-6 md:mt-0">
          <SocialLinks />
        </div>
      </div>
      {/* <div className="container flex flex-col justify-center mx-auto">
        <span className="text-center text-xs md:text-sm">
          Dedicated To <br />
          <b className="text-primary">His Divine Grace A.C. Bhaktivedanta Swami Prabhupāda.</b>
        </span>
        <span className="mt-2 text-center text-xs md:text-sm">
          Inspired By <br />
          <b className="text-primary">Sri Srimad Gaur Krishna Das Goswami.</b>
        </span>
        <span className="mt-8  text-left mx-auto text-xs md:text-sm">© 2025 INSS All rights reserved.</span>
      </div> */}
    </footer>
  );
}
