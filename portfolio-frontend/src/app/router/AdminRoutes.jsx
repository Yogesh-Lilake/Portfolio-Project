import { Routes, Route } from "react-router-dom";
import AdminLayout from "@/layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";

import Login from "@/pages/admin/Login";
import Dashboard from "@/pages/admin/Dashboard";


export default function AdminRoutes() {
  return (
    <Routes>
      {/* Public Admin */}
      <Route path="login" element={<Login />} />

      {/* Protected */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}