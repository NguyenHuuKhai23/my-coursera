import AdminDashboardPage from "../features/admin/pages/AdminDashboardPage";
import AdminCoursesPage from "../features/admin/pages/AdminCoursesPage";
import AdminUsersPage from "../features/admin/pages/AdminUsersPage";
import AdminCategoriesPage from "../features/admin/pages/AdminCategoriesPage";
import NotificationsPage from "../features/student/pages/NotificationsPage";

export const AdminRoutes = [
    { index: true, element: <AdminDashboardPage /> },
    { path: "courses", element: <AdminCoursesPage /> },
    { path: "users", element: <AdminUsersPage /> },
    { path: "categories", element: <AdminCategoriesPage /> },
    { path: "notifications", element: <NotificationsPage /> },
];