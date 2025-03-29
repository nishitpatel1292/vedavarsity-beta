import { AuthBtnGroup } from 'components/shared/Buttons';
import { InLink } from 'components/shared/Links';
import { navLinks } from 'data/navigation';
import { Squash as Hamburger } from 'hamburger-react';
import React, { useState, useEffect } from 'react';
import MobileNav from './MobileNav';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Logo from '../shared/Logo';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    let body = document.querySelector('body');
    isNavOpen ? body.classList.add('overflow-hidden') : body.classList.remove('overflow-hidden');
  }, [isNavOpen]);

  return (
    <nav className={`relative bg-white shadow-mist/25 ${!isNavOpen && 'shadow-xl'}`}>
      <div className="m-auto flex h-20 max-w-7xl items-center justify-between px-3 md:h-[100px]">
        <Logo isBlack={true} />
        <div className="flex">
          <ul className="mr-10 hidden items-center space-x-10 lg:flex">
            {navLinks.map((each) => {
              const isActive = pathname.split('/')[1] === each.link.slice(1); // Strip the first character
              return (
                <li key={each.label} className={each.dropdown && 'group relative'}>
                  <InLink
                    href={each.link}
                    className={`pb-2 capitalize transition-all hover:text-primary ${
                      isActive ? 'border-b-2 border-[#004AAD] text-[#004AAD]' : 'text-gray-800'
                    }`}>
                    {each.label}
                    {each.dropdown && <RiArrowDropDownLine size={20} className="inline" />}
                  </InLink>
                  {each.dropdown && (
                    <div className="absolute -right-9 z-10 hidden w-40 space-y-2 rounded-md bg-white p-3 shadow-md group-hover:block">
                      {each.dropdown.map((drop) => (
                        <Link
                          {...(drop.new && { target: '_blank' })}
                          href={drop.link}
                          className="block rounded-md px-2 py-1 capitalize hover:bg-gray-100"
                          key={drop.label}>
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <AuthBtnGroup className="hidden lg:flex" />
        </div>

        <button className="lg:hidden">
          <Hamburger size={20} toggled={isNavOpen} toggle={setNavOpen} />
        </button>
      </div>
      <MobileNav isOpen={isNavOpen} />
    </nav>
  );
};

export default Navbar;
