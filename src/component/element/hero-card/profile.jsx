const Profile = () => {
  return (
    <div className='flex gap-4 items-center'>
      <img
        className='rounded-full w-8'
        src='/images/profile.jpg'
        alt=''
      />
      <h5 className='font-semibold text-base'>John Doe</h5>
    </div>
  );
};

export default Profile;
