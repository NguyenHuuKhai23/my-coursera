import PublicHomePage from "../features/public/pages/PublicHomePage.js";

export const PublicRoutes = [
    {index: true, element: <PublicHomePage/>},
    {path: "courses", element: <></>},
    {path: "instructors", element: <></>},
    {path: "about", element: <></>},
    {path: "forgot-password", element: <></>},
];