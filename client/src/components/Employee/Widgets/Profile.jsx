import React, { useState } from 'react';

const FormComponent = () => {
    const [department, setDepartment] = useState('jjklllllll');
    const [designation, setDesignation] = useState('kjmnjj');
    const [username, setUsername] = useState('shreya');
    const [mobile, setMobile] = useState('nhhhh');
    const [whatsapp, setWhatsapp] = useState('jjjjj8');
    const [email, setEmail] = useState('hhhhh');
    const [password, setPassword] = useState('hhhhh8');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (

        <div className="bg-white p-6 px-4  ">

            <div className="grid gap-2 p-4 text-sm grid-cols-1">

                {/* <div className="mx-4 justify-center items-center my-32  text-gray-900">

                    <div className="mx-auto w-32 h-32   border-4 border-white rounded-full overflow-hidden">
                        <img className="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front' />
                    </div>
                    <div className="text-center mt-2">
                        <h2 className="font-semibold text-xl uppercase">{username}</h2>

                        <p className="text-gray-500 capitalize">{department}-{designation}</p>
                    </div>
                    <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                        <li className="flex flex-col items-center justify-around">
                            <h2 className="font-semibold text-black uppercase">Email</h2>

                            <div className='text-black capitalize'>{email}</div>
                        </li>
                        <li className="flex flex-col items-center justify-around">
                            <h2 className="font-semibold text-black uppercase">Mobile</h2>

                            <div className='text-black capitalize'>{mobile}</div>
                        </li>
                        <li className="flex flex-col items-center justify-around">
                            <h2 className="font-semibold text-black">Whatsapp</h2>

                            <div className='text-black capitalize'>{whatsapp}</div>
                        </li>
                    </ul>

                </div> */}

                <div className=" p-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                        <div className="mx-auto w-32 h-32   border-4 border-white rounded-full overflow-hidden">
                        <img className="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front' />
                    </div>
                            <label htmlFor="department">Department</label>
                            <input type="text" name="department" id="department" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={department} onChange={(e) => setDepartment(e.target.value)} />
                        </div>

                        <div className="md:col-span-5">
                            <label htmlFor="designation">Designation</label>
                            <input type="text" name="designation" id="designation" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={designation} onChange={(e) => setDesignation(e.target.value)} />
                        </div>

                        <div className="md:col-span-3">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="mobile">Mobile</label>
                            <input type="text" name="mobile" id="mobile" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input type="text" name="whatsapp" id="whatsapp" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
                        </div>

                        <div className="md:col-span-5">
                            <label htmlFor="email">Email Address</label>
                            <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@domain.com" />
                        </div>

                        <div className="md:col-span-5">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="md:col-span-5">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <div className='md:col-span-5 flex justify-center items-center w-full'>
                            <button className="btn-blue rounded-lg w-full">Save</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>



    );
};

export default FormComponent;





