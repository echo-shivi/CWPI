import React from 'react'
import FormP4 from './ConventionalForm/FormP4'
import TableP4 from './ConventionalTable/P4'
function ConventionalP4() {
    return (
        <div className='flex flex-col'>
            <h1 className='font-medium text-2xl'>P4</h1>
            <div className='py-6 px-1'>
                <FormP4 />
            </div>
            <TableP4 />
        </div>
    )
}

export default ConventionalP4
