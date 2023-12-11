import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import components
// import GetStarted from "./views/GetStarted/GetStarted";
import NotFound from "./components/NotFound";
// import CreateAccount from "./views/CreateAccount/CreateAccount";
import PlanToUse from "./views/plantouse/PlanToUse";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlanToUse />} />
        <Route component={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
