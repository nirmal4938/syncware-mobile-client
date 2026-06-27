// ============================================================================
// src/ProtectedAppBootstrap.jsx
// SyncWare SaaS
// Protected Application Bootstrap
// ============================================================================

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL =
  import.meta.env.VITE_API_PROD_URL ||
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:5000/api";

export default function ProtectedAppBootstrap({ children }) {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      try {
        console.log("[Protected] Validating session...");

        // ==========================================================
        // Backend validates HttpOnly session cookie
        // ==========================================================
        const accessToken = localStorage.getItem("access_token");
        const res = await axios.get(`${API_BASE_URL}/auth/me`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true, // optional for refresh only
        });

        const context = res.data;

        console.log("[Protected] User Context:", context);

        // Cache tenant context for UI usage
        localStorage.setItem("tenant_context", JSON.stringify(context));

        setLoading(false);
      } catch (err) {
        console.error("[Protected]", err);

        localStorage.removeItem("tenant_context");

        navigate("/auth/login", {
          replace: true,
        });
      }
    };

    init();
  }, [navigate]);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontFamily: "sans-serif",
          gap: 12,
        }}
      >
        <h3>Loading...</h3>
        <p>Validating your session...</p>
      </div>
    );
  }

  return children;
}
