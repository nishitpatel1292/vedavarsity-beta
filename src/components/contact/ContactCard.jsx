export function ContactCard({ icon: Icon, title, subtitle, contact, isLink = false }) {
  const ContactText = isLink ? 'a' : 'p';
  const linkProps = isLink
    ? {
        href: title === 'Email' ? `mailto:${contact}` : `tel:${contact}`,
        className: 'hover:underline'
      }
    : {};

  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-black">
        <Icon className="h-8 w-8 text-black" />
      </div>
      <h3 className="mb-2 text-2xl font-bold text-gray-800">{title}</h3>
      <p className="mb-2 text-gray-600">{subtitle}</p>
      <ContactText className="whitespace-pre-line font-semibold text-gray-800" {...linkProps}>
        {contact}
      </ContactText>
    </div>
  );
}
