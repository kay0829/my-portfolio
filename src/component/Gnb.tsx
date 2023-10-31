import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import styles from "./Gnb.module.css";
import IconLogo from "@assets/icon-logo.png";

const NavItem = ({
    label,
    route,
    isSelected,
    onClickNavItem,
}: {
    label: string;
    route: string;
    isSelected: boolean;
    onClickNavItem: (route: string) => void;
}) => {
    return (
        <li
            onClick={() => onClickNavItem(route)}
            className={`${styles.navItem} ${isSelected ? styles.isSelected : ""}`}
        >
            <p>{label}</p>
        </li>
    );
};

const navItem = [
    { label: "이력서", route: "/resume", isSelected: false },
    { label: "포트폴리오", route: "/portfolio", isSelected: false },
];

function Gnb() {
    const { pathname } = useLocation();

    const navigate = useNavigate();

    const [items, setItems] = useState(navItem);

    const onClickNavItem = (route: string) => {
        navigate(route);
    };

    useEffect(() => {
        const temp = [...navItem].map((v) =>
            pathname.includes(v.route) ? { ...v, isSelected: true } : { ...v, isSelected: false },
        );
        setItems(temp);
    }, [pathname]);

    return (
        <nav className={styles.container}>
            <ol className={styles.navItemContainer}>
                <li className={styles.homeItem} onClick={() => navigate("/")}>
                    <img src={IconLogo} alt="" />
                </li>
                {items.map((v) => (
                    <NavItem
                        label={v.label}
                        route={v.route}
                        isSelected={v.isSelected}
                        onClickNavItem={onClickNavItem}
                        key={v.label}
                    />
                ))}
            </ol>
        </nav>
    );
}

export default Gnb;
