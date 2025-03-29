import { OutLink } from 'components/shared/Links';
import { socialLinks } from 'data/social';

export const Social = ({ className }) => {
  return (
    <ul className={className}>
      {socialLinks.map((each) => (
        <li key={each.label}>
          <OutLink
            href={each.link}
            className="text-white hover:text-primary"
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
