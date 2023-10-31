import { Link } from "react-router-dom";
import TextContainer from "@component/TextContainer";
// import Timeline from "@component/Timeline";

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
const serverSkill = ["MySQL", "Ruby on Rails", "Node.js"];
const imhwStack = ["react", "mobx", "react native", "fastlane", "redux", "styled-component", "ruby on rails", "mysql"];
const cashbroomStack = ["react", "typescript", "redux", "ruby on rails", "mysql"];
const linktalkStack = ["react native", "typescript", "redux"];
const collaborationSkill = ["git", "github", "Postman", "Notion", "Slack"];

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
                    <span className={styles.pointText}>성장함을 느꼈을 때 가장 행복한 개발자</span> 프론트엔드 개발자
                    임정렬입니다.
                </p>
                <br />
                <p>취창업연계센터에서 게임 동아리를 통해 처음 개발을 접하면서 개발의 매력에 반해,</p>
                <p>직무 심화 교육 기간 동안 웹 개발 교육을 수강하여 기본적인 웹 개발 능력을 갖추게 되었습니다.</p>
                <br />
                <p>
                    이후{" "}
                    <span className={styles.pointText}>
                        입사한 스타트업에서 하나의 서비스를 전담하여 유지보수와 추가 개발
                    </span>
                    을 진행하였으며,
                </p>
                <p>
                    <span className={styles.pointText}>
                        신규 서비스의 기획부터 앱 서비스의 필수 기능을 넣은 MVP 앱 런칭까지의 프로세스를 경험
                    </span>
                    하였습니다.
                </p>
                <br />
                <p>
                    프론트엔드 개발자로서 깊이를 다지고자 참여한 부트캠프에서 동료들과 새로운 기술을 경험하고 프로젝트에
                    적용한 경험을 통해,
                </p>
                <p>동료분들과 함께 성장하는 즐거움을 깨달을 수 있었습니다.</p>
                <br />
                <p>
                    앞으로{" "}
                    <span className={styles.pointText}>
                        서로의 성장에 시너지를 주고받을 수 있는, 함께 하고 싶은 개발자 동료
                    </span>
                    가 되고싶습니다.
                </p>
            </TextContainer>
            {/* <TextContainer title="Timeline">
                <Timeline />
            </TextContainer> */}
            <TextContainer title="Skill">
                <div>
                    <h3>Language</h3>
                    <ol className={styles.skillContainer}>
                        {programmingSkill.map((v) => (
                            <StackItem stack={v} key={`skill-${v}`} />
                        ))}
                    </ol>
                </div>
                <div>
                    <h3>Framework & Library</h3>
                    <ol className={styles.skillContainer}>
                        {libraraySkill.map((v) => (
                            <StackItem stack={v} key={`skill-${v}`} />
                        ))}
                    </ol>
                </div>
                <div>
                    <h3>DB & server</h3>
                    <ol className={styles.skillContainer}>
                        {serverSkill.map((v) => (
                            <StackItem stack={v} key={`skill-${v}`} />
                        ))}
                    </ol>
                </div>
                <div>
                    <h3>Skills for Collaboration</h3>
                    <ol className={styles.skillContainer}>
                        {collaborationSkill.map((v) => (
                            <StackItem stack={v} key={`skill-${v}`} />
                        ))}
                    </ol>
                </div>
            </TextContainer>
            <TextContainer title="Career">
                <div className={styles.companyContainer}>
                    <p className={styles.pointText}>(주)LFin 개발팀</p>
                    <p className={styles.pointText}>2021.04 ~ 2022.09</p>
                </div>
                <div className={styles.careerContainer}>
                    <div className={styles.careerItemContainer}>
                        <Link className={styles.linkText} to="/portfolio/imherework">
                            <LiaExternalLinkAltSolid />
                            <span>근태관리 앱, </span>
                            <strong>아임히어워크</strong>
                        </Link>
                        <p>(2021.07 ~ 2022.09)</p>
                        <p>- 1년 2개월</p>
                        <p>- 개발팀: 1명 / 기획팀: 1명</p>
                    </div>
                    <ul className={styles.careerDescriptionContainer}>
                        <li>
                            <p>담당: APP, Server, 관리자 페이지(Web) 유지보수 및 추가 개발</p>
                        </li>
                        <li>
                            <p>기타: CS 응대</p>
                        </li>
                        <br />
                        <li>
                            <p>
                                <span className={styles.pointText}>
                                    서비스를 전담하여 모바일 앱과 관리자페이지, 서버를 담당
                                </span>
                                하였으며, 고객사 요청 또는 서비스 발전을 위한 개발 우선순위를 정하여 추가 개발을
                                진행하였습니다.
                            </p>
                        </li>
                        <li>
                            <p>
                                <span className={styles.pointText}>애자일 방법론의 프로젝트 관리</span>를 통해 책임감을
                                가지고 서비스 개발에 임하였습니다.
                            </p>
                        </li>
                        <br />
                        <ol className={styles.stackContainer}>
                            {imhwStack.map((v) => (
                                <StackItem stack={v} key={`imhw-${v}`} />
                            ))}
                        </ol>
                    </ul>
                </div>
                <div className={styles.careerContainer}>
                    <div className={styles.careerItemContainer}>
                        <Link className={styles.linkText} to="/portfolio/cashbroom">
                            <LiaExternalLinkAltSolid />
                            <span>O2O 심부름 플랫폼, </span>
                            <strong>캐시부름</strong>
                        </Link>
                        <p>(2022.01 ~ 2022.03)</p>
                        <p>- 3개월</p>
                        <p>- 개발팀: 2명 / 기획팀: 1명</p>
                    </div>
                    <ul className={styles.careerDescriptionContainer}>
                        <li>
                            <p>담당: Server 및 관리자 페이지(Web) 개발</p>
                        </li>
                        <li>
                            <p>
                                <span className={styles.pointText}>
                                    신규 서비스의 MVP 앱(Android/iOS) 런칭의 프로세스
                                </span>
                                를 경험할 수 있었습니다.
                            </p>
                        </li>
                        <br />
                        <ol className={styles.stackContainer}>
                            {cashbroomStack.map((v) => (
                                <StackItem stack={v} key={`smt-${v}`} />
                            ))}
                        </ol>
                    </ul>
                </div>
                <div className={styles.careerContainer}>
                    <div className={styles.careerItemContainer}>
                        <span>4050 친구찾기 앱, </span>
                        <strong>링톡</strong>
                        <p>(2022.06 ~ 2022.09)</p>
                        <p>- 2개월</p>
                        <p>- 개발팀: 4명 / 기획팀: 2명</p>
                    </div>
                    <ul className={styles.careerDescriptionContainer}>
                        <li>
                            <p>담당: APP 개발</p>
                        </li>
                        <br />
                        <ol className={styles.stackContainer}>
                            {linktalkStack.map((v) => (
                                <StackItem stack={v} key={`lnk-${v}`} />
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
                                프론트엔드 파트에서 언어는{" "}
                                <span className={styles.pointText}>HTML, CSS, Javascript, Typescript</span>,
                                라이브러리는{" "}
                                <span className={styles.pointText}>React와 React hook, 상태 관리 라이브러리</span>에
                                대해 학습하였습니다.
                            </p>
                        </li>
                        <li>
                            <p>
                                <span className={styles.pointText}>figma</span>의 사용법에 대한 학습을 통해 디자이너와
                                프론트엔드가 어떻게 소통하는지 알 수 있었고,{" "}
                                <span className={styles.pointText}>프로젝트의 시안을 직접 figma로 그려보는</span>
                                시간을 가졌습니다.
                            </p>
                        </li>
                        <li>
                            <p>
                                <span className={styles.pointText}>atomic 디자인</span>에 대한 학습을 기반으로{" "}
                                <span className={styles.pointText}>storybook</span> 라이브러리를 사용해보았습니다.
                            </p>
                        </li>
                        <br />
                        <li>
                            <p>
                                백엔드는 <span className={styles.pointText}>Node.js</span>에 대해 학습하여,{" "}
                                <span className={styles.pointText}>express 서버와 api 연동, jwt 토큰, oauth 인증</span>
                                에 대해 학습하였습니다.
                            </p>
                        </li>
                        <li>
                            <p>
                                두 번의 팀프로젝트를 진행하였으며, 두 번 모두 팀장을 맡아{" "}
                                <span className={styles.pointText}>
                                    깃모지(gitmoji) 사용을 통한 깃 컨벤션 통일, github 프로젝트 칸반보드를 통한 일정
                                    관리, 데일리 미팅을 통한 이슈 관리
                                </span>
                                를 리드하였습니다.
                            </p>
                        </li>
                        <ul>
                            <li>
                                <p>
                                    pre-project:{" "}
                                    <Link className={styles.linkText} to="/portfolio/stackoverflow">
                                        <LiaExternalLinkAltSolid />
                                        <span>StackOverflow 클론코딩</span>
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    main-project:{" "}
                                    <Link className={styles.linkText} to="/portfolio/devsquad">
                                        <LiaExternalLinkAltSolid />
                                        <span>Dev Squad</span>
                                    </Link>
                                </p>
                            </li>
                        </ul>
                        <br />
                        <ol className={styles.stackContainer}>
                            {[...programmingSkill, ...libraraySkill.slice(0, 10)].map((v) => (
                                <StackItem stack={v} key={`code-${v}`} />
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
                            <p>2020.04 ~ 2020.09: 기업 및 지역 관련 프로젝트 수행</p>
                            <ul>
                                <li>
                                    <p>
                                        기업 및 지역에 대한 문제 정의와 이를 해결하기 위한 솔루션을 도출하는 팀프로젝트
                                        수행하였습니다.
                                    </p>
                                </li>
                                {/* <li>
                                    <p>2020.09.23 제주공유경제 아이디어 공모전 우수상 시상</p>
                                </li>
                                <ul>
                                    <li>
                                        <p>제주경제통상진흥원 주관 (공유 경제 부문)</p>

                                        <li>
                                            <p>월세/년세 세입자를 위한 가전, 가구 렌탈 서비스</p>
                                        </li>
                                    </li>
                                </ul> */}
                                <li>
                                    <p className={styles.pointText}>2020.07 ~ 09 게임 만들기 동아리 참여</p>
                                </li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            <p>2020.09 ~ 2021.03: 직무 심화 교육 기간</p>
                            <ul>
                                <li>
                                    <p>
                                        (주)시소의 <span className={styles.pointText}>웹 개발 교육 프로그램</span>인
                                        hatch program에 참여 하였습니다.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        프론트엔드는{" "}
                                        <span className={styles.pointText}>
                                            HTML, CSS, Javascript, class 컴포넌트 기반의 React
                                        </span>
                                        를 학습하고, 백엔드는 <span className={styles.pointText}>Node.js</span>를
                                        학습하였습니다.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        배운 내용을 토대로{" "}
                                        <Link className={styles.linkText} to="/portfolio/ohouse">
                                            <LiaExternalLinkAltSolid />
                                            <span>오늘의 집을 클론코딩 </span>
                                        </Link>
                                        하는 개인 프로젝트를 진행하였습니다.
                                    </p>
                                </li>
                                <br />
                            </ul>
                        </li>
                        <ol className={styles.stackContainer}>
                            {[
                                ...programmingSkill.slice(0, 3),
                                ...["React", "styled-component", "SASS(SCSS)", "node.js", "mysql"],
                            ].map((v) => (
                                <StackItem stack={v} key={`ohouse-${v}`} />
                            ))}
                        </ol>
                    </ul>
                </div>
            </TextContainer>
            <TextContainer title="Projects">
                <p>
                    프로젝트에 대한 자세한 소개는{" "}
                    <Link to="/portfolio" className={styles.linkText}>
                        <LiaExternalLinkAltSolid />
                        <span>포트폴리오</span>
                    </Link>{" "}
                    페이지에 담았습니다.
                </p>
            </TextContainer>
            <TextContainer title="Education">
                <p>한국외국어대학교 (2016.03 ~ 2023.02)</p>
                <ul>
                    <li>
                        <p>본전공: 중앙아시아학과</p>
                    </li>
                    <li>
                        <p>부전공: Global Business & Technology</p>
                    </li>
                </ul>
            </TextContainer>
            <TextContainer title="Languages">
                <div>
                    <p>영어 OPIc IH (2022.12.13)</p>
                </div>
            </TextContainer>
        </main>
    );
}

export default Resume;
