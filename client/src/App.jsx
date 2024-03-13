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
import SchemeDetails from "./components/Widgets/Schemes/SchemeDetails";
import Stagewise from "./components/Widgets/Dashboard/StagewiseGraphs/Stagewise"
import StageAnalysisGraphs from "./components/Widgets/Dashboard/StagewiseGraphs/StageAnalysisGraphs";
import EmployeeView from "./components/Widgets/Schemes/EmployeeView";
import DropDownMenu from "./components/Widgets/Dashboard/DropdownMenu";
import ReactTable from "./components/Widgets/Dashboard/PdfReport/ReactTable";
import DropDownIcon from "./components/Widgets/Dashboard/DropDownicon";
import SuperAdmin from "./components/Widgets/Dashboard/SuperAdmin";

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
      <Route path="/stageanalysisgraphs" element={<StageAnalysisGraphs />} />
      <Route path="/scheme-details" element={<SchemeDetails />} />
      <Route path="/stagewise" element={<Stagewise />} />
      <Route path="/employeeview" element={<EmployeeView />} />
      <Route path="/pdfreport" element={<DropDownMenu />} />
      <Route path="/masterentry" element={<ReactTable />} />
      <Route path="/analytics" element={<DropDownIcon />} />
      <Route path="/super-admin" element={<SuperAdmin />} />
    </Routes>
  );
};

export default App;
