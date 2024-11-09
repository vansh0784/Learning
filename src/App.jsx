import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import LinkRestaurant from "./components/LinkRestaurant";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import Login from "./components/login";

// Lazy loading the Body component
const Body = lazy(() => import("./components/Body"));

const root = ReactDom.createRoot(document.querySelector("#root"));

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/id/:id",
        element: <LinkRestaurant />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

root.render(<RouterProvider router={Routes} />);
