// dependencies
import { useRef } from "react";

//components
import BudgetRequest from "./pages/BudgetRequest";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import './style.scss';

const App = () => {

  return (
    <div className="d-flex h-100">
      <Sidebar />
      <div className="d-flex flex-column" style={{ flex: 1 }}>
        <Header />
        <main className="p-3" style={{ flex: 1, overflowY: 'scroll' }}>
          <BudgetRequest />
        </main>
      </div>
    </div>
  );
};

export default App;
