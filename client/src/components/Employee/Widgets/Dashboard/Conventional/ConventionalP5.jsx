import React from 'react'
import FormP5 from './ConventionalForm/FormP5'
import TableP5 from './ConventionalTable/P5'
function ConventionalP5() {
    return (
        <div className='flex flex-col'>
            <h1 className='font-medium text-2xl'>P5</h1>
            <div className='py-6 px-1'>
                <FormP5 />
            </div>
            <TableP5 />
        </div>
    )
}

export default ConventionalP5
