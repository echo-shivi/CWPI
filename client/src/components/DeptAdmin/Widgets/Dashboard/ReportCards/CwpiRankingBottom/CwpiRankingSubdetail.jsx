import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import Bottom1 from './BottomP1';
import Bottom2 from './BottomP2';
import Bottom3 from './BottomP3';
import Bottom4 from './BottomP4';
import Bottom5 from './BottomP5';
import Bottom6 from './BottomP6';

export default function CwpiRankingSubdetail() {
    const [formData, setFormData] = useState({ selectedDate: null });

    const handleSubmit = () => {
        // Handle submit logic here
        console.log("Form submitted");
    };

    const handleDateChange = (date) => {
        setFormData({ selectedDate: date });
    };

    return (
        <div>
            <h1 className='text-center mb-5 font-normal'>CWPI Ranking Bottom</h1>
            <div className='container mt-3 mb-5 rounded flex justify-start align-items center'>
                <DatePicker
                    placeholderText="DD/MM/YYYY"
                    dateFormat="dd/MM/yyyy"
                    id="start-date"
                    autoComplete="off"
                    selected={formData.selectedDate}
                    onChange={handleDateChange}
                    className="p-5 w-full border border-blue-200 text-sm text-gray-700 font-normal rounded mr-3"
                />
                <button onClick={handleSubmit} className="ml-3 btn-blue p-2 flex text-white font-medium rounded">
                    Submit
                </button>
            </div>
            <Bottom1 />
            <hr style={{ borderTop: "1px solid lightgrey" }} />
            <Bottom2 />
            <hr style={{ borderTop: "1px solid lightgrey" }} /> 
            <Bottom3 />
            <hr style={{ borderTop: "1px solid lightgrey" }} /> 
            <Bottom4 />
            <hr style={{ borderTop: "1px solid lightgrey" }} />
            <Bottom5 />
            <hr style={{ borderTop: "1px solid lightgrey" }} /> 
            <Bottom6 />
        </div>
    );
}
