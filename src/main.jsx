import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MealProvider } from "./Contexts/MealContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MealProvider>
      <App />
    </MealProvider>
  </StrictMode>
);
