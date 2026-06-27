// ============================================================================
// src/services/auth.service.js
// SyncWare SaaS
// Authentication Service
// TODAY'S VERSION
// Reads JWT from HttpOnly cookie via /auth/me
// ============================================================================

import axios from "axios";

const API_BASE =
  import.meta.env.VITE_API_PROD_URL ||
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:5000/api";

class AuthService {
  /**
   * Validate current cookie session
   */
  async me() {
    try {
      const accessToken = localStorage.getItem("access_token");
      const res = await axios.get(`${API_BASE_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true, // optional for refresh only
      });
      return res.data;
    } catch (err) {
      return null;
    }
  }

  /**
   * Check authentication
   */
  async isAuthenticated() {
    const user = await this.me();
    return !!user;
  }

  /**
   * Logout
   */
  async logout() {
    try {
      await axios.post(
        `${API_BASE}/auth/logout`,
        {},
        {
          withCredentials: true,
        },
      );
    } catch (e) {
      // ignore
    }

    window.location.replace("/auth/login");
  }

  /**
   * Bootstrap helper
   */
  async bootstrap() {
    const user = await this.me();

    return {
      success: !!user,
      user,
    };
  }
}

export default new AuthService();
