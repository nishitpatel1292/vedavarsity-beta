import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/inss.png';

export function Logo() {
  return (
    <div className="mb-6 flex flex-col items-center justify-center">
      <Link href="/" className=" flex items-center justify-center">
        <Image src={logo} alt="INSS Logo" width={180} height={90} priority />
      </Link>
      
    </div>
  );
}
