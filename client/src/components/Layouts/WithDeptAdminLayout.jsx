import React, { useState, useEffect } from 'react';
import DeptAdminSidebar from "../DeptAdmin/Common/DeptAdminSidebar";
import Navbar from "../Common/Navbar";

const DeptAdminDeptLayout = ({ children }) => {
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
      <DeptAdminSidebar setOpen={setOpen} open={open} />
      <div className={`mx-0 bg-blue-100 min-h-screen ${open ? 'ml-72' : 'ml-16'} flex flex-col w-full`}>
        <Navbar open={open}/>
        <div className={`p-10 bg-blue-100 overflow-x-auto `}>
          {children}
          </div>
      </div>
    </div>
  );
};

export default DeptAdminDeptLayout;
