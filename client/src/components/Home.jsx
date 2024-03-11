import React from "react";
import {  Route, Routes,useParams } from 'react-router-dom';
import Dashboard from "../components/Widgets/Dashboard/Dashboard";
import SchemeReportDetails from "../components/Widgets/Dashboard/SchemeReports/ReportsForm";
import AgencyDetail from "../components/Widgets/Dashboard/WorkAgency/AgencyDetail";
import ReportCardForm from "../components/Widgets/Dashboard/ReportCards/ReportCardForm";
import CwpiReport from "../components/Widgets/Dashboard/ReportCards/CwpiReport"
import DeltaChangeReport from "../components/Widgets/Dashboard/ReportCards/DeltaChangeReport"

  const reportCardComponents = {
    "1": <ReportCardForm />,
    "2": <CwpiReport />,
    "3": <DeltaChangeReport />,
  };
  
  const App = () => {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/agency" element={<AgencyDetail />} />
        <Route path="/scheme-report-details" element={<SchemeReportDetails />} />
          {Object.keys(reportCardComponents).map((reportCardNumber) => (
          <Route
            key={reportCardNumber}
            path={`/report-card/${reportCardNumber}`}
            element={reportCardComponents[reportCardNumber]}
          />
        ))}
      </Routes>
    );
  };
  
  export default App;


