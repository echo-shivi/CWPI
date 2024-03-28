import React from 'react'
import FormP3 from './ConventionalForm/FormP3'
import TableP3 from './ConventionalTable/P3'
function ConventionalP3() {
    return (
        <div className='flex flex-col'>
            <h1 className='font-medium text-2xl'>P3</h1>
            <div className='py-6 px-1'>
                <FormP3 />
            </div>
            <TableP3 />
        </div>
    )
}

export default ConventionalP3
