import { createBrowserRouter, Navigate } from "react-router-dom";
import { PublicRoutes } from "./public.routes";
import { AdminRoutes } from "./admin.routes";
import AdminLayout from "../components/layout/AdminLayout";
import PublicLayout from "../components/layout/PublicLayout";
import LoginPage from "../features/public/pages/LoginPage";
import SignupPage from "../features/public/pages/SignupPage";
import ForgotPasswordPage from "../features/public/pages/ForgotPasswordPage";

export const routes = createBrowserRouter([
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/forgot-password", element: <ForgotPasswordPage /> },
    {
        path: "/",
        element: <PublicLayout />,
        children: PublicRoutes,
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: AdminRoutes,
    },
    {
        path: "*",
        element: <Navigate to="/" replace />,
    },
]);
