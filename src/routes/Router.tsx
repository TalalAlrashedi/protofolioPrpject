import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import AboutSection from "../components/sections/AboutSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";
import Layout from "../components/common/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutSection /> },
      { path: "/projects", element: <ProjectsSection /> },
      { path: "/contact", element: <ContactSection /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
