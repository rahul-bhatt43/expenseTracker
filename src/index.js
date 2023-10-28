import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeContext } from "./context/ThemeContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeContext>
      <App />
    </ThemeContext>
  </StrictMode>
);
