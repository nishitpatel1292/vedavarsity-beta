import { InLink, OutLink } from './Links';

export const DonateButton = () => {
  return (
    <OutLink
      href="https://rzp.io/l/KzOI5A3"
      className="inline-block rounded-md border-white py-2 font-bold text-white hover:border-primary hover:text-primary md:border-2 md:px-9">
      Donate
    </OutLink>
  );
};

const Button = ({ children, outline, className, href }) => {
  return (
    <InLink
      className={`inline-block rounded-md py-2  text-center font-semibold capitalize ring-2 ring-primary ${
        outline ? ' text-primary hover:bg-[#EEF5FE]' : 'bg-primary text-white hover:bg-[#266ED2]'
      } ${className}`}
      href={href ? href : '#'}>
      {children}
    </InLink>
  );
};

export default Button;

export const AuthBtnGroup = ({ className }) => {
  return (
    <div className={`flex flex-col items-start lg:flex-row ${className}`}>
      <button className="loginButton signup inline-block rounded-md px-8 py-2 text-center font-semibold capitalize text-primary ring-2 ring-primary hover:bg-[#EEF5FE]">
        sign up
      </button>
      <button className="loginButton login mt-7 inline-block rounded-md bg-primary px-8 py-2 text-center font-semibold capitalize text-white ring-2 ring-primary hover:bg-[#266ED2] hover:ring-[#266ED2] lg:ml-10 lg:mt-0">
        log in
      </button>

      <button
        className="postLogin goToAccountButton inline-block rounded-md bg-primary px-8 py-2 text-center font-semibold capitalize text-white ring-2 ring-primary"
        style={{ display: 'none' }}>
        Account
      </button>
      <button
        className="postLogin logout mt-7 inline-block rounded-md px-8 py-2 text-center font-semibold capitalize text-red-900 ring-2 ring-red-200 lg:ml-10 lg:mt-0"
        style={{ display: 'none' }}>
        Logout
      </button>
    </div>
  );
};
