import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
// import NewReceipt from "./pages/NewReceipt";
// import ReceiptView from "./pages/ReceiptView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        {/* <Route path="/new" element={<NewReceipt />} /> */}

        {/* <Route path="/receipt/:id" element={<ReceiptView />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
