import React from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";

const Home = () => {

  return (
    <section className="flex ">
      <Sidebar />
      <div className="mx-0 text-xl w-full text-gray-900 font-semibold flex flex-col">
        <Navbar />
        <div className=" p-10">
        <Dashboard />

        </div>
      </div>
    </section>
  );
};

export default Home;
