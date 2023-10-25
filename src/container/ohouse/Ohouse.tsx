import TextContainer from "@component/TextContainer";
import StackItem from "@component/StackItem";

import styles from "./Ohouse.module.css";
import IconOhouse from "@assets/icon-ohouse.png";
import OhouseApiErd from "@assets/ohouse-api-erd.png";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const stack = ["React", "styled-component", "SASS(SCSS)", "styled-component", "node.js", "mysql"];

const summary = [
    "오늘의 집 상세페이지를 처음에는 바닐라JS로 개발하여 DOM에 대해 학습하였습니다.",
    "이후 React class 기반 컴포넌트로 개발하였으며, SASS를 적용하였습니다.",
    "이후 React function 기반 컴포넌트로 디벨롭하였으며, styled-component를 적용하였습니다.",
    "node.js의 query builder 라이브러리인 knex와 ORM 라이브러리인 sequelize를 경험해보았습니다.",
];
function Ohouse() {
    return (
        <main className={styles.container}>
            <img src={IconOhouse} alt="" className={styles.iconImg} />
            <h1>오늘의 집 클론코딩</h1>
            <div className={styles.textContainer}>
                <p>
                    <a
                        className={styles.linkText}
                        href="https://github.com/jay9884/ohouse_practice_react_node"
                        target="_blank"
                    >
                        <LiaExternalLinkAltSolid />
                        <span>react + node.js로 구현한 깃허브 링크</span>
                    </a>
                </p>
                <p>
                    <a className={styles.linkText} href="https://github.com/kay0829/ohouse_vanilla" target="_blank">
                        <LiaExternalLinkAltSolid />
                        <span>vanilla로 구현한 깃허브 링크</span>
                    </a>
                </p>
                <p>
                    <a className={styles.linkText} href="https://kay0829.github.io/ohouse_vanilla" target="_blank">
                        <LiaExternalLinkAltSolid />
                        <span>배포 링크</span>
                    </a>
                </p>
                <p className={styles.etcText}>배포링크는 vanilla로 구현한 기준입니다.</p>
                <br />
                <p>취창업연계센터 직무 심화 교육(웹 개발 교육)을 수강한 후 마지막으로 만든 프로젝트입니다.</p>
                <br />
                <p className={styles.grayText}>기간: 2023.07 (개인/5일)</p>
                <p className={styles.grayText}>담당: [프론트] 메인페이지, 북마크 리스트 페이지</p>
                <br />
                <ol className={styles.stackContainer}>
                    {stack.map((v) => (
                        <StackItem stack={v} key={v} />
                    ))}
                </ol>
            </div>

            <TextContainer title="💻 개발 내용">
                <strong>프로젝트 설계 과정</strong>
                <p>
                    <a
                        className={styles.linkText}
                        href="https://docs.google.com/spreadsheets/d/11TUNgJ8XBoe3vckPYIZ7Rl6Z5yLFdFZKTfpTXWgoCto/edit?usp=sharing"
                        target="_blank"
                    >
                        <LiaExternalLinkAltSolid />
                        <span>API 명세서</span>
                    </a>
                </p>
                <p>
                    <a className={styles.linkText} href="https://www.erdcloud.com/d/mx6inemARexfGGxba" target="_blank">
                        <LiaExternalLinkAltSolid />
                        <span>ERD</span>
                    </a>
                </p>
                <img src={OhouseApiErd} alt="" className={styles.imgContainer} />
                <br />
                <strong>프로젝트 진행 과정</strong>
                <ul>
                    {summary.map((v) => (
                        <li>
                            <p>{v}</p>
                        </li>
                    ))}
                </ul>
            </TextContainer>
            <TextContainer title="📈 성장 경험">
                <ul>
                    <li>
                        <p>
                            별도 라이브러리 없이 vanilla로 Carousel과 Dropdown을 구현해보면서 웹에서 자주 사용되는
                            형태의 디자인을 구현할 수 있었습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            이후 진행한 디벨롭 과정에서 SASS와 styled-component를 사용해보면서 각 CSS 라이브러리의
                            특성과 차이점을 느낄 수 있었습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            암호화에 대한 학습을 진행하고 salt를 통해 비밀번호 저장에 주로 쓰이는 단방향 암호화를
                            사용하였습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            API 명세서 및 ERD 작성을 통해 백엔드에서 프로젝트 시작 전 어떻게 설계를 하는지 알 수
                            있었습니다.
                        </p>
                    </li>
                </ul>
            </TextContainer>
        </main>
    );
}

export default Ohouse;
