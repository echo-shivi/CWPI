import React from 'react';

import BSLogo from '../../assets/bihar_sarkar_logo.png';

function Navbar() {
  return (
    <div className='bg-blue-400 text-gray-100 px-4 h-28 w-[100%]'>
      <div className='flex justify-between px-4 '>
        <h1 className='mt-12 text-xl md:text-2xl text-center underline'>
          CIVIL WORKS PENDENCY INDEX
        </h1>
        <img src={BSLogo} alt='Logo' className='w-24 h-24 mt-3' />
      </div>

    </div>
  );
}

export default Navbar;


