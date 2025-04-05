import { AuthBtnGroup, DonateButton } from 'components/shared/Buttons';
import { IconLink } from 'components/shared/Links';
import { MdEmail, MdCall } from 'react-icons/md';
import { Social } from './Social';
import { socialLinks } from 'data/social';
import { vedavarsityEmail, vedavarsityPhone } from '@/src/data/contact';

const Banner = () => {
  return (
    <nav className="hidden md:block bg-navy">
      <div className="m-auto flex h-10 max-w-7xl items-center justify-between  px-4 md:h-[60px]">
        <ul className="flex items-center text-xs space-x-4 lg:space-x-6">
          <div className="flex items-center space-x-10">
            <Social className="hidden items-center space-x-2 text-xs lg:flex"></Social>
            {/* <DonateButton /> */}
          </div>
          <IconLink href={`mailto:${vedavarsityEmail}`} icon={<MdEmail />}>
            {vedavarsityEmail}
          </IconLink>
          <IconLink href={`tel:${vedavarsityPhone}`} icon={<MdCall />}>
            {vedavarsityPhone}
          </IconLink>
          <IconLink viewInMob={true} href={`${socialLinks[1].link}`} icon={socialLinks[1].icon}>
            {socialLinks[1].label}
          </IconLink>
        </ul>
        <AuthBtnGroup className="hidden lg:flex" />
      </div>
    </nav>
  );
};

export default Banner;
