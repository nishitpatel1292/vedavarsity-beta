import { InLink } from 'components/shared/Links';
import Button, { AuthBtnGroup } from 'components/shared/Buttons';
import { navLinks } from 'data/navigation';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useState } from 'react';

const MobileNav = ({ isOpen }) => {
  const [isDropdownOpen, toggleDropdown] = useState(false);

  return (
    <div
      className={`absolute z-50 w-full  bg-white  px-4 pt-5 pb-8 shadow-xl shadow-black/10 transition-all lg:hidden lg:flex-col ${
        isOpen ? 'opacity-1 -translate-y-2' : ' invisible translate-y-5 opacity-0'
      }`}
    >
      <ul className="mb-7 space-y-7">
        {navLinks.map((each) => (
          <li key={each.label}>
            {each.dropdown == undefined ? (
              <InLink href={each.link} className="capitalize">
                {each.label}
              </InLink>
            ) : (
              <>
                <button className="capitalize" onClick={() => toggleDropdown((open) => !open)}>
                  {each.label}
                  <RiArrowDropDownLine size={20} className="inline" />
                </button>
                <div className={`ml-3 mt-4 space-y-3 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                  {each.dropdown.map((drop) => (
                    <InLink
                      href={drop.link}
                      className="block px-2 py-1 capitalize hover:bg-gray-100"
                      key={drop.label}
                    >
                      {drop.label}
                    </InLink>
                  ))}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      <AuthBtnGroup className="lg:hidden" />
    </div>
  );
};

export default MobileNav;
