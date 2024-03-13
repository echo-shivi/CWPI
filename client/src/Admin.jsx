import React from "react";
import Navbar from "./components/Common/Navbar";
import Sidebar from "./components/Common/Sidebar";
import DeptAdminSidebar from "./components/Common/DeptAdminSidebar";
import Dashboard from "./components/Widgets/Dashboard/Dashboard";

const Admin = () => {
  return (
    <section className="flex bg-blue-100">
      <Sidebar />
      <div className="mx-0 text-xl w-full text-gray-900 font-semibold flex flex-col">
        <Navbar />
        <div className=" p-10">
          <Dashboard />
        </div>
      </div>
    </section>

    // <section className="flex bg-blue-100">
    //   <DeptAdminSidebar />
    //   <div className="mx-0 text-xl w-full text-gray-900 font-semibold flex flex-col">
    //     <Navbar />
    //     <div className=" p-10">
    //     <Dashboard />
    //     </div>
    //   </div>
    // </section>
  );
};

export default Admin;
