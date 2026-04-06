import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./AdminRoutes";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/*" element={<PublicRoutes />} />
                {/* Admin Routes */}
                <Route path="/admin/*" element={<PrivateRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}