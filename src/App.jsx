import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import LinkRestaurant from "./components/LinkRestaurant";
import Profile from "./components/Profile";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Menu from "./components/Menu";

const root=ReactDom.createRoot(document.querySelector("#root"));
const menu=lazy(import("./components/Menu"));

const App=()=>{
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
const Routes=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/id/:id",
                element:<LinkRestaurant/>
            },
            {
                path:"/profile",
                element:<Profile/>
            },
            {
                path:"/menu",
                element:<Suspense><Menu/></Suspense>
            }
        ]
    }
]);
root.render(<RouterProvider router={Routes}/>)