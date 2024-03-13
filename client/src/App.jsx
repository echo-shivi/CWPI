import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "../src/Admin";
import Login from "./components/Login";
import Forgot from "./components/Forgot";
import AgencyAnalytics from "./components/Widgets/Dashboard/AgencyAnalytics";
import AgencyDetail from "./components/Widgets/Dashboard/WorkAgency/AgencyDetail";
import SchemeReportDetails from "./components/Widgets/Dashboard/SchemeReports/ReportsForm";
import ReportCardDetails from "./components/Widgets/Dashboard/ReportCards/ReportCardForm";
import CwpiReport from "./components/Widgets/Dashboard/PdfReport/CwpiReport";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/home" element={<Admin />} />
      <Route path="/AgencyAnalytics" element={<AgencyAnalytics />} />
      <Route path="/agency" element={<AgencyDetail />} />
      <Route path="/scheme-report-details" element={<SchemeReportDetails />} />
      <Route path="/report-card-details" element={<ReportCardDetails />} />
      <Route path="/report-card-details2" element={<CwpiReport />} />
    </Routes>
  );
};

export default App;
