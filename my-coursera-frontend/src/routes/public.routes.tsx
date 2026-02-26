import PublicHomePage from "../features/public/pages/PublicHomePage";
import CourseListPage from "../features/public/pages/CourseListPage";
import CourseDetailPage from "../features/public/pages/CourseDetailPage";
import AboutPage from "../features/public/pages/AboutPage";
import PaymentResultPage from "../features/public/pages/PaymentResultPage";

export const PublicRoutes = [
    { index: true, element: <PublicHomePage /> },
    { path: "courses", element: <CourseListPage /> },
    { path: "courses/:slug", element: <CourseDetailPage /> },
    { path: "about", element: <AboutPage /> },
    { path: "payment/result", element: <PaymentResultPage /> },
];