import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import DeptAdminReports from "../DeptAdminReports";
import DeptAdminReportCards from "../DeptAdminReportCards";
import DeptAdminStageAnalysis from "../DeptAdminStageAnalysis";
import DeptAdminAgencyAnalysis from "../DeptAdminAgencyAnalysis";
import DeptAdminPendingScheme from "../DeptAdminPendingScheme";
import DeptAdminConventionalScheme from "../DeptAdminConventionalScheme";
import DeptAdminSchemeReports from "../DeptAdminSchemeReports"
import SchemeSubmittedLastMonth from "../SchemeLastMonth";
import SchemeSubmittedThisMonth from "../SchemeThisMonth";

const DeptAdminDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSetIndex = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const DashboardData = [
    { title: "Reports", index: 1, component: <DeptAdminReports /> },
    { title: "Scheme Reports", index: 2, component: <DeptAdminSchemeReports /> },
    { title: "Report Cards", index: 3, component: <DeptAdminReportCards /> },
    {
      title: "Stage Wise Analytics(Graphs)",
      index: 4,
      component: <DeptAdminStageAnalysis />,
    },
    {
      title: "Pending Schemes for final submission 0",
      index: 5,
      component: <DeptAdminPendingScheme />,
    },
    {
      title: "Conventional P6 Approvals",
      index: 6,
      component: <DeptAdminConventionalScheme />,
    },
  ];

  return (
    <div className="mx-0 flex flex-col w-full pt-[10px] cursor-pointer">
      <h1 className="text-[18px] md:text-2xl text-center underline">
        Welcome Agency Admin
      </h1>
      <h1 className="pt-6 flex justify-center text-[18px] md:text-2xl">
        Agency Name- Environment, Forest & Climate Change Department(EFCCD)
      </h1>
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



