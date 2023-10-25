import TextContainer from "@component/TextContainer";
// import StackItem from "@component/StackItem";

import styles from "./WindowXp.module.css";
import IconWindowXp from "@assets/icon-html.png";

function Calendar() {
    return (
        <main className={styles.container}>
            <img src={IconWindowXp} alt="" className={styles.iconImg} />
            <h1>윈도우 XP 웹으로 구현해보기</h1>
            <div className={styles.textContainer}>
                <p>vanilla로 useEffect, useState 구현해보고 동작원리 학습</p>
            </div>

            <TextContainer title="💻 개발 내용">
                <h3></h3>
                <p></p>
                <br />
                <strong>도입 계기</strong>
                <ul>
                    <li>
                        <p></p>
                    </li>
                </ul>
                <strong>작업 내용</strong>
                <ul>
                    <li>
                        <p></p>
                    </li>
                </ul>
                <strong>작업 결과</strong>
                <ul>
                    <li>
                        <p></p>
                    </li>
                </ul>
            </TextContainer>
            <TextContainer title="📈 성장 경험">
                <strong></strong>
                <ul>
                    <li>
                        <p></p>
                    </li>
                </ul>
            </TextContainer>
        </main>
    );
}

export default Calendar;
