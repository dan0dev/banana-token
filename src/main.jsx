import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import SmoothScrolling from "./utils/SmoothScrolling.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothScrolling>
      <App />
    </SmoothScrolling>
  </StrictMode>
);
