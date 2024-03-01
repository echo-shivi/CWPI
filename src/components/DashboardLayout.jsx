import React from 'react';
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';

const DashboardLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
   
    const isActive = activeIndex === index;

    const handleTogglePanel = () => {
        setActiveIndex(isActive ? null : index);
    };

    return (
        <>
            <div onClick={handleTogglePanel} className='mx-auto  flex w-[100%] h-[86px] justify-between p-2 mt-2 rounded bg-[#7575bf]'>
                <div className='flex'>
                    <div className='text-white font-bold p-4'>{title}</div>
                </div>
                <div className="flex items-center justify-center">
                    {isActive ? (
                        <BsFillArrowDownCircleFill className='w-8 h-8 text-white' />
                    ) : (
                        <BsFillArrowUpCircleFill className='w-8 h-8 text-white' />
                    )}
                </div>
            </div>

            {isActive && (
                <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6">
                    {children}
                </div>
            )}
        </>
    );
};

export default DashboardLayout;

