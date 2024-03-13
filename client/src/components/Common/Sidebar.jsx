import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { TbAlertSquareRounded } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { FaPeopleRoof } from "react-icons/fa6";
import BvmLogo from '../../assets/bvm-logo.png';

function Sidebar() {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Add Agencies", link: "/add-agencies", icon: FaPeopleRoof },
    { name: "Add Agency Admin", link: "/add-agency-admin", icon: AiOutlineUser },
    { name: "Add Designation", link: "/add-designation", icon: ImProfile },
    { name: "Analytics", link: "/analytics", icon: TbReportAnalytics, margin: true },
    { name: "Alerts", link: "/alerts", icon: TbAlertSquareRounded },
    { name: "Help", link: "/help", icon: IoMdHelpCircleOutline },
    { name: "LogOut", link: "/logout", icon: TbLogout2, margin: true },
  ];

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
    <div
      className={`bg-blue-400 min-h-screen ${open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
    >
      <div className="py-3 flex justify-between">
        {open && <img src={BvmLogo} alt='Logo' className='w-24 h-24' />}

        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {!open && <img src={BvmLogo} alt='Logo' className='w-8 h-8' />}

        {menus?.map((menu, i) => (
          <Link
            to={menu.link}
            key={i}
            className={`${menu?.margin && "mt-5"
              } group flex items-center text-lg gap-3.5 font-medium p-2 hover:bg-blue-500 rounded-md`}
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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

