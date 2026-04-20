import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import AppRouter from "@/app/router/AppRouter";
import { toastConfig } from "@/shared/config/toastConfig";
import "@/index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    {/* 3 dot convert object spreading into props */}
    <Toaster {...toastConfig} />

    <AppRouter />
  </React.StrictMode>
);