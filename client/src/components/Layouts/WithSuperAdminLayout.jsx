import React, { useState, useEffect } from 'react';
import Navbar from "../Common/Navbar";
import Sidebar from "../Common/Sidebar";

const WithSuperAdminLayout = ({ children }) => {
  const [open, setOpen] = useState(window.innerWidth >= 790);

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 790);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex">
      <Sidebar setOpen={setOpen} open={open} />
      <div className={`mx-0 ${open ? 'ml-72' : 'ml-16'} flex flex-col w-full`}>
        <Navbar />
        <div className="p-10 bg-blue-100 min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
};

export default WithSuperAdminLayout;
