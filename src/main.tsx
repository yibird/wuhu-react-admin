import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "uno.css";
import "@/styles/index.css";
import "remixicon/fonts/remixicon.css";

const el = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(el).render(<App />);
