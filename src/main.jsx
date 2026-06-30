import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "katex/dist/katex.min.css";
import "./styles.css";
import App from "./App.jsx";
import { fetchAiStatus } from "./utils/aiApiClient";
import { getDeviceId } from "./utils/deviceId";

getDeviceId();
fetchAiStatus();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
