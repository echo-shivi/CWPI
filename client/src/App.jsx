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
import WithEmployeeLayout from "./components/Layouts/WithEmployeeLayout";
import WithDeptAdminLayout from "./components/Layouts/WithDeptAdminLayout";
import DeptAdminDashboard from "./components/DeptAdmin/Widgets/Dashboard/Dashboard";
import EmployeeEntry from './components/DeptAdmin/Widgets/Employee/EmployeeEntry';
import RegisterEntry from './components/DeptAdmin/Widgets/RegisterMasterScheme/RegisterEntry';
import MasterEntryDeptAdmin from './components/DeptAdmin/Widgets/MasterEntry/MasterEntryDeptAdmin';
import Scheme from './components/DeptAdmin/Widgets/SchemesDeptAdmin/SchemeDetails';
import Analytics from "./components/DeptAdmin/Widgets/AgencywiseAnalytics/AgencywiseAnalytics"
import Help from "./components/DeptAdmin/Atom/Cardhelp"
import EHelp from "./components/Employee/Widgets/Help/Help"
import EmployeeDashboard from "./components/Employee/Widgets/Dashboard/Dashboard"
import UserProfileForm from './components/Employee/Widgets/Profile';
import ContactUs from './components/Employee/Widgets/Help/Contact/ContactUs';
import ConventionalP1 from './components/Employee/Widgets/Dashboard/Conventional/ConventionalP1'
import ConventionalP2 from './components/Employee/Widgets/Dashboard/Conventional/ConventionalP2'
import ConventionalP3 from './components/Employee/Widgets/Dashboard/Conventional/ConventionalP3'
import ConventionalP4 from './components/Employee/Widgets/Dashboard/Conventional/ConventionalP4'
import ConventionalP5 from './components/Employee/Widgets/Dashboard/Conventional/ConventionalP5'
import ConventionalP6 from './components/Employee/Widgets/Dashboard/Conventional/ConventionalP6'
import Dept1 from "./components/Employee/Widgets/Departmental/P1";
import Dept2 from "./components/Employee/Widgets/Departmental/P2";
import Dept3 from "./components/Employee/Widgets/Departmental/P3";
import Dept4 from "./components/Employee/Widgets/Departmental/P4";
import Epc1 from "./components/Employee/Widgets/Epc/P1";
import Epc2 from "./components/Employee/Widgets/Epc/P2";
import Epc3 from "./components/Employee/Widgets/Epc/P3";
import Epc4 from "./components/Employee/Widgets/Epc/P4";
import Epc5 from "./components/Employee/Widgets/Epc/P5";
import Epc6 from "./components/Employee/Widgets/Epc/P6";
import ABD1 from "./components/Employee/Widgets/Dashboard/Adb/P1"
import ABD2 from "./components/Employee/Widgets/Dashboard/Adb/P2"
import ABD3 from "./components/Employee/Widgets/Dashboard/Adb/P3"
import ABD4 from "./components/Employee/Widgets/Dashboard/Adb/P4"
import ABD5 from "./components/Employee/Widgets/Dashboard/Adb/P5"
import ABD6 from "./components/Employee/Widgets/Dashboard/Adb/P6"
import ABD7 from "./components/Employee/Widgets/Dashboard/Adb/P7"


const reportCardComponents = {
  "1": <ReportCardForm />,
  "2": <CwpiReport />,
  "3": <DeltaChangeReport />,
  "4": <CwpiRankingBottom />,
  "5": <DeltaCwpiRankingBottom />,
  "6": <CwpiRankingTop />,
  "7": <DeltaCwpiRankingTop />
};
const conventionalComponents = {
  "1": <ConventionalP1 />,
  "2": <ConventionalP2 />,
  "3": <ConventionalP3 />,
  "4": <ConventionalP4 />,
  "5": <ConventionalP5 />,
  "6": <ConventionalP6 />,
};
const epcComponents = {
  "1": <Epc1 />,
  "2": <Epc2 />,
  "3": <Epc3 />,
  "4": <Epc4 />,
  "5": <Epc5 />,
  "6": <Epc6 />,
};
const departmentalComponents = {
  "1": <Dept1 />,
  "2": <Dept2 />,
  "3": <Dept3 />,
  "4": <Dept4 />
};
const abdComponents = {
  "1": <ABD1 />,
  "2": <ABD2 />,
  "3": <ABD3 />,
  "4": <ABD4 />,
  "5": <ABD5 />,
  "6": <ABD6 />,
  "7": <ABD7 />,
};

const App = () => {

  const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || "");

  const setUserRoleHandler = (role) => {
    setUserRole(role);
    localStorage.setItem("userRole", role);

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
            <Route path="/employee-entry" element={<WithDeptAdminLayout><EmployeeEntry /></WithDeptAdminLayout>} />
            <Route path="/register-entry" element={<WithDeptAdminLayout><RegisterEntry /></WithDeptAdminLayout>} />
            <Route path="/master-entry" element={<WithDeptAdminLayout><MasterEntryDeptAdmin /></WithDeptAdminLayout>} />
            <Route path="/schemes" element={<WithDeptAdminLayout><Scheme /></WithDeptAdminLayout>} />
            <Route path="/analytics" element={<WithDeptAdminLayout><Analytics /></WithDeptAdminLayout>} />
            <Route path="/help" element={<WithDeptAdminLayout><Help /></WithDeptAdminLayout>} />
            {Object.entries(reportCardComponents).map(([reportCardNumber, component]) => (
              <Route
                key={reportCardNumber}
                path={`/report-card/${reportCardNumber}`}
                element={<WithDeptAdminLayout>{component}</WithDeptAdminLayout>}
              />
            ))}
          </>
        )}
        {userRole === 'employee' && (
          <>
            <Route path='/home' element={<WithEmployeeLayout><EmployeeDashboard /></WithEmployeeLayout>} />
            <Route path='/profile' element={<WithEmployeeLayout><UserProfileForm /></WithEmployeeLayout>} />

            <Route path="/ehelp" element={<WithEmployeeLayout><EHelp /></WithEmployeeLayout>} />

            <Route path="/contact" element={<WithEmployeeLayout><ContactUs /></WithEmployeeLayout>} />
            <Route path="/deptP1" element={<WithEmployeeLayout><Dept1 /></WithEmployeeLayout>} />
            <Route path="/deptP2" element={<WithEmployeeLayout><Dept2 /></WithEmployeeLayout>} />
            <Route path="/deptP3" element={<WithEmployeeLayout><Dept3 /></WithEmployeeLayout>} />
            <Route path="/deptP4" element={<WithEmployeeLayout><Dept4 /></WithEmployeeLayout>} />
            <Route path='/conventionalP1' element={<WithEmployeeLayout><SchemeReportDetails /></WithEmployeeLayout>} />

            {Object.entries(conventionalComponents).map(([conventionalComponents, component]) => (
              <Route
                key={conventionalComponents}
                path={`/conventional/P${conventionalComponents}`}
                element={<WithEmployeeLayout>{component}</WithEmployeeLayout>}
              />
            ))}
            {Object.entries(epcComponents).map(([epcComponents, component]) => (
              <Route
                key={epcComponents}
                path={`/epc/P${epcComponents}`}
                element={<WithEmployeeLayout>{component}</WithEmployeeLayout>}
              />
            ))}
            {Object.entries(departmentalComponents).map(([departmentalComponents, component]) => (
              <Route
                key={departmentalComponents}
                path={`/departmental/P${departmentalComponents}`}
                element={<WithEmployeeLayout>{component}</WithEmployeeLayout>}
              />
            ))}
              {Object.entries(abdComponents).map(([abdComponents, component]) => (
              <Route
                key={abdComponents}
                path={`/abd/P${abdComponents}`}
                element={<WithEmployeeLayout>{component}</WithEmployeeLayout>}
              />
            ))}
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;




