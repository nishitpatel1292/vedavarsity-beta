import { Dialog } from '@headlessui/react';
import { RiCloseLine } from 'react-icons/ri';

const Modal = ({ children, isOpen, heading, setIsOpen, size }) => (
  <Dialog
    open={isOpen}
    onClose={() => setIsOpen(false)}
    className="fixed inset-0 z-10 overflow-y-auto"
  >
    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
    <div className={`m-auto  ${size}  p-4 md:pt-20`}>
      <div className="relative rounded-lg bg-white p-5">
        <div className="mb-4 flex items-center justify-between md:mb-6">
          <Dialog.Title className="text-xl font-bold md:text-2xl">{heading}</Dialog.Title>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1 ring-primary focus:ring-2"
          >
            <RiCloseLine size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  </Dialog>
);

export default Modal;
