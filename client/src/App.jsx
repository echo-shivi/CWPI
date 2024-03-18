import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom';
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

const WithLayout = ({ children }) => (
  <section className="flex bg-blue-100">
    <Sidebar />
    <div className="mx-0 text-xl w-full text-gray-900 font-semibold flex flex-col">
      <Navbar />
      <div className="p-10">{children}</div>
    </div>
  </section>
);

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
        <Route path='/home' element={<WithLayout><Dashboard /></WithLayout>} />
        <Route path='/' element={<WithoutLayout><Login /></WithoutLayout>} />
        <Route path='/forgot' element={<WithoutLayout><Forgot /></WithoutLayout>} />
        <Route path='/AgencyAnalytics' element={<WithLayout><AgencyAnalytics /></WithLayout>} />
        <Route path='/agency' element={<WithLayout><AgencyDetail /></WithLayout>} />
        <Route path='/scheme-report-details' element={<WithLayout><SchemeReportDetails /></WithLayout>} />
        {reportCardRoutes}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
};

export default App;


