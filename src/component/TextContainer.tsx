import { ReactNode } from "react";
import styles from "./TextContainer.module.css";

function TextContainer({ title, children }: { title: string | JSX.Element; children: ReactNode }) {
    return (
        <section>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.childrenContainer}>{children}</div>
        </section>
    );
}

export default TextContainer;
