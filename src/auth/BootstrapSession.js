// ============================================================================
// src/auth/BootstrapSession.js
// SyncWare SaaS
// Bootstrap Session Helper
// ============================================================================

/**
 * Validates and decodes bootstrap session.
 *
 * Receives:
 * {
 *   accessToken,
 *   businessId,
 *   timestamp
 * }
 *
 * Returns:
 * {
 *   success,
 *   session
 * }
 */

export const bootstrapSession = (encodedSession) => {
  try {
    if (!encodedSession) {
      return {
        success: false,
        message: "Missing bootstrap session.",
      };
    }

    // -----------------------------------------------------------------------
    // Decode Base64
    // -----------------------------------------------------------------------

    const session = JSON.parse(atob(encodedSession));

    console.log("[Bootstrap] Decoded Session:", session);

    // -----------------------------------------------------------------------
    // Validation
    // -----------------------------------------------------------------------

    if (!session.accessToken) {
      return {
        success: false,
        message: "Missing access token.",
      };
    }

    if (!session.businessId) {
      return {
        success: false,
        message: "Missing business id.",
      };
    }

    if (!session.timestamp) {
      return {
        success: false,
        message: "Missing timestamp.",
      };
    }

    // -----------------------------------------------------------------------
    // Bootstrap URL expires after 5 minutes
    // -----------------------------------------------------------------------

    const TTL = 5 * 60 * 1000;

    if (Date.now() - session.timestamp > TTL) {
      return {
        success: false,
        message: "Bootstrap session expired.",
      };
    }

    return {
      success: true,
      session,
    };
  } catch (err) {
    console.error("[Bootstrap]", err);

    return {
      success: false,
      message: "Invalid bootstrap session.",
    };
  }
};

/**
 * Placeholder for tomorrow.
 * Backend will own the session lifecycle.
 */
export const destroyBootstrapSession = () => {
  // No-op
};

export default bootstrapSession;
