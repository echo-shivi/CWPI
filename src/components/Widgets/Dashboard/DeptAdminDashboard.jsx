import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import DeptAdminAgencyDetails from './DeptAdminAgencyDetails';
import DeptAdminReports from './DeptAdminReports'; 
import ReportCards from './ReportCards'; 
import StageAnalysis from './StageAnalysis';
import AgencyAnalysis from './AgencyAnalysis'; 
import PdfReports from './PdfReport/PdfReports'; 

const DeptAdminDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSetIndex = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const DashboardData = [
    { title: 'Agency Details', index: 1, component: <DeptAdminAgencyDetails /> },
    { title: 'Reports', index: 2, component: <DeptAdminReports /> },
    { title: 'Scheme Reports', index: 3, component: <ReportCards /> },
    { title: 'Report Cards', index: 4, component: <StageAnalysis />},
    { title: 'Stage Wise Analytics(Graphs)', index: 5, component: <AgencyAnalysis />},
    { title: 'Agency Wise Analytics(Graphs)', index: 6, component: <AgencyAnalysis />},
    { title: 'Pending Schemes for final submission 0', index: 7, component: <PdfReports />},
    { title: 'Conventional P6 Approvals', index: 8, component: <PdfReports />},
  ];

  return (
    <div className='mx-0 flex flex-col w-full pt-[10px]'>
      <h1 className='text-[18px] md:text-2xl text-center underline'>Welcome Agency Admin</h1>
      <div className='pt-10 justify-center items-center'>
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



