import Banner from './Banner';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <Banner />
      <Navbar />
    </header>
  );
};

export default Header;
