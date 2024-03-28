import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DoubleForm = () => {
    const [formData, setFormData] = useState({
        selectscheme: "",
        agreementamount: "",
        cumulative: "",
      });
      const [progress, setProgress] = useState(0); 
    
      const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
            const fieldCount = Object.keys(formData).length;
        const filledFields = Object.values(formData).filter((value) => value !== "").length;
        const newProgress = Math.floor((filledFields / fieldCount) * 100);
        setProgress(newProgress);
      };
    
      const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formData);
      };
  return (
    <div className="grid grid-cols-1 gap-10">
    <form onSubmit={onSubmitHandler} className="ml-1">

        <div className="mt-10 mb-4">
          <label htmlFor="selectscheme" className="block text-gray-700 text-base font-normal mb-2">
            Select Scheme
          </label>
          <select
            className=" p-4 font-normal w-full bg-white border border-blue-200 text-sm rounded"
            name="selectscheme"
            onChange={onChangeHandler}
            value={formData.selectscheme}
            placeholder="Select Scheme"
            aria-placeholder="Select Scheme"
          >
            <option value="">Select Scheme</option>
            <option value="EFCCD">Enivironment, Forest & Climate Change Department (EFCCD)</option>
            <option value="agency2">Agency 2</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mt-10 mb-4">
          <label htmlFor="selectscheme" className="block text-gray-700 text-base font-normal mb-2">
            Agreement Amount(in Rs lakhs)
          </label>
          <select
            className=" p-4 font-normal w-full bg-white border border-blue-200 text-sm rounded"
            name="selectscheme"
            onChange={onChangeHandler}
            value={formData.selectscheme}
            placeholder="Select Scheme"
            aria-placeholder="Select Scheme"
          >
            <option value="">Select Scheme</option>
            <option value="EFCCD">Enivironment, Forest & Climate Change Department (EFCCD)</option>
            <option value="agency2">Agency 2</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mt-10 mb-4">
          <label htmlFor="selectscheme" className="block text-gray-700 text-base font-normal mb-2">
            Cumulative MB Booked till date(in Rs lakhs)
          </label>
          <select
            className=" p-4 font-normal w-full bg-white border border-blue-200 text-sm rounded"
            name="selectscheme"
            onChange={onChangeHandler}
            value={formData.selectscheme}
            placeholder="Select Scheme"
            aria-placeholder="Select Scheme"
          >
            <option value="">Select Scheme</option>
            <option value="EFCCD">Enivironment, Forest & Climate Change Department (EFCCD)</option>
            <option value="agency2">Agency 2</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <button className="btn-blue text-white font-medium rounded" type="submit">
            Update
          </button>
        </div>
      </form>
   
    </div>
  )
}

export default DoubleForm