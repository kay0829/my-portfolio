import { Link } from "react-router-dom";

import IconGithub from "@assets/icon-github.png";
import IconVelog from "@assets/icon-velog.png";
// import myImg from "@assets/my-img.jpeg";
import MainImg from "@assets/main-img.png";
import MainImg2 from "@assets/main-img2.jpeg";
import MainImg3 from "@assets/main-img3.png";
import { MdPhoneAndroid } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

import styles from "./Main.module.css";

const SubGuidMsg = ({ subGuideMsg }: { subGuideMsg: string }) => {
    return (
        <div className={styles.subGuideMsgContainer}>
            {subGuideMsg.split("\n").map((v, i) => (
                <span key={i + v}>{v}</span>
            ))}
        </div>
    );
};

function Main() {
    return (
        <main className={styles.container}>
            <section className={styles.defaultInfoContainer}>
                <div>
                    <h1 className={styles.name}>임정렬</h1>

                    <h2 className={styles.position}>WEB FRONTEND DEVELOPER</h2>
                </div>

                <ol className={styles.myInfoContainer}>
                    <a href="tel:010-9363-9884">
                        <li>
                            <MdPhoneAndroid size="1.5rem" />
                        </li>
                        <SubGuidMsg subGuideMsg="010-9363-9884" />
                    </a>

                    <a href="mailto:jay9884@naver.com">
                        <li>
                            <AiOutlineMail size="1.5rem" />
                        </li>
                        <SubGuidMsg subGuideMsg="jay9884@naver.com" />
                    </a>
                    <a href="https://github.com/kay0829" target="_blank">
                        <li>
                            <img src={IconGithub} alt="" />
                        </li>
                        <SubGuidMsg subGuideMsg="github" />
                    </a>
                    <a href="https://velog.io/@kay_" target="_blank">
                        <li>
                            <img src={IconVelog} alt="" />
                        </li>
                        <SubGuidMsg subGuideMsg="velog" />
                    </a>
                </ol>
            </section>

            <section className={styles.textContainer}>
                <p>
                    안녕하세요. <span className={styles.pointText}>“정열을 만나면 열정이 솟는다!”</span> 프론트엔드
                    개발자 임정렬입니다.
                </p>
                <br />
                {/* <p>취창업연계센터에서 게임 만들기 동아리에 참여하여 개발을 처음 접하게 되었고,</p>
                <p>입력에 따라 의도한대로 동작하는 모습을 즉각적으로 눈으로 볼 수 있다는 매력에 반하게 되었습니다.</p>
                <br />
                <p>또한 구현한 클리커 게임을 다른 분들이 즐기는 모습을 보며 느꼈던 뿌듯한 감정은</p>
                <p>
                    "내가 참여하여 만든 서비스를 사용자가 즐길 수 있다면 정말 행복하겠다"라는 생각으로 이어져 개발자라는
                    꿈을 꾸게해주었습니다.
                </p> */}
                <br />
                <p>
                    <span className={styles.pointText}>1년 6개월의 실무 경험</span>과 프론트엔드 개발자로서 깊이를
                    다지고자 참여한 6개월 간의 개발 교육을 지나
                </p>
                <p>
                    <span className={styles.pointText}>
                        서로의 성장에 시너지를 주고받을 수 있는, 함께 하고 싶은 개발자 동료
                    </span>
                    를 목표로 달려가고 있습니다.
                </p>
                <br />
                <p>
                    👉🏻
                    <Link to="/resume">
                        <span className={styles.linkText}>Resume</span>
                    </Link>
                    : 개발과 관련한 이력 사항을 기술하였습니다.
                </p>
                <p>
                    👉🏻
                    <Link to="/portfolio">
                        <span className={styles.linkText}>Portfolio</span>
                    </Link>
                    : 지금까지 진행한 개발 프로젝트 내용을 담았습니다.
                </p>
            </section>

            <section className={styles.imgContainer}>
                {/* <img src={myImg} alt="" className={styles.mainImg} /> */}
                <img src={MainImg} alt="" className={styles.mainImg} />
                <img src={MainImg2} alt="" className={styles.mainImg} />
                <img src={MainImg3} alt="" className={styles.mainImg} />
            </section>
        </main>
    );
}

export default Main;
