import React from "react";

import BSLogo from "../../assets/bihar_sarkar_logo.png";

function Navbar({ open, setOpen }) {
  return (
    <div
      className={`sticky top-0 z-40 mx-auto  flex-none  dark:bg-slate-900  md:backdrop-blur-sm dark:md:bg-slate-900/90 bg-blue-400 text-gray-100  h-24 w-[100%]`}
    >
      <div className="flex justify-between items-center mt-2 mb-8 px-2">
        <div></div>
    
  <h1 className="text-xl md:text-2xl text-center underline">
    CIVIL WORKS PENDENCY INDEX
  </h1>
  <img src={BSLogo} alt='Logo' className='w-24 h-24' />
</div>

      
    </div>
  );
}

export default Navbar;
