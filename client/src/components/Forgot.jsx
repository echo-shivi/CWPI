import React from "react";
import Logintop from "./Common/Logintop";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/");
  };

  return (
    <div>
    <Logintop />
      <div className="bg-gray-100 rounded-lg shadow-2xl h-[490px] mx-auto my-[4rem] w-[450px] mt-[-38rem]">
        <div className="pt-3 pb-3 px-11">
          <div className="font-raleway tracking-wide pb-6 pt-3 text-center">
            <h2>Forgot Password</h2>
            <div className="bg-[#5252df] h-0.5 mx-auto w-[89px]"></div>
          </div>
          <div className="flex flex-col justify-start">
            <label htmlFor="user-email" className="pt-7">
              &nbsp;Email
            </label>
            <input
              id="user-email"
              className="bg-gray-100 border-none focus:outline-none pt-3.5 text-base"
              type="email"
              name="email"
              autoComplete="on"
              required
            />
            <div className="bg-[#5252df] h-px w-full"></div>
            <div className="flex">
              <input
                className="bg-[#5252df] border-none rounded-full shadow-lg cursor-pointer text-white font-raleway h-[42.3px] mx-auto mt-[50px] transition-all duration-200 w-[153px]"
                type="submit"
                name="submit"
                value="RESET"
              />

              <button
                className="bg-[#5252df] border-none rounded-full shadow-lg cursor-pointer text-white font-raleway h-[42.3px] mx-auto mt-[50px] transition-all duration-200 w-[153px]"
                type="submit"
                name="submit"
                onClick={handleLoginClick}
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
