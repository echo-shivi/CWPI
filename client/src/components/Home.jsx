import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "../components/Widgets/Dashboard/Dashboard";
import SchemeReportDetails from "../components/Widgets/Dashboard/SchemeReports/ReportsForm";
import AgencyDetail from "../components/Widgets/Dashboard/WorkAgency/AgencyDetail";
import ReportCardDetails from "../components/Widgets/Dashboard/ReportCards/ReportCardForm";
import CwpiReport from "../components/Widgets/Dashboard/PdfReport/CwpiReport"
import SchemeDetails from "./Widgets/Schemes/SchemeDetails";
import Stagewise from "./Widgets/Dashboard/StagewiseGrahphs/Stagewise"
import StageAnalysisGraphs from "./Widgets/Dashboard/StagewiseGrahphs/StageAnalysisGraphs";
import EmployeeView from "./Widgets/Schemes/EmployeeView";
import DropDownMenu from "./Widgets/Dashboard/DropdownMenu"
const App = () => {
  return (
 
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/agency" element={<AgencyDetail />} />
        <Route path="/scheme-report-details" element={<SchemeReportDetails />} />
        <Route path="/report-card-details" element={<ReportCardDetails />} />
        <Route path="/report-card-details2" element={<CwpiReport />} />
        <Route path="/scheme-details" element={<SchemeDetails/>} />
        <Route path="/stagewise" element={<Stagewise/>} />
        <Route path="/employeeview" element={<EmployeeView/>} />
        <Route path="/stageanalysisgraphs" element={<StageAnalysisGraphs/>} />
        <Route path="/pdfreport" element={<DropDownMenu/>} />
        {/* <Route path="/masterentry" element={</>} */}
      </Routes>

  );
};

export default App;


