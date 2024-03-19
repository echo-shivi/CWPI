import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from "./components/Login";
import Forgot from "./components/Forgot";
import AgencyAnalytics from "./components/Widgets/Dashboard/AgencyAnalytics";
import SchemeReportDetails from "./components/Widgets/Dashboard/SchemeReports/ReportsForm";
import Navbar from "./components/Common/Navbar";
import Sidebar from "./components/Common/Sidebar";
import Dashboard from "./components/Widgets/Dashboard/Dashboard";
import AgencyDetail from "./components/Widgets/Dashboard/WorkAgency/AgencyDetail";
import ReportCardForm from "./components/Widgets/Dashboard/ReportCards/ReportCardForm";
import CwpiReport from "./components/Widgets/Dashboard/ReportCards/CwpiReport"
import DeltaChangeReport from "./components/Widgets/Dashboard/ReportCards/DeltaChangeReport"
import CwpiRankingBottom from "./components/Widgets/Dashboard/ReportCards/CwpiRankingBottom/CwpiRankingSubdetail"
import CwpiRankingTop from "./components/Widgets/Dashboard/ReportCards/CwpiRankingTop/CwpiRankingSubdetail"
import DeltaCwpiRankingBottom from "./components/Widgets/Dashboard/ReportCards/DeltaCwpiRankingBottom/CwpiRankingSubdetail"
import DeltaCwpiRankingTop from "./components/Widgets/Dashboard/ReportCards/DeltaCwpiRankingTop/CwpiRankingSubdetail"
import SchemeDetails from "./components/Widgets/Schemes/SchemeDetails";
import Stagewise from "./components/Widgets/Dashboard/StagewiseGraphs/Stagewise"
import StageAnalysisGraphs from "./components/Widgets/Dashboard/StagewiseGraphs/StageAnalysisGraphs";
import EmployeeView from "./components/Widgets/Schemes/EmployeeView";
import DropDownMenu from "./components/Widgets/Dashboard/DropdownMenu";
import ReactTable from "./components/Widgets/Dashboard/PdfReport/ReactTable";
import AddAgencyAdmin from "./components/Widgets/AgencyAdmin/AddAgencyAdmin";
import AddAgencies from "./components/Widgets/Agencies/AddAgencies";
import Designation from "./components/Widgets/Designation/Designation";
import Chart  from "./components/Widgets/Schemes/Chart"


const WithLayout = ({ children }) => {
  const [open, setOpen] = useState(window.innerWidth >= 790);

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 790);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="flex bg-blue-100 relative">
    <Sidebar setOpen={setOpen} open={open} />
    <div className={`mx-0 absolute ${open ? 'left-72 w-[calc(100%_-_18rem)]' : 'left-16 w-[calc(100%_-_4rem)]'} text-xl w-full text-gray-900 font-semibold flex flex-col`}>

      <Navbar />
      <div className="p-10">{children}</div>
    </div>
  </section>
  
  );
};

const WithoutLayout = ({ children }) => <>{children}</>;

const App = () => {
  const reportCardComponents = {
    "1": <WithLayout><ReportCardForm /></WithLayout>,
    "2": <WithLayout><CwpiReport /></WithLayout>,
    "3": <WithLayout><DeltaChangeReport /></WithLayout>,
    "4": <WithLayout><CwpiRankingBottom /></WithLayout>,
    "5": <WithLayout><DeltaCwpiRankingBottom /></WithLayout>,
    "6": <WithLayout><CwpiRankingTop /></WithLayout>,
    "7": <WithLayout><DeltaCwpiRankingTop /></WithLayout>
  };

  const reportCardRoutes = [];
  for (const reportCardNumber in reportCardComponents) {
    reportCardRoutes.push(
      <Route
        key={reportCardNumber}
        path={`/report-card/${reportCardNumber}`}
        element={reportCardComponents[reportCardNumber]}
      />
    );
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<WithoutLayout><Login /></WithoutLayout>} />
        <Route path='/forgot' element={<WithoutLayout><Forgot /></WithoutLayout>} />
        <Route path='/home' element={<WithLayout><Dashboard /></WithLayout>} />
        <Route path='/add-agencies' element={<WithLayout><AddAgencies /></WithLayout>} />
        <Route path="/employees" element={<WithLayout><AddAgencyAdmin /></WithLayout>} />
        <Route path='/designation' element={<WithLayout><Designation /></WithLayout>} />
        <Route path='/AgencyAnalytics' element={<WithLayout><AgencyAnalytics /></WithLayout>} />
        {/* <Route path='/agency/:departmentName' element={<WithLayout><AgencyDetail /></WithLayout>} /> */}
        <Route path='/agency' element={<WithLayout><AgencyDetail /></WithLayout>} />
        <Route path="/scheme-details" element={<WithLayout><SchemeDetails /></WithLayout>} />
        <Route path="/stagewise" element={<WithLayout><Stagewise /></WithLayout>} />
        <Route path="/employeeview" element={<WithLayout><EmployeeView /></WithLayout>} />
        <Route path="/pdfreport" element={<WithLayout><DropDownMenu /></WithLayout>} />
        <Route path="/masterentry" element={<WithLayout><ReactTable /></WithLayout>} />
        <Route path="/stageanalysisgraphs" element={<WithLayout><StageAnalysisGraphs /></WithLayout>} />
        <Route path='/scheme-report-details' element={<WithLayout><SchemeReportDetails /></WithLayout>} />
        <Route path='/view-graph-button' element={<WithLayout><Chart /></WithLayout>} />
        {reportCardRoutes}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
};

export default App;



