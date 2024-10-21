import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import "./styles/reset.css";
import "./styles/defaults.css";
import "./styles/helpers.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App className="bg-background" />
  </BrowserRouter>
);
