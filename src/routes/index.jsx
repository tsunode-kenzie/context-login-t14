import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";

export const RoutesMain = () => (
    <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
        </Route>
    </Routes>
)
