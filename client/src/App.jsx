import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Forgot from "./components/Forgot";
import AgencyAnalytics from "./components/DeptAdmin/Widgets/AgencyAnalytics";
import SchemeReportDetails from "./components/Widgets/Dashboard/SchemeReports/ReportsForm";
import Dashboard from "./components/Widgets/Dashboard/Dashboard";
import AgencyDetail from "./components/Widgets/Dashboard/WorkAgency/AgencyDetail";
import ReportCardForm from "./components/Widgets/Dashboard/ReportCards/ReportCardForm";
import CwpiReport from "./components/Widgets/Dashboard/ReportCards/CwpiReport";
import DeltaChangeReport from "./components/Widgets/Dashboard/ReportCards/DeltaChangeReport";
import CwpiRankingBottom from "./components/Widgets/Dashboard/ReportCards/CwpiRankingBottom/CwpiRankingSubdetail";
import CwpiRankingTop from "./components/Widgets/Dashboard/ReportCards/CwpiRankingTop/CwpiRankingSubdetail";
import DeltaCwpiRankingBottom from "./components/Widgets/Dashboard/ReportCards/DeltaCwpiRankingBottom/CwpiRankingSubdetail";
import DeltaCwpiRankingTop from "./components/Widgets/Dashboard/ReportCards/DeltaCwpiRankingTop/CwpiRankingSubdetail";
import SchemeDetails from "./components/Widgets/Schemes/SchemeDetails";
import Stagewise from "./components/Widgets/Dashboard/StagewiseGraphs/Stagewise";
import StageAnalysisGraphs from "./components/Widgets/Dashboard/StagewiseGraphs/StageAnalysisGraphs";
import EmployeeView from "./components/Widgets/Schemes/EmployeeView";
import DropDownMenu from "./components/Widgets/Dashboard/DropdownMenu";
import AddAgencyAdmin from "./components/Widgets/AgencyAdmin/AddAgencyAdmin";
import AddAgencies from "./components/Widgets/Agencies/AddAgencies";
import Designation from "./components/Widgets/Designation/Designation";
import MasterEntry from './components/Widgets/Dashboard/PdfReport/MasterEntry';
import Chart from "./components/Widgets/Schemes/Chart";
import WithSuperAdminLayout from "./components/Layouts/WithSuperAdminLayout";
import WithDeptAdminLayout from "./components/Layouts/WithDeptAdminLayout";
import WithoutLayout from "./components/Layouts/WithoutLayouts";
import DeptAdminDashboard from "./components/DeptAdmin/Widgets/Dashboard/Dashboard";


const reportCardComponents = {
  "1": <ReportCardForm />,
  "2": <CwpiReport />,
  "3": <DeltaChangeReport />,
  "4": <CwpiRankingBottom />,
  "5": <DeltaCwpiRankingBottom />,
  "6": <CwpiRankingTop />,
  "7": <DeltaCwpiRankingTop />
};

const App = () => {
  const storedRole = localStorage.getItem("userRole");
  const [userRole, setUserRole] = useState(storedRole === "deptadmin" || storedRole === "superadmin" ? storedRole : null);

  const setUserRoleHandler = (role) => {
    setUserRole(localStorage.setItem("role", role));
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login setUserRole={setUserRoleHandler} />} />
        <Route path='/forgot' element={<Forgot />} />

        {userRole === 'superadmin' && (
          <>
            <Route path='/home' element={<WithSuperAdminLayout><Dashboard /></WithSuperAdminLayout>} />
            <Route path='/add-agencies' element={<WithSuperAdminLayout><AddAgencies /></WithSuperAdminLayout>} />
            <Route path="/employees" element={<WithSuperAdminLayout><AddAgencyAdmin /></WithSuperAdminLayout>} />
            <Route path='/designation' element={<WithSuperAdminLayout><Designation /></WithSuperAdminLayout>} />
            <Route path='/agency' element={<WithSuperAdminLayout><AgencyDetail /></WithSuperAdminLayout>} />
            <Route path="/scheme-details" element={<WithSuperAdminLayout><SchemeDetails /></WithSuperAdminLayout>} />
            <Route path="/stagewise" element={<WithSuperAdminLayout><Stagewise /></WithSuperAdminLayout>} />
            <Route path="/employeeview" element={<WithSuperAdminLayout><EmployeeView /></WithSuperAdminLayout>} />
            <Route path="/pdfreport" element={<WithSuperAdminLayout><DropDownMenu /></WithSuperAdminLayout>} />
            <Route path="/masterentry" element={<WithSuperAdminLayout><MasterEntry /></WithSuperAdminLayout>} />
            <Route path="/stageanalysisgraphs" element={<WithSuperAdminLayout><StageAnalysisGraphs /></WithSuperAdminLayout>} />
            <Route path='/scheme-report-details' element={<WithSuperAdminLayout><SchemeReportDetails /></WithSuperAdminLayout>} />
            <Route path="/view-graph-button" element={<WithSuperAdminLayout><Chart /></WithSuperAdminLayout>} />
            {Object.entries(reportCardComponents).map(([reportCardNumber, component]) => (
              <Route
                key={reportCardNumber}
                path={`/report-card/${reportCardNumber}`}
                element={<WithSuperAdminLayout>{component}</WithSuperAdminLayout>}
              />
            ))}
          </>
        )}

        {userRole === 'deptadmin' && (
          <>
            <Route path='/home' element={<WithDeptAdminLayout><DeptAdminDashboard /></WithDeptAdminLayout>} />
            <Route path='/add-agencies' element={<WithDeptAdminLayout><AddAgencies /></WithDeptAdminLayout>} />
            <Route path="/employees" element={<WithDeptAdminLayout><AddAgencyAdmin /></WithDeptAdminLayout>} />
            <Route path='/designation' element={<WithDeptAdminLayout><Designation /></WithDeptAdminLayout>} />
            <Route path='/AgencyAnalytics' element={<WithDeptAdminLayout><AgencyAnalytics /></WithDeptAdminLayout>} />
            <Route path='/agency' element={<WithDeptAdminLayout><AgencyDetail /></WithDeptAdminLayout>} />
            <Route path="/scheme-details" element={<WithDeptAdminLayout><SchemeDetails /></WithDeptAdminLayout>} />
            <Route path="/stagewise" element={<WithDeptAdminLayout><Stagewise /></WithDeptAdminLayout>} />
            <Route path="/employeeview" element={<WithDeptAdminLayout><EmployeeView /></WithDeptAdminLayout>} />
            <Route path="/pdfreport" element={<WithDeptAdminLayout><DropDownMenu /></WithDeptAdminLayout>} />
            <Route path="/masterentry" element={<WithDeptAdminLayout><MasterEntry /></WithDeptAdminLayout>} />
            <Route path="/stageanalysisgraphs" element={<WithDeptAdminLayout><StageAnalysisGraphs /></WithDeptAdminLayout>} />
            <Route path='/scheme-report-details' element={<WithDeptAdminLayout><SchemeReportDetails /></WithDeptAdminLayout>} />
            <Route path="/view-graph-button" element={<WithDeptAdminLayout><Chart /></WithDeptAdminLayout>} />
            {Object.entries(reportCardComponents).map(([reportCardNumber, component]) => (
              <Route
                key={reportCardNumber}
                path={`/report-card/${reportCardNumber}`}
                element={<WithDeptAdminLayout>{component}</WithDeptAdminLayout>}
              />
            ))}
          </>
        )}

      </Routes>
    </Router>
  );
};

export default App;




