import React from "react";
import { createRoot } from "react-dom/client";
import Countries from "./app.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Countries />
  </React.StrictMode>
);
