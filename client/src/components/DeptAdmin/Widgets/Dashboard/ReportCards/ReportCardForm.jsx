import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaArrowRight } from 'react-icons/fa';

const ReportsForm = () => {
    const [formData, setFormData] = useState({
        selectAgency: '',
        selectedDate: null,
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
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
            <div className="mb-4">
                <label htmlFor="occupation" className="block text-gray-700 text-base font-normal mb-2">
                    Select Agency
                </label>
                <select
                    className="w-full p-5 font-normal bg-white border border-blue-200 text-sm rounded"
                    name="selectAgency"
                    onChange={onChangeHandler}
                    value={formData.selectAgency}
                >
                    <option value="student">Agency 1</option>
                    <option value="employee">Agency 2</option>
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
                    className="px-5 py-4 w-full border border-blue-200 text-sm text-gray-700 font-normal rounded"
                />
            </div>
            <div className="mb-4">
                <button  className="btn-blue flex text-white font-medium rounded" type="submit">
                    Go <FaArrowRight className='mt-1.5 ml-1 text-lg' />
                </button>
            </div>
        </form>
    );
};

export default ReportsForm;
