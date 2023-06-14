import Button from '../button';
const HeroText = () => {
  return (
    <div>
      <div className='max-w-md flex flex-col gap-5 mt-10'>
        <h1 className='text-5xl font-semibold text-blue-950 leading-tight'>
          Get the healthcare you need, when you need it.
        </h1>
        <p className='text-lg text-blue-950'>
          Manage all of your healthcare needs in one convenient place – from
          booking appointments to tracking your health history.
        </p>
      </div>
      <Button classname='px-10 py-4 mt-10 font-medium bg-tealishBlue text-white hover:bg-tealishBlue/80 transition ease-in-out duration-300'>
        Book an Appointment
      </Button>
    </div>
  );
};

export default HeroText;
