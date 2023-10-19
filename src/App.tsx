import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Intro from "@container/intro/Intro";
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
    const [isIntro, setIsIntro] = useState(true);
    // const { isScrollTop } = useScroll();

    useEffect(() => {
        if (isIntro) {
            setTimeout(() => {
                setIsIntro(false);
            }, 2300);
        }
    }, [isIntro]);

    return (
        <>
            {isIntro && <Intro />}
        </>
    );
}

export default App;
