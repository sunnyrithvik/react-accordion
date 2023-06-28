import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App";
import App2 from "./App2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App2 />
  </StrictMode>
);
