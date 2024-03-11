import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import WorkAgencies from './WorkAgency/AgencyWork';
import SchemeReport from './SchemeReports'; 
import ReportCards from './ReportCards/ReportCards'; 
import StageAnalysis from './StageAnalysis';
import AgencyAnalysis from './WorkAgency/AgencyAnalysis'; 
import PdfReports from './PdfReport/PdfReports'; 

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSetIndex = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const DashboardData = [
    { title: 'Work Agencies Details', index: 1, component: <WorkAgencies />},
    { title: 'Scheme Reports', index: 2, component: <SchemeReport /> },
    { title: 'Report Cards', index: 3, component: <ReportCards />},
    { title: 'Stage Wise Analysis(Graphs)', index: 4, component: <StageAnalysis />},
    { title: 'Agency Wise Analysis(Graphs)', index: 5, component: <AgencyAnalysis />},
    { title: 'PDF Reports', index: 6, component: <PdfReports />},
  ];

  return (
    <div className='mx-0 flex flex-col w-full pt-[36px]'>
      <h1 className='text-[18px] md:text-2xl'>Welcome TO Super Admin Dashboard</h1>
      <div className='pt-8 justify-center items-center'>
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

export default Dashboard;



