import React, { useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const root=ReactDom.createRoot(document.querySelector("#root"));

const App=()=>{
    return(
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}

root.render(<App/>);