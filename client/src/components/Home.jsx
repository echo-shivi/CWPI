import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "../components/Widgets/Dashboard/Dashboard";
import SchemeReportDetails from "../components/Widgets/Dashboard/SchemeReports/ReportsForm";
import AgencyDetail from "../components/Widgets/Dashboard/WorkAgency/AgencyDetail";
import ReportCardDetails from "../components/Widgets/Dashboard/ReportCards/ReportCardForm";
import CwpiReport from "../components/Widgets/Dashboard/PdfReport/CwpiReport"
const App = () => {
  return (
 
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/agency" element={<AgencyDetail />} />
        <Route path="/scheme-report-details" element={<SchemeReportDetails />} />
        <Route path="/report-card-details" element={<ReportCardDetails />} />
        <Route path="/report-card-details2" element={<CwpiReport />} />

      </Routes>

  );
};

export default App;


