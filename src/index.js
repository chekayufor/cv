import ReactDOM from "react-dom";
import React from "react";
import App from "../src/components/App";
import { CVProvider } from "../src/components/CV.context";

ReactDOM.render(
  <CVProvider>
    <App />
  </CVProvider>,
  document.getElementById("root")
);
