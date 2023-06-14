const HeroImage = () => {
  return (
    <div className='w-2/6 h-screen -skew-x-6 -translate-y-36 -z-10 bg-waterLeaf'>
      <img
        className='skew-x-6 translate-x-8 mt-16'
        src='/images/hero-image.png'
        alt=''
      />
    </div>
  );
};

export default HeroImage;
