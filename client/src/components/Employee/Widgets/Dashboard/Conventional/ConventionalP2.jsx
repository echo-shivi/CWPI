import React from 'react'
import FormP2 from './ConventionalForm/FormP2'
import TableP2 from './ConventionalTable/P2'
function ConventionalP2() {
    return (
        <div className='flex flex-col'>
            <h1 className='font-medium text-2xl'>P2</h1>
            <div className='py-6 px-1'>
                <FormP2 />
            </div>
            <TableP2 />
        </div>
    )
}

export default ConventionalP2
