// ============================================================================
// src/pages/Bootstrap.jsx
// SyncWare SaaS
// Business Bootstrap Page
// ============================================================================

import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

import bootstrapSession from "../auth/BootstrapSession";

const API_BASE_URL =
  import.meta.env.VITE_API_PROD_URL ||
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:5000/api";

const Bootstrap = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const bootstrap = async () => {
      try {
        // ==========================================================
        // Read bootstrap payload
        // ==========================================================

        const encodedSession = searchParams.get("session");

        if (!encodedSession) {
          console.error("[Bootstrap] Missing session.");
          navigate("/auth/login", { replace: true });
          return;
        }

        // ==========================================================
        // Decode & validate
        // ==========================================================

        const result = bootstrapSession(encodedSession);

        if (!result.success) {
          console.error(result.message);
          navigate("/auth/login", { replace: true });
          return;
        }

        const { accessToken, businessId } = result.session;
        localStorage.setItem("access_token", accessToken);
        console.log("[Bootstrap] Creating backend session...");

        // ==========================================================
        // Backend creates HttpOnly cookie
        // ==========================================================

        await axios.post(
          `${API_BASE_URL}/auth/bootstrap`,
          {
            businessId,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
          },
        );

        console.log("[Bootstrap] Backend session established.");

        // ==========================================================
        // Redirect into application
        // ==========================================================

        navigate("/dashboard", {
          replace: true,
        });
      } catch (err) {
        console.error("[Bootstrap]", err);

        navigate("/auth/login", {
          replace: true,
        });
      }
    };

    bootstrap();
  }, [navigate, searchParams]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "sans-serif",
        gap: 16,
      }}
    >
      <h2>Signing you in...</h2>

      <p>Please wait while we prepare your workspace.</p>
    </div>
  );
};

export default Bootstrap;
