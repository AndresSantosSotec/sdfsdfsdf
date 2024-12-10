import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RealTimeDashboard from "./components/RealTimeDashboard";
import HistoricalDashboard from "./components/HistoricalDashboard";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RealTimeDashboard />} />
        <Route path="/historical" element={<HistoricalDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
