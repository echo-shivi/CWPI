import React, { useState } from "react";

import DashboardLayout from "./DashboardLayout";
import PendingScheme from "./PendingScheme";
import CompletedScheme from "./CompletedScheme";
import Conventional from "./Conventional/Conventional";
import Epc from "./Epc/Epc";
import Departmental from "./Departmental/Departmental";
import Adb from "./Adb/Adb";
const DeptAdminDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSetIndex = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const DashboardData = [
    { title: "Pending Scheme", index: 1, component: <PendingScheme /> },
    { title: "Completed Scheme", index: 2, component: <CompletedScheme /> },
    { title: "Conventional", index: 3, component: <Conventional /> },
    {
      title: "Epc",
      index: 4,
      component: <Epc />,
    },
    {
      title: "Departmental",
      index: 5,
      component: <Departmental />,
    },
    {
      title: "Adb",
      index: 6,
      component: <Adb/>,
    },
  ];

  return (
    <div className="mx-0 flex flex-col w-full pt-[10px] cursor-pointer">

      <div className="pt-10 justify-center items-center">
        <div className="pt-4"></div>
        {DashboardData.map((item) => (
          <DashboardLayout
            key={item.index}
            title={item.title}
            index={item.index}
            activeIndex={activeIndex}
            setActiveIndex={handleSetIndex}
          >
            {item.component}
          </DashboardLayout>
        ))}
      </div>
    </div>
  );
};

export default DeptAdminDashboard;



