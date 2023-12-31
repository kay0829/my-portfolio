import { useNavigate } from "react-router-dom";

import StackItem from "./StackItem";
import styles from "./ProjectItem.module.css";

interface IProps {
    explanationImg?: string;
    iconImg?: string;
    date: string;

    route: string;

    title: string;
    stack: string[];
    myPart: string;
}

function ProjectItem({ project }: { project: IProps }) {
    const navigate = useNavigate();

    const { title, stack, explanationImg, iconImg, myPart, date, route } = project;
    return (
        <section className={styles.container} onClick={() => navigate(`/portfolio/${route}`)}>
            {iconImg && (
                <>
                    {explanationImg ? (
                        <img src={explanationImg} alt="" className={styles.explationImg} />
                    ) : (
                        <div style={{ height: "150px" }}></div>
                    )}
                </>
            )}
            <div className={styles.descriptionContainer}>
                <div className={styles.titleContainer}>
                    {iconImg && <img src={iconImg} alt="" className={styles.iconImg} />}
                    <p className={styles.title}>{title}</p>
                </div>

                <p className={styles.date}>{date}</p>
                <span className={styles.myPart}>담당: {myPart}</span>
            </div>

            <ol className={styles.stackContainer}>
                {stack.map((v) => (
                    <StackItem stack={v} key={v} />
                ))}
            </ol>
        </section>
    );
}

export default ProjectItem;
