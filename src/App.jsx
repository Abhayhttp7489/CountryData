import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { AppLayout } from "./components/Layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    {
        path: "/country",
        element: <Country />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App