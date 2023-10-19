import { ReactNode } from "react";
import styles from "./ProjectSection.module.css";

function ProjectSection({ title, children }: { title: string | JSX.Element; children: ReactNode }) {
    return (
        <section className={styles.container}>
            <div className={styles.titleContainer}>
                <h3>{title}</h3>
            </div>
            <div className={styles.childrenContainer}>{children}</div>
        </section>
    );
}

export default ProjectSection;
