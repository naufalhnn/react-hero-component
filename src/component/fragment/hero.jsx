import Features from '../element/features';
import HeroCard from '../element/hero-card';
import HeroImage from '../element/hero-image';
import HeroText from '../element/hero-text';

const Hero = () => {
  return (
    <div>
      <div className='flex max-w-screen-xl mt-20 mx-auto justify-between'>
        <HeroText />
        <HeroCard />
        <HeroImage />
      </div>
      <div className='flex -translate-y-36 max-w-screen-xl bg-tealishBlue mx-auto'>
        <Features
          image='images/calendar.svg'
          title='Online appointment scheduling'>
          Allows users to schedule appointments with their healthcare provider
          through the app.
        </Features>
        <Features
          image='images/bell.svg'
          title='Medication reminders'>
          Allows users to schedule appointments with their healthcare provider
          through the app.
        </Features>
        <Features
          image='images/pin.svg'
          title='Virtual consultations'>
          Allows users to schedule appointments with their healthcare provider
          through the app.
        </Features>
      </div>
    </div>
  );
};

export default Hero;
