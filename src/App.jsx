import React, { useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
// import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { Route,Routes } from "react-router-dom";

const root=ReactDom.createRoot(document.querySelector("#root"));

const App=()=>{
    return(
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Body/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
            <Footer/>
        </>
    )
}
// const Routes=createBrowserRouter([
//     {
//         path:"/",
//         element:<App/>,
//         errorElement:<Error/>,
//         children:[
//             {
//                 path:"/about",
//                 element:<About/>
//             },
//             {
//                 path:"/",
//                 element:<Body/>
//             },
//             {
//                 path:"/contact",
//                 element:<Contact/>
//             }
//         ]
//     }
// ]);
root.render(<App/>);