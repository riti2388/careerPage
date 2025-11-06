import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Career } from "./screens/Career";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Career />
  </StrictMode>,
);
