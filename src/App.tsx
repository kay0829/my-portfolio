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
import CozShopping from "@container/coz/CozShopping";
// import Calendar from "@container/calendar/Calendar";
import HtmlParsing from "@container/htmlParsing/HtmlParsing";
import Ohouse from "@container/ohouse/Ohouse";
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
            {
                path: "/portfolio/cozshopping",
                element: <CozShopping />,
            },
            // {
            //     path: "/portfolio/calendar",
            //     element: <Calendar />,
            // },
            {
                path: "/portfolio/html-parsing",
                element: <HtmlParsing />,
            },
            {
                path: "/portfolio/ohouse",
                element: <Ohouse />,
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
            {!isIntro && <div className={styles.background}></div>}
            <div className={styles.mainContainer}>{!isIntro && <RouterProvider router={router} />}</div>
        </>
    );
}

export default App;
