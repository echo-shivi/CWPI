import React from 'react';
// import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SchemesSubmitted from './AgencySubDetail/SchemesSubmitted';
import EmployeeDetail from './AgencySubDetail/EmployeeDetail';
import Admin from './AgencySubDetail/Admins';
import { FaFolderOpen } from "react-icons/fa6";

export default function AgencyDetail() {
    const { departmentName } = useLocation().state;
    // const { DepartmentName } = useParams();
    return (
        <div>
            <h1 className="text-2xl font-medium  text-gray-800 ">Agency Details</h1>
            <div className="p-4 flex flex-col my-8 w-80 bg-blue-100 border border-t-blue-100 border-blue-400 text-black   rounded-lg shadow-md">
                <FaFolderOpen size={30} className='text-blue-400' />

                <p className="text-sm md:text-xl pt-2 text-gray-800 font-medium mb-2">
                    {departmentName}
                </p>
            </div>
            <SchemesSubmitted />
            <hr style={{ borderTop: "1px solid lightgrey" }} />
            <EmployeeDetail />
            <hr style={{ borderTop: "1px solid lightgrey" }} />
            <Admin />
        </div >
    );
}

