const Feature = (props) => {
  const { image, alt = 'feature icon', title, children } = props;
  return (
    <div>
      <div className='flex gap-5'>
        <img
          className='w-12 h-12'
          src={image}
          alt={alt}
        />
        <h3 className='font-semibold text-lg text-white'>
          {title}
          <br />
          <span className='font-light text-sm tracking-wide'>{children}</span>
        </h3>
      </div>
    </div>
  );
};

export default Feature;
