import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Common/Navbar";
import Sidebar from "./components/Common/Sidebar";
const App = () => {
  return (
    <section className="flex bg-blue-100 ">
      <Sidebar />
      <div className="mx-0 text-xl w-full text-gray-900 font-semibold flex flex-col">
        <Navbar />
        <div className="px-10 py-2">
          <Home />
        </div>
      </div>
    </section>
  );
};

export default App;
