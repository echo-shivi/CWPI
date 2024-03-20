import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { FaPeopleRoof } from "react-icons/fa6";
import BvmLogo from '../../../assets/bvm-logo.png';

function DeptAdminSidebar({ setOpen, open }) {
  const navigate = useNavigate();
  const menus = [
    { name: "Dashboard", link: "/home", icon: MdOutlineDashboard },
    { name: "Agency Wise Analytics", link: "/AgencyAnalytics", icon: MdOutlineDashboard },
    { name: "Employee Entry", link: "/", icon: FaPeopleRoof },
    { name: "Register Master Scheme", link: "/", icon: AiOutlineUser },
    { name: "Master Entry", link: "/", icon: ImProfile },
  
    { name: "Help", link: "/", icon: IoMdHelpCircleOutline },
    { name: "LogOut", link: "/", icon: TbLogout2, margin: true },
  ];


  return (
    <div
      className={`bg-blue-400 fixed top-0 h-screen overflow-x-hidden left-0 z-40  flex-row flex-nowrap overflow-y-auto py-4 shadow-xl transition-all duration-300 ${open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
    >
      <div className="py-3 flex items-center justify-between">

        {open && <img src={BvmLogo} alt='Logo' className='w-24 h-24 ml-[58px]' />}

        <div className="flex items-center">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer ml-auto"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>


      <div className="mt-4 flex flex-col gap-4 relative">
        {!open && <img src={BvmLogo} alt='Logo' className='w-8 h-8' />}

        {menus?.map((menu, i) => (
          <div
            key={i}
            onClick={() => navigate(menu.link)} // Use navigate function to redirect
            className={`${menu?.margin && "mt-5"
              } group cursor-pointer flex items-center text-lg gap-3.5 font-medium p-2 hover:bg-blue-500 rounded-md`}
          >
            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              {menu?.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeptAdminSidebar;
