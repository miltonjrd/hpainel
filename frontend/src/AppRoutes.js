// dependencies
import { Route, Routes, useLocation } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Login from './pages/Login';

// subpages
import BudgetRequest from "./pages/BudgetRequest";
import Templates from "./pages/Templates";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="budgets" element={<BudgetRequest />} />
          <Route path="templates" element={<Templates />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default AppRoutes;