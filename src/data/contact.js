import { ImLocation2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';

export const vedavarsityEmail = 'info@vedavarsity.com';
export const vedavarsityPhone = '+91 9892408914';

export const contacts = [
  {
    icon: <ImLocation2 size={32} className="text-primary" />,
    title: 'Postal Address:',
    content:
      ' Vedavarsity, C 102, Koshda Mandakini, Keshav Dham Road, Vrindavan, Mathura - 281121, Uttar Pradesh. '
  },
  {
    icon: <MdEmail size={32} className="text-primary" />,
    title: 'Email:',
    content: vedavarsityEmail
  },
  {
    icon: <RiWhatsappFill size={32} className="text-primary" />,
    title: 'Contact:',
    content: vedavarsityPhone
  }
];
