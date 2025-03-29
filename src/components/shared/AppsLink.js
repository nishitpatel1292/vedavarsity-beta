import Image from 'next/image';
import { OutLink } from './Links';

import gStore from 'public/svgs/googlePlay.svg';
// import appleStore from 'public/svgs/appleStore.svg';

const AppsLink = ({ column, text }) => {
  return (
    <div
    // className={column ? 'space-y-4' : 'flex space-x-8'}
    >
      {/* <OutLink href="/#" className="block">
        <Image src={appleStore} alt="apple store" />
      </OutLink> */}
      {text && <p className="mb-2 text-lg font-semibold text-[#00000080]">{text}</p>}
      <OutLink
        href="https://play.google.com/store/apps/details?id=com.edmingle.iskconbhagavatamahavidyalaya"
        className="block">
        <Image src={gStore} alt="Google Play Store " />
      </OutLink>
    </div>
  );
};

export default AppsLink;
