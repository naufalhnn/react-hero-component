const NavbarButton = (props) => {
  const { children, isActive = false } = props;
  if (isActive) {
    return (
      <button className='text-base font-semibold text-black px-5 py-2'>
        {children}
      </button>
    );
  } else {
    return (
      <button className='text-base font-semibold text-gray-500 px-5 py-2 hover:text-black transition ease-in-out duration-300'>
        {children}
      </button>
    );
  }
};

export default NavbarButton;
