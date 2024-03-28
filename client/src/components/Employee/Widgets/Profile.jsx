import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
const FormComponent = () => {
    const [department, setDepartment] = useState('jjklllllll');
    const [designation, setDesignation] = useState('kjmnjj');
    const [username, setUsername] = useState('shreya');
    const [mobile, setMobile] = useState('nhhhh');
    const [whatsapp, setWhatsapp] = useState('jjjjj8');
    const [email, setEmail] = useState('hhhhh');
    const [password, setPassword] = useState('hhhhh8');
    const [confirmPassword, setConfirmPassword] = useState('');
    const defaultAvatarUrl = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ';
    const [avatar, setAvatar] = useState(defaultAvatarUrl);

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="bg-white p-6 px-4">
            <div className="grid gap-2 p-4 text-sm grid-cols-1">
                <div className="p-2">
                    <div className="mx-auto relative w-32 h-32 border-4 border-white rounded-full overflow-hidden">
                        <img className="object-cover object-center h-32" src={avatar} alt='User Avatar' />
                        <div className="absolute top-20 left-20 flex items-center justify-center">
                            <label htmlFor="avatar" className="text-white bg-gray-500 rounded-full p-2 cursor-pointer">
                                <FaEdit />
                                <input
                                    id="avatar"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleAvatarChange}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="grid gap-4 gap-y-2 pt-6 text-sm grid-cols-1 lg:grid-cols-2">
                        <div className="">

                            <label htmlFor="department">Department</label>
                            <input type="text" name="department" id="department" className={`h-10 border mt-1 rounded px-4 w-full bg-gray-100`} value={department} disabled />
                        </div>
                        <div className="">
                            <label htmlFor="designation">Designation</label>
                            <input type="text" name="designation" id="designation" className={`h-10 border mt-1 rounded px-4 w-full bg-gray-100`} value={designation} disabled />
                        </div>

                        <div className="">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" className="h-10 border mt-1 rounded px-4 w-full bg-white" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="">
                            <label htmlFor="email">Email Address</label>
                            <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-white" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@domain.com" />
                        </div>
                        <div className="">
                            <label htmlFor="mobile">Mobile</label>
                            <input type="text" name="mobile" id="mobile" className="h-10 border mt-1 rounded px-4 w-full bg-white" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                        </div>

                        <div className="">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input type="text" name="whatsapp" id="whatsapp" className="h-10 border mt-1 rounded px-4 w-full bg-white" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
                        </div>



                        <div className="">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="h-10 border mt-1 rounded px-4 w-full bg-white" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" className="h-10 border mt-1 rounded px-4 w-full bg-white" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>


                    </div>
                    <div className='mt-5 flex justify-center items-center w-full'>
                        <button className="btn-blue rounded-lg w-full">Save</button>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default FormComponent;





