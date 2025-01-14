import React, { useState } from "react";
import Logintop from "./Common/Logintop";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = ({ setUserRole }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginClick = () => {

    if (email === "deptAdmin@gmail.com" && password === "dept123") {
      setUserRole("deptadmin");
      console.log(process.env.REACT_APP_API_BASE_URL);

      navigate("/home");
    } else if (email === "superadmin@gmail.com" && password === "super123") {
      setUserRole("superadmin");
      navigate("/home");
    }else if (email === "employee1@gmail.com" && password === "employee123") {
      setUserRole("employee");
      navigate("/home");
    } else {
      setError("Incorrect email or password");
    }
  };



  return (
    <div>
      <Logintop />
      <div className="absolute sm:left-4 sm:right-4 sm:top-14 md:left-10 md:right-3 top-40 lg:left-80 lg:right-80 w-[450px] bg-gray-100 rounded-lg shadow-2xl  items-center mx-auto my-[4rem]">
        <div className="pt-3 pb-3 px-11">
          <div className="font-raleway tracking-wide pb-6 pt-3 text-center">
            <h2 className="text-lg underline-purple-500">Login</h2>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="bg-[#5252df] h-px w-full"></div>
            <p className="text-red-500">{error}</p>
            <Link
              to="/forgot"
              className="text-[#5252df] font-raleway text-base mt-5 text-right"
            >
              Forgot password?
            </Link>
            <input
              className="bg-[#5252df] border-none rounded-full shadow-lg cursor-pointer text-white font-raleway h-[42.3px] mx-auto mt-[50px] transition-all duration-200 w-[153px]"
              type="button"
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




