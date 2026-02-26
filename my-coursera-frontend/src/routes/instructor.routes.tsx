import InstructorDashboardPage from "../features/instructor/pages/InstructorDashboardPage";
import InstructorCoursesPage from "../features/instructor/pages/InstructorCoursesPage";
import CourseFormPage from "../features/instructor/pages/CourseFormPage";
import CourseSectionsPage from "../features/instructor/pages/CourseSectionsPage";
import NotificationsPage from "../features/student/pages/NotificationsPage";
import ProfilePage from "../features/shared/pages/ProfilePage";

export const InstructorRoutes = [
    { index: true, element: <InstructorDashboardPage /> },
    { path: "courses", element: <InstructorCoursesPage /> },
    { path: "courses/new", element: <CourseFormPage /> },
    { path: "courses/:id/edit", element: <CourseFormPage /> },
    { path: "courses/:id/curriculum", element: <CourseSectionsPage /> },
    { path: "notifications", element: <NotificationsPage /> },
    { path: "profile", element: <ProfilePage /> },
];

