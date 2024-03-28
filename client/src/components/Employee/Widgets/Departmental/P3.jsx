import React, { useState } from "react";
import Table from "./Table";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Updatedatedate() {
  const [formData, setFormData] = useState({
    selectscheme: "",
    agreementamount: "",
    cumulative: "",
  });
  const [progress, setProgress] = useState(0);
  const [startDate, setStartDate] = useState(null); // Define startDate state
  const [endDate, setEndDate] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Update progress
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
    <>
      <form onSubmit={onSubmitHandler} className="mx-auto m-12 px-10">
        <h1 className="font-normal mt-3 mb-5 text-left text-lg"></h1>

        <div className="mt-10 mb-4">
          <label htmlFor="selectscheme" className="block text-gray-700 text-base font-normal mb-2">
            Select Scheme
          </label>
          <select
            className="w-full p-3 font-normal bg-white border border-blue-200 text-sm rounded"
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

        <div className="flex flex-wrap w-full ">
          <div className="mb-4 w-full ">
            <label htmlFor="cumulative" className="block text-gray-700 text-base font-normal mb-2">
              Date of Completion As Per Work Commencement
            </label>
            <DatePicker
              placeholderText="DD/MM/YYYY"
              dateFormat="dd/MM/yyyy"
              id="start-date"
              autoComplete="off"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              wrapperClassName="w-full"
              className="px-4 py-4 w-full border border-blue-200 rounded-lg text-sm text-gray-700 font-normal "
            />
          </div>

          <div className="mb-4 w-full  ">
            <label htmlFor="cumulative" className="block text-gray-700 text-base font-normal mb-2">
              Actual Date of Completion
            </label>
            <DatePicker
              placeholderText="DD/MM/YYYY"
              dateFormat="dd/MM/yyyy"
              id="end-date"
              autoComplete="off"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              wrapperClassName="w-full"
              className="px-5 py-4 w-full border border-blue-200 rounded-lg text-sm text-gray-700 font-normal"
            />
          </div>
        </div>

        <div className="mb-4">
          <button className="btn-blue text-white font-medium rounded" type="submit">
            Update
          </button>
        </div>
      </form>
      <Table />
    </>
  );
}

export default Updatedatedate;
