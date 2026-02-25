import { createBrowserRouter, Navigate } from "react-router";
import { Certifications } from "./pages/Certifications";


export const appRouter = createBrowserRouter([
    {
        path: '/certificaciones',
        element: <Certifications />
    },
    {
        path:'*',
        element: <Navigate to={'/'} />
    }
])