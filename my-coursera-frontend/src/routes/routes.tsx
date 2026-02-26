import { createBrowserRouter, Navigate } from "react-router-dom";
import { PublicRoutes } from "./public.routes";
import { AdminRoutes } from "./admin.routes";
import { StudentRoutes } from "./student.routes";
import { InstructorRoutes } from "./instructor.routes";
import AdminLayout from "../components/layout/AdminLayout";
import PublicLayout from "../components/layout/PublicLayout";
import StudentLayout from "../components/layout/StudentLayout";
import InstructorLayout from "../components/layout/InstructorLayout";
import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";
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
        element: (
            <ProtectedRoute>
                <RoleRoute roles={["ADMIN"]}>
                    <AdminLayout />
                </RoleRoute>
            </ProtectedRoute>
        ),
        children: AdminRoutes,
    },
    {
        path: "/student",
        element: (
            <ProtectedRoute>
                <RoleRoute roles={["STUDENT"]}>
                    <StudentLayout />
                </RoleRoute>
            </ProtectedRoute>
        ),
        children: StudentRoutes,
    },
    {
        path: "/instructor",
        element: (
            <ProtectedRoute>
                <RoleRoute roles={["INSTRUCTOR"]}>
                    <InstructorLayout />
                </RoleRoute>
            </ProtectedRoute>
        ),
        children: InstructorRoutes,
    },
    {
        path: "*",
        element: <Navigate to="/" replace />,
    },
]);
