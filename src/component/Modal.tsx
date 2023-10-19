import { ReactNode } from "react";
import styles from "./Modal.module.css";

function Modal({ closeModal, children }: { closeModal: () => void; children: ReactNode }) {
    return (
        <div onClick={closeModal} className={styles.background}>
            <div onClick={(e) => e.stopPropagation()} className={styles.container}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
