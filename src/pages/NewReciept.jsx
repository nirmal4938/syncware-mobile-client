// client/src/pages/NewReceipt.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createReceipt } from "../api/receiptApi";

const initialState = {
  type: "SELL",

  customerName: "",

  customerPhone: "",

  brand: "",

  deviceModel: "",

  imei1: "",

  imei2: "",

  amount: "",
};

export default function NewReceipt() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,

      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,

      [name]: "",
    }));
  };

  const validate = () => {
    const err = {};

    if (!formData.customerName.trim()) {
      err.customerName = "Customer name is required";
    }

    if (!formData.deviceModel.trim()) {
      err.deviceModel = "Device model is required";
    }

    if (!formData.imei1.trim()) {
      err.imei1 = "IMEI1 is required";
    } else if (formData.imei1.length !== 15) {
      err.imei1 = "IMEI should be 15 digits";
    }

    if (
      formData.imei2 &&
      formData.imei2.length > 0 &&
      formData.imei2.length !== 15
    ) {
      err.imei2 = "IMEI2 should be 15 digits";
    }

    if (!formData.amount) {
      err.amount = "Amount required";
    } else if (Number(formData.amount) <= 0) {
      err.amount = "Amount should be greater than 0";
    }

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");

    if (!validate()) return;

    try {
      setLoading(true);

      const res = await createReceipt({
        ...formData,

        amount: Number(formData.amount),
      });

      setSuccess(`Receipt ${res.data.data.receiptNo} created successfully`);

      setFormData(initialState);

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      console.log(err);

      alert(err?.response?.data?.message || "Failed to save receipt");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "700px",

        margin: "40px auto",

        padding: "25px",

        border: "1px solid #ddd",

        borderRadius: "12px",
      }}
    >
      <h1>SyncWare Mobile</h1>

      <h2>Create New Receipt</h2>

      {success && (
        <div
          style={{
            background: "#e8fff1",

            padding: "12px",

            marginBottom: "20px",

            borderRadius: "8px",
          }}
        >
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <h3>Transaction Type</h3>

        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="BUY">BUY</option>

          <option value="SELL">SELL</option>
        </select>

        <h3>Customer Details</h3>

        <input
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
        />

        <div style={{ color: "red" }}>{errors.customerName}</div>

        <br />

        <input
          name="customerPhone"
          placeholder="Phone"
          value={formData.customerPhone}
          onChange={handleChange}
        />

        <h3>Device Details</h3>

        <input
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
        />

        <br />

        <input
          name="deviceModel"
          placeholder="Device Model"
          value={formData.deviceModel}
          onChange={handleChange}
        />

        <div style={{ color: "red" }}>{errors.deviceModel}</div>

        <br />

        <input
          name="imei1"
          placeholder="IMEI 1"
          value={formData.imei1}
          onChange={handleChange}
        />

        <div style={{ color: "red" }}>{errors.imei1}</div>

        <br />

        <input
          name="imei2"
          placeholder="IMEI 2"
          value={formData.imei2}
          onChange={handleChange}
        />

        <div style={{ color: "red" }}>{errors.imei2}</div>

        <h3>Transaction Details</h3>

        <input
          name="amount"
          type="number"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
        />

        <div style={{ color: "red" }}>{errors.amount}</div>

        <br />

        <br />

        <button disabled={loading}>
          {loading ? "SAVING..." : "SAVE RECEIPT"}
        </button>
      </form>
    </div>
  );
}
