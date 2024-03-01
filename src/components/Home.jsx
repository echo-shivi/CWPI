import React from "react";
import Sidebar from "./Common/Sidebar";
import Dashboard from "./Widgets/Dashboard/Dashboard";
import Navbar from "./Common/Navbar";
import CWPI from "./Widgets/Dashboard/PdfReport/CwpiReport";
const Home = () => {

  return (
    <section className="flex ">
      <Sidebar />
      <div className="mx-0 text-xl w-full text-gray-900 font-semibold flex flex-col">
        <Navbar />
        <div className=" p-10">
          <CWPI />
        </div>
      </div>
    </section>
  );
};

export default Home;
