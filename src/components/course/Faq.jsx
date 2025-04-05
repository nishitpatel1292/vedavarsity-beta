'use client';
import FaqCard from 'components/shared/FaqCard';
import { OutLink } from 'components/shared/Links';

const Faq = () => {
  return (
    <section className="prose prose-blue m-auto max-w-7xl px-4 py-10 md:py-12">
      <h2 className="text-2xl font-semibold md:text-32px">Frequently Asked Questions</h2>
      <div className="mt-7 space-y-4 md:mt-10">
        <FaqCard question="How to attend a live session ?">
          <ol>
            <li>
              Login into your account from{' '}
              <OutLink href="https://www.vedavarsity.com/">https://www.vedavarsity.com/</OutLink>
            </li>
            <li>The live classes section is on the right side of the screen.</li>
            <li>Under today’s classes ‘Join’ button will appear.</li>
            <li>Click on the ‘Join’ button to join the webinar.</li>
          </ol>
        </FaqCard>
        <FaqCard question="On clicking the “Join now” button, the live session is not launching?">
          <p>Pop up might be blocked on your browser,</p>
          <ol>
            <li> On your computer, open Chrome. </li>
            <li> At the top right, click More More and then Settings. </li>
            <li> Under “Privacy and security,” click Site Settings. </li>
            <li> Click Pop-ups and redirects. </li>
            <li> At the top, turn the setting to Allowed or Blocked. </li>
            <li> Refresh the page and try again </li>
          </ol>
          <p>
            NOTE: These steps are given for the Chrome browser. Each browser has its own steps.
            Kindly search for the method to allow pop-ups for the desired browser. For IOS devices
            Follow the steps to unblock pop-ups in the device:-
            <OutLink href="https://support.apple.com/en-in/guide/safari/sfri40696/mac">
              https://support.apple.com/en-in/guide/safari/sfri40696/mac
            </OutLink>
          </p>
        </FaqCard>
        <FaqCard question="Can I access the portal from my phone?">
          <p>Yes, it is accessible from a mobile browser.</p>
        </FaqCard>
        <FaqCard question="Where do I see the schedule of course?">
          <ol>
            <li>
              Once you login, on your Dashboard, classes are visible on the right side of the
              screen, below the ‘Today’s Classes’.
            </li>
            <li> Click on the Calendar button on the left menu to view the monthly schedule.</li>
          </ol>
        </FaqCard>
        <FaqCard question="Where do I update my profile?">
          <ol>
            <li> Login to your account.</li>
            <li> On the right top corner, click on the drop down and click on ‘Profile’.</li>
            <li> Click on the edit button on the right top to edit the details.</li>
          </ol>
        </FaqCard>
        <FaqCard question="Can I re-attempt an exam/quiz?">
          <p>Depends on the course. The teacher will fix the number of attempts.</p>
        </FaqCard>
      </div>
    </section>
  );
};

export default Faq;
