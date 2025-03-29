import { InLink } from './Links';
import logoImg from 'public/inss-logo.png';
import logoWhite from 'public/logo-white.png';
import Image from 'next/image';

const Logo = ({ isBlack }) => {
  return (
    <InLink href="/" className="h-14 w-16 md:h-auto md:w-auto">
      {isBlack ? (
        <Image src={logoImg} width={100} alt="vedavarsity logo" placeholder="blur" />
      ) : (
        <Image src={logoWhite} alt="vedavarsity logo" placeholder="blur" />
      )}
    </InLink>
  );
};

export default Logo;
