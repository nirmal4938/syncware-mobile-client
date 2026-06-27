// client/src/api/receiptApi.js

import axios from "axios";

const API = axios.create({
  baseURL: "https://api.mobile.syncware.fun/api",

  headers: {
    "Content-Type": "application/json",
  },
});

// Create Receipt

export const createReceipt = (data) => {
  return API.post(
    "/receipts",

    data,
  );
};

// Get All Receipts

export const getReceipts = () => {
  return API.get("/receipts");
};

// Get Single Receipt

export const getReceiptById = (id) => {
  return API.get(`/receipts/${id}`);
};

// Download PDF (Day 3)

export const downloadReceiptPdf = (id) => {
  return API.get(
    `/receipts/${id}/pdf`,

    {
      responseType: "blob",
    },
  );
};
