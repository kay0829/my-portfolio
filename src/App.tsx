import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Intro from "@container/intro/Intro";
import Layout from "@component/Layout";
import Main from "@container/main/Main";
import Resume from "@container/resume/Resume";
import Portfolio from "@container/portfolio/Portfolio";
import IMHW from "@container/imhw/IMHW";
import CashBroom from "@container/cashbroom/CashBroom";
import DevSquad from "@container/devsquad/DevSquad";
import StackOverflow from "@container/stackoverflow/StackOverflow";
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
            {
                path: "/resume",
                element: <Resume />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
            {
                path: "/portfolio/imherework",
                element: <IMHW />,
            },
            {
                path: "/portfolio/cashbroom",
                element: <CashBroom />,
            },
            {
                path: "/portfolio/devsquad",
                element: <DevSquad />,
            },
            {
                path: "/portfolio/stackoverflow",
                element: <StackOverflow />,
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
