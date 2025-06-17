import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export const ROUTER = createBrowserRouter([
    {
        path: "",
        element: <MainLayout/>,
        children:[
            {
                path: "",
                element: <About/>
            },
            {
                path: "/experience",
                element: <Experience/>
            },
            {
                path: "/projects",
                element: <Projects/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
        ]
    }
])