import TypingAnimation from '@/components/ui/typing-animation';
import Button from '../shared/Buttons';
import BlurIn from '@/components/ui/blur-in';
import { CoolMode } from '@/components/ui/cool-mode';
import { RainbowButton } from '@/components/ui/rainbow-button';

const WelcomeSection = () => {
  return (
    <section className="m-auto max-w-7xl px-4">
      <div
        style={{ backgroundImage: 'url(/hero_banner.jpg)' }}
        className="flex flex-col-reverse items-center justify-between md:flex-row">
        <div className="mb-8 text-center md:mb-0 md:w-1/2 md:text-left">
          <BlurIn
            word={'Welcome to Vedavarsity'}
            className="text-left text-4xl font-bold text-black text-primary dark:text-white md:text-5xl"
          />

          <TypingAnimation
            className="text-1xl text-black-400  mt-4 text-center dark:text-white md:text-left"
            text="Preserving the legacy, Promoting the truth, Propagating the Wisdom"
            duration={20}
          />

          <CoolMode>
            <Button
              href={'https://whatsapp.com/channel/0029Var5TSW6RGJMUXDTYb1b'}
              className="mt-4 rounded bg-black px-2 py-2 text-white transition duration-300 hover:bg-gray-800">
              Join Our Community
            </Button>
          </CoolMode>
        </div>

        <div className="flex justify-end md:w-1/2">
          <img src="/inss-logo.png" alt="Vedavarsity Logo" className="md:w-120 xs:w-80 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
