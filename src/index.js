import React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import package_json from "../package.json";

Sentry.init({
  dsn: process.env.REACT_APP_DSN,
  environment: process.env.REACT_APP_ENVIRONMENT,
  integrations: [new BrowserTracing()],
  release: "sentry-react@" + package_json.version,
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production

  tracesSampler: (samplingContext) => {
    // Examine provided context data (including parent decision, if any) along
    // with anything in the global namespace to compute the sample rate or
    // sampling decision for this transaction
    if (samplingContext.userId === "12312012") {
      console.log(samplingContext.userId);
      // These are important - take a big sample
      return 1;
    } else {
      // Default sample rate
      return 0;
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
