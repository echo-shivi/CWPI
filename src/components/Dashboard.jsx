import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';

const Dashboard = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleSetIndex = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const DashboardData = [
        { title: 'Work Agencies Details', index: 1 },
        { title: 'Scheme Reports', index: 2 },
        { title: 'Report Cards', index: 3 },
        { title: 'Stage Wise Analysis(Graphs)', index: 4 },
        { title: 'Agency Wise Analysis(Graphs)', index: 5 },
        { title: 'PDF Reports', index: 6 },
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
                       
                        This is the content 
                    </DashboardLayout>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;

