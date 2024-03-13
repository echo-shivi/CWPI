import React from "react";
import {  Route, Routes } from 'react-router-dom';
import Dashboard from "../components/Widgets/Dashboard/Dashboard";
import SchemeReportDetails from "../components/Widgets/Dashboard/SchemeReports/ReportsForm";
import AgencyDetail from "../components/Widgets/Dashboard/WorkAgency/AgencyDetail";
import ReportCardForm from "../components/Widgets/Dashboard/ReportCards/ReportCardForm";
import CwpiReport from "../components/Widgets/Dashboard/ReportCards/CwpiReport"
import DeltaChangeReport from "../components/Widgets/Dashboard/ReportCards/DeltaChangeReport"
import CwpiRankingBottom from "../components/Widgets/Dashboard/ReportCards/CwpiRankingBottom/CwpiRankingSubdetail"
import CwpiRankingTop from "../components/Widgets/Dashboard/ReportCards/CwpiRankingTop/CwpiRankingSubdetail"
import DeltaCwpiRankingBottom from "../components/Widgets/Dashboard/ReportCards/DeltaCwpiRankingBottom/CwpiRankingSubdetail"
import DeltaCwpiRankingTop from "../components/Widgets/Dashboard/ReportCards/DeltaCwpiRankingTop/CwpiRankingSubdetail"
  const reportCardComponents = {
    "1": <ReportCardForm />,
    "2": <CwpiReport />,
    "3": <DeltaChangeReport />,
    "4": <CwpiRankingBottom />,
    "5":<DeltaCwpiRankingBottom />,
    "6":<CwpiRankingTop />,
    "7":<DeltaCwpiRankingTop />

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


