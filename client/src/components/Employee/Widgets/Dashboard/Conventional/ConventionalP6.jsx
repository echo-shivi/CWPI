import React from 'react'
import FormP6 from './ConventionalForm/FormP6'
import TableP6 from './ConventionalTable/P6'
function ConventionalP6() {
    return (
        <div className='flex flex-col'>
            <h1 className='font-medium text-2xl'>P6</h1>
            <div className='py-6 px-1'>
                <FormP6 />
            </div>
            <TableP6 />
        </div>
    )
}

export default ConventionalP6
