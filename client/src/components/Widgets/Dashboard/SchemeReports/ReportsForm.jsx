import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ReportsForm() {
    const [formData, setFormData] = useState({
        selectAgency: '',
        selectFormat: '',
        selectedDate: null, // Initialize selectedDate as null for the DatePicker
    });

    const onChangeHandler = (event) => {
        if (event.target.name === 'occupation') {
            setFormData((prevData) => ({
                ...prevData,
                selectAgency: event.target.value,
            }));
        } else if (event.target.name === 'designation') {
            setFormData((prevData) => ({
                ...prevData,
                selectFormat: event.target.value,
            }));
        }
    };

    const handleDateChange = (date) => {
        setFormData((prevData) => ({
            ...prevData,
            selectedDate: date,
        }));
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={onSubmitHandler} className="mx-auto m-12 px-10">
            <h1 className="text-2xl font-medium  text-gray-900 mb-6">Select Option</h1>
            <div className="mb-4">
                <label htmlFor="occupation" className="block text-gray-700 text-base font-normal mb-2">
                    Name of the Agency
                </label>
                <select
                    className="w-full p-5 font-normal bg-white border border-blue-200 text-sm rounded"
                    name="occupation"
                    onChange={onChangeHandler}
                    value={formData.selectAgency}
                >
                    <option value="student" >Agency 1</option>
                    <option value="employee" >Agency 2</option>
                    <option value="other" >Other</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="designation" className="block text-gray-700 text-base font-normal mb-2">
                    Select Format
                </label>
                <select
                    className="w-full p-5 font-normal bg-white text-sm text-gray-700 border border-blue-200 rounded"
                    name="designation"
                    onChange={onChangeHandler}
                    value={formData.selectFormat}
                >
                    <option value="intern">Designation 1</option>
                    <option value="permanent">Designation 2</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="selectedDate" className="block text-gray-700 text-base font-normal mb-2">
                    Select Date
                </label>
                <DatePicker
                    placeholderText="DD/MM/YYYY"
                    dateFormat="dd/MM/yyyy"
                    id="start-date"
                    autoComplete="off"
                    selected={formData.selectedDate}
                    onChange={handleDateChange}
                    className='p-5 w-full border border-blue-200 text-sm text-gray-700 font-normal rounded'

                />
            </div>
            <div className="mb-4">
                <button className="btn-blue w-full text-white font-medium rounded" type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default ReportsForm;
