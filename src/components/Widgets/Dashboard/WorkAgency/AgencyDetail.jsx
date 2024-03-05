import React from 'react'
import SchemesSubmitted from './AgencySubDetail/SchemesSubmitted';
import EmployeeDetail from './AgencySubDetail/EmployeeDetail';
import Admin from './AgencySubDetail/Admins';
export default function AgencyDetail() {
    return (
        <div>
            <SchemesSubmitted />
            <hr style={{ borderTop: "1px solid lightgrey" }} />
            <EmployeeDetail />
            <hr style={{ borderTop: "1px solid lightgrey" }} />
            <Admin />

        </div>
    )
}
