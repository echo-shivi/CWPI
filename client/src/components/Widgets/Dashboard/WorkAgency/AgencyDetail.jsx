import React from 'react';
// import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SchemesSubmitted from './AgencySubDetail/SchemesSubmitted';
import EmployeeDetail from './AgencySubDetail/EmployeeDetail';
import Admin from './AgencySubDetail/Admins';
export default function AgencyDetail() {
    const { departmentName } = useLocation().state;
    // const { DepartmentName } = useParams();
    return (
        <div>
            <h1>{departmentName}</h1>
            <SchemesSubmitted />
            <hr style={{ borderTop: "1px solid lightgrey" }} />
            <EmployeeDetail />
            <hr style={{ borderTop: "1px solid lightgrey" }} /> 
            <Admin />
        </div>
    );
}

