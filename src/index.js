import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="min-h-screen">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);

reportWebVitals();
