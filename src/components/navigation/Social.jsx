import { OutLink } from 'components/shared/Links';
import { socialLinks } from 'data/social';

export const Social = ({ className }) => {
  return (
    <ul className={className}>
      {socialLinks.map((each) => (
        <li key={each.label} className='p-2 text-gray-300 rounded-full hover:text-primary hover:bg-white transition-all duration-300 ease-in-out'>
          <OutLink
            href={each.link}
            className=""
            aria-label={each.label}
            title={each.label}
          >
            {each.icon}
          </OutLink>
        </li>
      ))}
    </ul>
  );
};
