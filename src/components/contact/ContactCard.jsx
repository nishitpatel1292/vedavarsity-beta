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
      <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-blue-50">
        <Icon className="h-10 w-10 text-blue-500" />
      </div>
      <h3 className="mb-2 text-2xl font-bold text-gray-800">{title}</h3>
      <p className="mb-2 text-gray-600">{subtitle}</p>
      <ContactText className="whitespace-pre-line font-semibold text-gray-800" {...linkProps}>
        {contact}
      </ContactText>
    </div>
  );
}
