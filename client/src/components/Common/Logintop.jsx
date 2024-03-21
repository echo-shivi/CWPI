import React from "react";
import BvmLogo from "../../assets/bvm-logo.png";
import BiharLogo from "../../assets/government-of-bihar-logo.png";
import backgroundImage from "../../assets/background.jpeg";

const Logintop = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center h-screen w-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex  justify-between mx-8 pt-6">
        <img src={BvmLogo} alt="BVM Logo" className="max-w-full h-[8rem]" />
        <img
          src={BiharLogo}
          alt="Government of Bihar Logo"
          className="max-w-full h-[8rem]"
        />
      </div>
    </div>
  );
};

export default Logintop;
