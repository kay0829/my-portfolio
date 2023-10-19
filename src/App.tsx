import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Intro from "@container/intro/Intro";
import Layout from "@component/Layout";
import Main from "@container/main/Main";
import styles from "./App.module.css";

// import { useScroll } from "@hook/useScroll";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
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
            <div className={styles.mainContainer}>{!isIntro && <RouterProvider router={router} />}</div>
        </>
    );
}

export default App;
