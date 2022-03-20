import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";

import "./styles/index.css";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root"),
  window.removeLoading
);

// Usage of ipcRenderer.on
window.ipcRenderer.on("main-process-message", (_event, ...args) => {
  console.log("[Receive Main-process message]:", ...args);
});
