import StudentDashboardPage from "../features/student/pages/StudentDashboardPage";
import MyCoursesPage from "../features/student/pages/MyCoursesPage";
import LearningPage from "../features/student/pages/LearningPage";
import WishlistPage from "../features/student/pages/WishlistPage";
import CertificatesPage from "../features/student/pages/CertificatesPage";
import NotificationsPage from "../features/student/pages/NotificationsPage";
import ProfilePage from "../features/shared/pages/ProfilePage";

export const StudentRoutes = [
    { index: true, element: <StudentDashboardPage /> },
    { path: "courses", element: <MyCoursesPage /> },
    { path: "courses/:courseId/learn", element: <LearningPage /> },
    { path: "wishlist", element: <WishlistPage /> },
    { path: "certificates", element: <CertificatesPage /> },
    { path: "notifications", element: <NotificationsPage /> },
    { path: "profile", element: <ProfilePage /> },
];

