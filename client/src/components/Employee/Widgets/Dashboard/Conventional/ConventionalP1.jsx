import React from 'react'
import FormP1 from './ConventionalForm/FormP1'
import TableP1 from './ConventionalTable/P1'
function ConventionalP1() {
    return (
        <div className='flex flex-col'>
            <h1 className='font-medium text-2xl'>P1</h1>
            <div className='py-6 px-1'>
                <FormP1 />
            </div>
            <TableP1 />
        </div>
    )
}

export default ConventionalP1
