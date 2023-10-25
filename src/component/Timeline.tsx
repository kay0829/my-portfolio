import styles from "./Timeline.module.css";

const years = Array.from({ length: 8 }, (_, i) => i + 16);

const Year = ({ year }: { year: number }) => {
    return <div className={styles.eachItem}>{year}</div>;
};

function Timeline() {
    return (
        <div className={styles.container}>
            <ol className={styles.headContainer}>
                <li></li>
                <li>학력</li>
                <li>경력</li>
                <li>활동</li>
            </ol>
            <div className={styles.contentContainer}>
                <div className={styles.yearContainer}>
                    {years.map((v) => (
                        <Year year={v} key={v} />
                    ))}
                </div>
                <div className={styles.rowContainer}>
                    <div
                        className={styles.eachItem}
                        style={{
                            backgroundColor: "var(--blue-900)",
                            width: "calc(100% / 8 * 7)",
                            color: "var(--white)",
                        }}
                    >
                        한국외국어대학교
                        <br />
                        (중앙아시아학과)
                    </div>
                </div>
                <div className={styles.rowContainer}>
                    <div className={styles.eachItem} style={{ width: "calc(100% / 8 * 5.2)" }}></div>
                    <div
                        className={styles.eachItem}
                        style={{
                            backgroundColor: "var(--blue-700)",
                            width: "calc(100% / 8 * 1.5)",
                            color: "var(--white)",
                            minWidth: "43px",
                        }}
                    >
                        LFin 개발팀
                    </div>
                </div>
                <div className={styles.rowContainer}>
                    <div className={styles.eachItem} style={{ width: "calc(100% / 8 * 4.2)" }}></div>
                    <div
                        className={styles.eachItem}
                        style={{
                            backgroundColor: "var(--blue-600)",
                            width: "calc(100% / 8)",
                            color: "var(--white)",
                            minWidth: "53px",
                        }}
                    >
                        제주더큰
                        <br />
                        내일센터
                    </div>
                    <div className={styles.eachItem} style={{ width: "calc(100% / 8 * 2)" }}></div>
                    <div
                        className={styles.eachItem}
                        style={{
                            backgroundColor: "var(--blue-500)",
                            width: "calc(100% / 8 * 0.5)",
                            color: "var(--white)",
                            minWidth: "53px",
                        }}
                    >
                        코드
                        <br />
                        스테이츠
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
