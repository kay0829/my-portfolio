import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "@component/Layout";
import styles from "./App.module.css";

// import { useScroll } from "@hook/useScroll";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
        ],
    },
]);

function App() {

    return (
        <>
        </>
    );
}

export default App;
