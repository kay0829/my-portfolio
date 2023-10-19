import { Link } from "react-router-dom";
import TextContainer from "@component/TextContainer";
import Timeline from "@component/Timeline";

import styles from "./Resume.module.css";

import MyImg from "@assets/my-img3.jpeg";
import StackItem from "@component/StackItem";

import { LiaExternalLinkAltSolid } from "react-icons/lia";

const programmingSkill = ["HTML", "CSS", "Javascript", "Typescript"];
const libraraySkill = [
    "React",
    "Redux",
    "Mobx",
    "recoil",
    "react query",
    "styled-component",
    "tailwindcss",
    "SASS(SCSS)",
    "Next.js",
    "storybook",
    "React Native",
    "Fastlane",
];
const serverSkill = ["MySQL", "Ruby on Rails"];
const imhwStack = ["react", "mobx", "react native", "fastlane", "redux", "styled-component", "ruby on rails", "mysql"];
const cashbroomStack = ["react", "typescript", "redux", "ruby on rails", "mysql"];
const linktalkStack = ["react native", "typescript", "redux"];

function Resume() {
    return (
        <main className={styles.container}>
            <section className={styles.defaultInfoContainer}>
                <div className={styles.imgContainer}>
                    <img src={MyImg} alt="" className={styles.mainImg} />
                </div>
                <div>
                    <h1>임정렬 | Resume</h1>

                    <ol className={styles.myInfoContainer}>
                        <a href="tel:010-9363-9884">
                            <li>
                                <span>📱 Mobile: </span>
                                <p>010-9363-9884</p>
                            </li>
                        </a>

                        <a href="mailto:jay9884@naver.com">
                            <li>
                                <span>📨 Email: </span>
                                <p>jay9884@naver.com</p>
                            </li>
                        </a>
                        <a href="https://github.com/kay0829" target="_blank">
                            <li>
                                <span>👩‍💻 Github: </span>
                                <p>kay0829</p>
                            </li>
                        </a>
                        <a href="https://velog.io/@kay_" target="_blank">
                            <li>
                                <span>🏠 Velog: </span>
                                <p>@kay_</p>
                            </li>
                        </a>
                    </ol>
                </div>
            </section>
            <TextContainer title="About Me">
                <p>
                    <span className={styles.pointText}>“정열을 만나면 열정이 솟는다!”</span> 프론트엔드 개발자
                    임정렬입니다.
                </p>
                <br />
                <p>
                    취창업연계센터에서 처음 개발을 접하게 되었고, 직무 심화 교육 기간 동안 비전공자 대상 웹 개발 교육
                    프로그램에 참여하였습니다.
                </p>
                <br />
                <p className={styles.pointText}>
                    이후 입사한 스타트업에서 하나의 서비스를 맡아 유지보수와 고객사 요청 또는 서비스 발전을 위한 추가
                    개발을 진행하였으며,
                </p>
                <p className={styles.pointText}>
                    또한 신규 서비스의 기획부터 앱 서비스의 필수 기능을 넣은 MVP 앱 런칭까지의 프로세스를
                    경험하였습니다.
                </p>
                <br />
                <p>
                    프론트엔드 개발자로서 깊이를 다지고자 부트캠프에 참여하여 동료들과 정보를 공유하고 함께 프로젝트를
                    진행하며 개발 역량을 쌓을 수 있었습니다.
                </p>
                <p>
                    동료분들과 새로운 라이브러리를 경험하고 토론하며 깊게 공부해본 경험은 값진 경험이었고, 함께 성장하는
                    즐거움을 깨달을 수 있었습니다.
                </p>
                <br />
                <p className={styles.pointText}>
                    열정적으로 성장을 추구하며 성장에 시너지가 날 수 있는 개발자 동료가 되고싶습니다.
                </p>
            </TextContainer>
            <TextContainer title="Timeline">
                <Timeline />
            </TextContainer>
            <TextContainer title="Skill">
                <div>
                    <span className={styles.fontBold}>[프로그래밍 언어]</span>
                    <ol className={styles.skillContainer}>
                        {programmingSkill.map((v) => (
                            <StackItem stack={v} key={v} />
                        ))}
                    </ol>
                </div>
                <div>
                    <span className={styles.fontBold}>[프레임워크 & 라이브러리]</span>
                    <ol className={styles.skillContainer}>
                        {libraraySkill.map((v) => (
                            <StackItem stack={v} key={v} />
                        ))}
                    </ol>
                </div>
                <div>
                    <span className={styles.fontBold}>[DB & 서버]</span>
                    <ol className={styles.skillContainer}>
                        {serverSkill.map((v) => (
                            <StackItem stack={v} key={v} />
                        ))}
                    </ol>
                </div>
            </TextContainer>
            <TextContainer title="Projects">
                <div className={styles.projectContainer}>
                    <p>프로젝트에 대한 자세한 소개는 </p>
                    <Link to="/portfolio" className={styles.portfolioLink}>
                        <LiaExternalLinkAltSolid />
                        <p>포트폴리오</p>
                    </Link>
                    <p> 페이지에 담았습니다.</p>
                </div>
            </TextContainer>
            <TextContainer title="Career">
                <div className={styles.companyContainer}>
                    <p className={styles.pointText}>(주)LFin 개발팀</p>
                    <p className={styles.pointText}>2021.04 ~ 2022.09</p>
                </div>
                <div className={styles.careerContainer}>
                    <div className={styles.careerItemContainer}>
                        <span>근태관리 앱, </span>
                        <span className={styles.fontBold}>아임히어워크</span>
                        <p>(2021.07 ~ 2022.09)</p>
                    </div>
                    <ul className={styles.careerDescriptionContainer}>
                        <li>
                            <p>담당: APP, Server, 관리자 페이지(Web) 유지보수 및 추가 개발</p>
                        </li>
                        <li>
                            <p>기타: CS 응대</p>
                        </li>
                        <ol className={styles.stackContainer}>
                            {imhwStack.map((v) => (
                                <StackItem stack={v} key={v} />
                            ))}
                        </ol>
                    </ul>
                </div>
                <div className={styles.careerContainer}>
                    <div className={styles.careerItemContainer}>
                        <span>O2O 심부름 플랫폼, </span>
                        <span className={styles.fontBold}>캐시부름</span>
                        <p>(2022.01 ~ 2022.03)</p>
                    </div>
                    <ul className={styles.careerDescriptionContainer}>
                        <li>
                            <p>담당: Server 및 관리자 페이지(Web) 개발</p>
                        </li>
                        <ol className={styles.stackContainer}>
                            {cashbroomStack.map((v) => (
                                <StackItem stack={v} key={v} />
                            ))}
                        </ol>
                    </ul>
                </div>
                <div className={styles.careerContainer}>
                    <div className={styles.careerItemContainer}>
                        <span>4050 친구찾기 앱, </span>
                        <span className={styles.fontBold}>링톡</span>
                        <p>(2022.06 ~ 2022.09)</p>
                    </div>
                    <ul className={styles.careerDescriptionContainer}>
                        <li>
                            <p>담당: APP 개발</p>
                        </li>
                        <ol className={styles.stackContainer}>
                            {linktalkStack.map((v) => (
                                <StackItem stack={v} key={v} />
                            ))}
                        </ol>
                    </ul>
                </div>
            </TextContainer>
            <TextContainer title="Experience">
                <div className={styles.careerContainer}>
                    <div className={styles.careerItemContainer}>
                        <span className={styles.fontBold}>코드스테이츠 Frontend 개발자 부트캠프</span>
                        <p>(2023.04 ~ 2022.10)</p>
                    </div>
                    <ul className={styles.careerDescriptionContainer}>
                        <li>
                            <p>
                                웹 개발의 기본인 HTML, CSS, Javascript에 대해 학습하고, 정적 타입 언어인 Typescript에
                                대해 학습하였습니다.
                            </p>
                        </li>
                        <li>
                            <p>
                                React와 React hook, 상태 관리 라이브러리에 대해 학습하고 이를 프로젝트에 적용하였습니다.
                            </p>
                        </li>
                        <li>
                            <p>atomic 디자인에 대한 학습을 기반으로 storybook 라이브러리를 사용해보았습니다.</p>
                        </li>
                        <li>
                            <p>
                                페어 프로그래밍을 통해 동료와 함께 학습하고, 2번의 팀프로젝트를 진행하며 소통과 함께
                                성장하는 것에 대한 가치를 알 수 있었습니다.
                            </p>
                        </li>
                        <ol className={styles.stackContainer}>
                            {[...programmingSkill, ...libraraySkill.slice(0, 10)].map((v) => (
                                <StackItem stack={v} key={v} />
                            ))}
                        </ol>
                    </ul>
                </div>
                <div className={styles.careerContainer}>
                    <div className={styles.careerItemContainer}>
                        <span className={styles.fontBold}>제주더큰내일센터 2기 수료</span>
                        <p>(2020.04 ~ 2021.03)</p>
                    </div>
                    <ul className={styles.careerDescriptionContainer}>
                        <li>
                            <p>2020.09 ~ 2021.03: 직무 심화 교육 기간</p>
                            <ul>
                                <li>
                                    <p>
                                        (주)시소의 비전공자 대상 웹 개발 교육 프로그램인 hatch program에 참여하였습니다.
                                    </p>
                                </li>
                                <ol className={styles.stackContainer}>
                                    {[
                                        ...programmingSkill.slice(0, 3),
                                        "React",
                                        "styled-component",
                                        "SASS(SCSS)",
                                        ...serverSkill,
                                    ].map((v) => (
                                        <StackItem stack={v} key={v} />
                                    ))}
                                </ol>
                            </ul>
                        </li>

                        <li>
                            <p>2020.04 ~ 2020.09: 기업 및 지역 관련 프로젝트 수행</p>
                            <ul>
                                <li>
                                    <p>
                                        기업 및 지역에 대한 문제 정의와 이를 해결하기 위한 솔루션을 도출하는 팀프로젝트
                                        수행하였습니다.
                                    </p>
                                </li>
                                <li>
                                    <p>2020.09.23 제주공유경제 아이디어 공모전 우수상 시상</p>
                                </li>
                                <ul>
                                    <li>
                                        <p>제주경제통상진흥원 주관 (공유 경제 부문)</p>
                                        <li>
                                            <p>월세/년세 세입자를 위한 가전, 가구 렌탈 서비스</p>
                                        </li>
                                    </li>
                                </ul>
                            </ul>
                        </li>
                    </ul>
                </div>
            </TextContainer>
            <TextContainer title="Languages">
                <div className={styles.careerContainer}>
                    <div className={styles.careerItemContainer}>
                        <span className={styles.fontBold}>영어 🇺🇸</span>
                    </div>
                    <ul className={styles.careerDescriptionContainer}>
                        <li>
                            <p>OPIC IH (2022.12.13)</p>
                        </li>
                    </ul>
                </div>
            </TextContainer>
        </main>
    );
}

export default Resume;
