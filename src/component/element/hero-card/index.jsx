import React from 'react';
import Profile from './profile';
import TickIcon from './tick-icon';
import HeroCardCaption from './caption';

const HeroCard = () => {
  return (
    <div className='max-w-sm max-h-52 py-7 px-5 translate-x-36 rounded-2xl bg-white drop-shadow-xl'>
      <div className='flex justify-between mb-4'>
        <Profile />
        <TickIcon />
      </div>
      <div>
        <HeroCardCaption />
      </div>
    </div>
  );
};

export default HeroCard;
