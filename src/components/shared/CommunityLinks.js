import Image from 'next/image';
import { OutLink } from './Links';

import telegram from 'public/svgs/telegram.svg';
import whatsapp from 'public/svgs/whatsapp.svg';
// import appleStore from 'public/svgs/appleStore.svg';

const CommunityLinks = ({ column, text, className, community_links }) => {
  const links = {
    whatsapp: 'https://chat.whatsapp.com/JoCb24xIIJ31f9t1KNrh3W',
    telegram: 'https://t.me/+R3ecNqESCwmxJIJt'
  };
  return (
    <div
      className={className}
      // className={column ? 'space-y-4' : 'flex space-x-8'}
    >
      {/* <OutLink href="/#" className="block">
        <Image src={appleStore} alt="apple store" />
      </OutLink> */}
      {text && <p className="mb-2 text-lg font-semibold text-[#00000080]">{text}</p>}
      <div className={'flex space-x-4'}>
        {links?.whatsapp && (
          <OutLink href={links?.whatsapp} className="block">
            <Image src={whatsapp} alt="whatsapp" />
          </OutLink>
        )}
        {links?.telegram && (
          <OutLink href={links?.telegram} className="block">
            <Image src={telegram} alt="telegram" />
          </OutLink>
        )}
      </div>
    </div>
  );
};

export default CommunityLinks;
