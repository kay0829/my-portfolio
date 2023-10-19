import styles from "./StackItem.module.css";

function StackItem({ stack }: { stack: string }) {
    return (
        <li className={styles.stackItem}>
            <span>{stack}</span>
        </li>
    );
}

export default StackItem;
