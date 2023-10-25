import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Gnb.module.css";

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
    { label: "Home", route: "/", isSelected: true },
    { label: "Resume", route: "/resume", isSelected: false },
    { label: "Portfolio", route: "/portfolio", isSelected: false },
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
            v.route === pathname ? { ...v, isSelected: true } : { ...v, isSelected: false },
        );
        setItems(temp);
    }, [pathname]);

    return (
        <nav className={styles.container}>
            <ol className={styles.navItemContainer}>
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
