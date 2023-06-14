import Feature from './features';

const Features = (props) => {
  const { image, title, children } = props;
  return (
    <div className='flex m-8'>
      <Feature
        image={image}
        title={title}>
        {children}
      </Feature>
    </div>
  );
};

export default Features;
