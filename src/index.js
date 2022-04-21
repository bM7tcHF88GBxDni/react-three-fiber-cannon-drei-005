import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";

import css from "./index.module.css";
import App from "./Components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className={css.appContainer}>
    <App />
  </div>
);
