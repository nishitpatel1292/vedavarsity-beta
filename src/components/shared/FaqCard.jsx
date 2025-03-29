import { Disclosure } from '@headlessui/react';
import { RiArrowDownSLine } from 'react-icons/ri';

const FaqCard = ({ children, question }) => {
  return (
    <Disclosure as="div" className="rounded-lg border">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`flex w-full items-center justify-between  px-4  py-2 text-left font-semibold text-primary`}>
            <span>{question}</span>
            <RiArrowDownSLine
              size={20}
              className={`${open ? 'rotate-180 transform' : ''} text-black transition-all`}
            />
          </Disclosure.Button>

          <Disclosure.Panel as="div" className="px-4">
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default FaqCard;
