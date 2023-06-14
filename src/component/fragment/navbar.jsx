import Button from '../element/button';
import NavbarButton from '../element/navbar-button';
import Logo from '../element/logo';

const Navbar = () => {
  return (
    <div className='max-w-screen-xl flex justify-between items-center mx-auto pt-5'>
      <div className='flex'>
        <Logo />
        <ul className='flex gap-5 ml-10'>
          <li>
            <NavbarButton isActive='true'>Home</NavbarButton>
          </li>
          <li>
            <NavbarButton>Features</NavbarButton>
          </li>
          <li>
            <NavbarButton>Blog</NavbarButton>
          </li>
          <li>
            <NavbarButton>About Us</NavbarButton>
          </li>
        </ul>
      </div>
      <div>
        <NavbarButton isActive='true'>Login</NavbarButton>
        <Button classname='ml-5 px-5 py-1 outline  outline-2 text-black font-semibold outline-blue-950 hover:bg-gray-500 hover:bg-opacity-30  transition ease-in-out duration-300'>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
