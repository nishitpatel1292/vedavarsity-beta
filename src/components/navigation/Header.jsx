import { useEffect, useState } from 'react';
import Banner from './Banner';
import Navbar from './Navbar';

const Header = ({ isHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Check if the user has scrolled
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <header className={`${isHome ? 'absolute left-0 top-0' : 'sticky top-0'} z-50 w-full`}>
        <Banner />
        <Navbar isScrolled={isScrolled} isHome={isHome} />
      </header>
    </>
  );
};

export default Header;
