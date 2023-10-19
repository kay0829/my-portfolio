import bgStyle from "./IntroBg.module.css";
import textStyle from "./IntroText.module.css";

function Intro() {
    return (
        <section className={bgStyle.section}>
            <div className={bgStyle.container}>
                <div className={textStyle.textContainer}>
                    <span className={textStyle.pointText}>정열</span>
                    <span>을</span>

                    <span>만나면</span>

                    <span className={textStyle.pointText}>열정</span>
                    <span>이</span>

                    <span>솟는다!</span>
                </div>
            </div>
        </section>
    );
}

export default Intro;
