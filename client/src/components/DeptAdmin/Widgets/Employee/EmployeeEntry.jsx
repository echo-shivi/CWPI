import React, { useState } from 'react';

function EmployeeEntry() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    occupation: '',
    designation: '',
    mobileNumber: '',
    whatsAppNumber: '',
    languages: [],
  });

  const onChangeHandler = (event) => {
    if (event.target.name === 'languages') {
      let copy = { ...formData };

      if (event.target.checked) {
        copy.languages.push(event.target.value);
      } else {
        copy.languages = copy.languages.filter((el) => el !== event.target.value);
      }

      setFormData(copy);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={onSubmitHandler} className=" mx-auto m-12 px-10  ">
        <h1 className='font-bold mt-3 mb-5 text-left text-lg'>Add Employee </h1>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 text-base font-normal mb-2">
          Employee Name
        </label>
        <input
          type="text"
          className="w-full p-3  font-normal  border border-blue-200  text-sm  rounded"
          name="username"
          onChange={onChangeHandler}
          value={formData.username}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-base font-normal mb-2">
          Email Id
        </label>
        <input
          type="email"
          className="w-full p-3  font-normal  border border-blue-200  text-sm  rounded"
          name="email"
          onChange={onChangeHandler}
          value={formData.email}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="occupation" className="block text-gray-700 text-base font-normal mb-2">
          Name of the Agency
        </label>
        <select
          className="w-full p-3  font-normal bg-white  border border-blue-200  text-sm  rounded"
          name="occupation"
          onChange={onChangeHandler}
          value={formData.occupation}
        >
          <option value="student">Agency 1</option>
          <option value="employee">Agency 2</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="designation" className="block text-gray-700 text-base font-normal mb-2">
          Designation
        </label>
        <select
          className="w-full p-3  font-normal bg-white  text-sm  text-gray-700  border border-blue-200  rounded"
          name="designation"
          onChange={onChangeHandler}
          value={formData.designation}
        >
          <option value="intern">Designation 1</option>
          <option value="permanent">Designation 2</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="mobileNumber" className="block text-gray-700  text-base font-normal mb-2">
          Mobile Number
        </label>
        <input
          type="number"
          className="w-full p-3  font-normal    bg-white text-gray-700 border border-blue-200  text-sm rounded"
          name="mobileNumber"
          onChange={onChangeHandler}
          value={formData.mobileNumber}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="WhatsappNumber" className="block text-gray-700  text-base font-normal mb-2">
          Whatsapp Number
        </label>
        <input
          type="number"
          className="w-full p-3  bg-white border text-base  border-blue-200 rounded"
          name="whatsAppNumber"
          onChange={onChangeHandler}
          value={formData.whatsAppNumber}
        />
      </div>
      <div className="mb-4">
        <button class="btn-blue text-white font-medium  rounded">
          Submit
        </button>
      </div>
    </form>
  );
}

export default EmployeeEntry;
