import React from "react";

export default function Unauthorized() {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>403 - Unauthorized Access</h1>
      <p>You must login through Syncware Core to access this app.</p>
    </div>
  );
}
