import React, { useState } from "react";

import DashboardLayout from "./DashboardLayout";


const DeptAdminDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSetIndex = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const DashboardData = [
    { title: "Pending Scheme", index: 1, component: null },
    { title: "Completed Scheme", index: 2, component: null },
    { title: "Conventional", index: 3, component: null },
    {
      title: "Epc",
      index: 4,
      component: null,
    },
    {
      title: "Departmental",
      index: 5,
      component: null,
    },
    {
      title: "Adb",
      index: 6,
      component: null,
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


