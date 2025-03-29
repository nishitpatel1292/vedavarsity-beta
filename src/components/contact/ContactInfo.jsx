import { contacts } from 'data/contact';

const ContactInfo = () => {
  return (
    <div className=" rounded-lg bg-white p-8 shadow-xl shadow-mist/70">
      <h1 className="text-2xl font-bold lg:text-32px">Contact us</h1>

      <div className="mt-8 space-y-8">
        {contacts.map((contact) => (
          <div className="flex items-center space-x-8" key={contact.title}>
            <span>{contact.icon}</span>
            <div>
              <p className="text-xs">{contact.title}</p>
              <h2 className="">{contact.content}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
