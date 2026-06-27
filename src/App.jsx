import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLanding from "./pages/Public/PublicLanding";
import Services from "./pages/Public/Services";
import TrackRepair from "./pages/Public/TrackRepair";

import Login from "./pages/Auth/Login";
import Bootstrap from "./pages/Bootstrap";

import Dashboard from "./pages/Dashboard/Dashboard";
import Inventory from "./pages/Inventory/Inventory";
import Repairs from "./pages/Repairs/Repairs";
import Customers from "./pages/Customers/Customers";

import Unauthorized from "./pages/Error/Unauthorized";

import ProtectedAppBootstrap from "./ProtectedAppBootstrap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ===================== */}
        {/* PUBLIC */}
        {/* ===================== */}

        <Route path="/bootstrap" element={<Bootstrap />} />

        <Route path="/" element={<PublicLanding />} />

        <Route path="/services" element={<Services />} />

        <Route path="/track-repair" element={<TrackRepair />} />

        <Route path="/auth/login" element={<Login />} />

        {/* ===================== */}
        {/* PROTECTED */}
        {/* ===================== */}

        <Route
          path="/dashboard"
          element={
            <ProtectedAppBootstrap>
              <Dashboard />
            </ProtectedAppBootstrap>
          }
        />

        <Route
          path="/inventory"
          element={
            <ProtectedAppBootstrap>
              <Inventory />
            </ProtectedAppBootstrap>
          }
        />

        <Route
          path="/repairs"
          element={
            <ProtectedAppBootstrap>
              <Repairs />
            </ProtectedAppBootstrap>
          }
        />

        <Route
          path="/customers"
          element={
            <ProtectedAppBootstrap>
              <Customers />
            </ProtectedAppBootstrap>
          }
        />

        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
