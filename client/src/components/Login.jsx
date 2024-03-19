import React from "react";
import Logintop from "./Common/Logintop";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/home");
  };
  return (
    <div>
      <Logintop />
      <div className="bg-gray-100 rounded-lg shadow-2xl  mx-auto my-[4rem] w-[450px] mt-[-38rem]">
        <div className="pt-3 pb-3 px-11">
          <div className="font-raleway tracking-wide pb-6 pt-3 text-center">
          <h2 class="text-lg underline-purple-500">Login</h2>

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
            <label htmlFor="user-password" className="pt-12">
              &nbsp;Password
            </label>
            <input
              id="user-password"
              className="bg-gray-100 border-none focus:outline-none pt-3.5 text-base"
              type="password"
              name="password"
              required
            />
            <div className="bg-[#5252df] h-px w-full"></div>
            <Link
              to="/forgot"
              className="text-[#5252df] font-raleway text-base mt-5 text-right"
            >
              Forgot password?
            </Link>
            <input
              className="bg-[#5252df] border-none rounded-full shadow-lg cursor-pointer text-white font-raleway h-[42.3px] mx-auto mt-[50px] transition-all duration-200 w-[153px]"
              type="submit"
              name="submit"
              value="LOGIN"
              onClick={handleLoginClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
