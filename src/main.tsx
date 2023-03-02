import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.scss";
import { Reset } from "styled-reset";
import './i18n';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>
);
