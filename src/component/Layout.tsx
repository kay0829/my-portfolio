import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Gnb from "./Gnb";
import styles from "./Layout.module.css";

function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={styles.container}>
            <Gnb />

            <Outlet />
        </div>
    );
}

export default Layout;
