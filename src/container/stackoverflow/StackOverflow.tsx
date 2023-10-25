import TextContainer from "@component/TextContainer";
import StackItem from "@component/StackItem";

import styles from "./StackOverflow.module.css";
import IconStackOverflow from "@assets/icon_stackoverflow_mini.png";
import GitRuleExample from "@assets/git-rule-example.png";

import { LiaExternalLinkAltSolid } from "react-icons/lia";

const stack = ["next.js", "javascript", "recoil", "css module"];

function StackOverflow() {
    return (
        <main className={styles.container}>
            <img src={IconStackOverflow} alt="" className={styles.iconImg} />
            <h1>Stack Overflow 클론코딩</h1>
            <div className={styles.textContainer}>
                <p>
                    Stack Overflow 클론코딩 프로젝트는 코드스테이츠 메인 프로젝트 진입 전 팀프로젝트 경험을 하기 위한
                    미니 프로젝트로 진행되었습니다.
                </p>
                <br />
                <p className={styles.grayText}>기간: 2023.08 (7인/3주)</p>
                <p className={styles.grayText}>
                    담당: [팀장, 프론트] 공통 컴포넌트, 회원가입, 로그인, 프로필 추가 화면, 유저리스트, 마이페이지
                </p>
                <ol className={styles.stackContainer}>
                    {stack.map((v) => (
                        <StackItem stack={v} key={v} />
                    ))}
                </ol>
            </div>

            <TextContainer title="StackOverflow 클론코딩">
                <div className={styles.textContainer} style={{ display: "flex", alignItems: "center" }}>
                    <ul>
                        <li>
                            <p>
                                <LiaExternalLinkAltSolid />{" "}
                                <a href="https://github.com/codestates-seb/seb45_main_006" className={styles.linkText}>
                                    깃허브 링크
                                </a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <LiaExternalLinkAltSolid />{" "}
                                <a
                                    href="https://docs.google.com/spreadsheets/d/1qAye_t1YFhoVLEXBXDPUmqQ9DMVEJGx5ENzB7yOrZrs/edit?usp=sharing"
                                    className={styles.linkText}
                                >
                                    사용자 요구사항 정의서
                                </a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <LiaExternalLinkAltSolid />{" "}
                                <a
                                    href="https://www.figma.com/file/raqrsQI6zb2bwixlNwuy8n/pre-project-user-flow?type=whiteboard&node-id=0-1"
                                    className={styles.linkText}
                                >
                                    user flow
                                </a>
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p>
                                <LiaExternalLinkAltSolid />{" "}
                                <a
                                    href="https://docs.google.com/presentation/d/1ceJhCijbV7Zdm57Thmtv3wDyxVOPIA4QLotCXYkCj2I/edit?usp=sharing"
                                    className={styles.linkText}
                                >
                                    우리 팀의 Git 규칙
                                </a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <LiaExternalLinkAltSolid />{" "}
                                <a
                                    href="https://docs.google.com/document/d/1YCsDvdfhLgwTttaXQYm8VZpriw-8C3Z-sEZMmEBZztk/edit?usp=sharing"
                                    className={styles.linkText}
                                >
                                    팀 회의록
                                </a>
                            </p>
                        </li>
                    </ul>
                </div>
            </TextContainer>

            <TextContainer title="💻 개발 내용">
                <h3>Next.js</h3>
                <br />
                <strong>도입 계기</strong>
                <ul>
                    <li>
                        <p>
                            코드스테이츠에서 학습을 진행하면서 멘토님이 가장 추천하셨던 프레임워크였던 next.js를 이번
                            프로젝트를 통해 경험해보고자 도입하였습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 내용</strong>
                <ul>
                    <li>
                        <p>
                            <span className={styles.pointText}>많은 변경사항이 적용된 13 버전으로 프로젝트를 세팅</span>
                            하였으며, 각 컴포넌트의 역할에 따라{" "}
                            <span className={styles.pointText}>서버 컴포넌트, 클라이언트 컴포넌트로 나누어</span>{" "}
                            사용하였습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span className={styles.pointText}>
                                SSG, SSR, ISR 의 기법을 fetch 로 어떻게 구현하는지 학습
                            </span>
                            한 후 dummy json api 를 요청하며 어떤 차이가 있는지 학습하였습니다.
                        </p>
                    </li>
                </ul>
            </TextContainer>
            <TextContainer title="💡 문제 해결 경험">
                <h3>Github rulesets</h3>
                <p>Github rulesets는 특정 브랜치 또는 태그에 대해 규칙을 정할 수 있도록 설정할 수 있습니다.</p>
                <br />
                <strong>도입 계기</strong>
                <ul>
                    <li>
                        <p>
                            git flow를 경험한 팀원들은 develop 또는 main 브랜치에 직접 푸시하거나 리뷰어 승인이 떨어지지
                            않았는데 머지하는 경우를 우려하였습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 내용</strong>
                <ul>
                    <li>
                        <p>
                            처음에는 git hook 또는 husky 도입을 고민하였으나 github rulesets를 통해 쉽게 세팅할 수
                            있음을 알게 되었습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span className={styles.pointText}>
                                main, develop 브랜치에는 직접 푸시 금지 설정과 develop, main 브랜치 PR에 최소 한명의
                                승인이 있을 경우에만 merge가 가능
                            </span>
                            하도록 설정하였습니다.
                        </p>
                    </li>
                </ul>
                <br />
                <h3>자동 리뷰어 지정</h3>
                <strong>도입 계기</strong>
                <ul>
                    <li>
                        <p>
                            PR에 대한 리뷰어로 모든 팀원을 올리는 것을 규칙으로 하였으나, 6명의 닉네임을 찾아 일일이
                            리뷰어로 지정하는 것에 불편함을 느꼈습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 내용</strong>
                <ul>
                    <li>
                        <p>
                            <span className={styles.pointText}>.github &gt; CODEOWNERS 파일</span>에 자동으로 코드
                            리뷰어를 지정할 수 있음을 알게되었고, 다음과 같이 설정하였습니다.
                        </p>
                    </li>
                    <li>
                        <div className={styles.codeContainer}>
                            <span>* @kay0829 </span>
                            <span className={styles.grayText}>// 팀원분들 닉네임 공백으로 구분</span>
                        </div>
                    </li>
                    <li>
                        <p>
                            Dev Squad 프로젝트의 경우 다음과 같이 설정하여 폴더 별로(프론트/백엔드 별로) 리뷰어 지정을
                            자동으로 할 수 있었습니다.
                        </p>
                    </li>
                    <li>
                        <div className={styles.codeContainer}>
                            <span>/server </span>
                            <br />
                            <span>/client @kay0829 </span>
                            <span className={styles.grayText}>// 팀원분들 닉네임 공백으로 구분</span>
                        </div>
                    </li>
                </ul>
            </TextContainer>
            <TextContainer title="📈 성장 경험">
                <strong>Git과 Git flow</strong>
                <ul>
                    <li>
                        <p>
                            <span className={styles.pointText}>
                                깃허브와 git flow가 익숙하지 않은 팀원분들을 위해 설명을 문서화하여 전달
                            </span>
                            드렸으며, 코드리뷰를 적극적으로 활용하고자 하였습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            <LiaExternalLinkAltSolid />{" "}
                            <a
                                href="https://docs.google.com/presentation/d/1ceJhCijbV7Zdm57Thmtv3wDyxVOPIA4QLotCXYkCj2I/edit?usp=sharing"
                                className={styles.linkText}
                            >
                                우리 팀의 Git 규칙
                            </a>
                        </p>
                    </li>
                </ul>
                <img src={GitRuleExample} alt="" className={styles.imgContainer} />
                <br />
                <strong>팀장으로서의 역할</strong>
                <ul>
                    <li>
                        <p>
                            아쉽게도 api 연동과 배포까지 마무리하지 못하였지만 팀을 리드하는 팀장으로서 각 팀원이 많은
                            경험을 얻어갈 수 있도록 노력하였습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            프론트엔드 팀을 리드하는 팀장으로서 각 팀원의 관심사에 따라 역할을 분배하고 새로 접하는
                            기능에 대해 미리 학습하여 전달하기 위해 노력하였습니다.
                        </p>
                    </li>
                </ul>
                <br />
                <strong>팀장 역할에 대한 피드백</strong>
                <ul>
                    <li>프로젝트 마무리 후 팀원분들로부터 다음과 같은 피드백을 받았습니다.</li>
                    <ul>
                        <li>
                            <p>
                                강점:{" "}
                                <span className={styles.pointText}>
                                    프로젝트 진행을 위해 어떤 작업을 준비하고 진행해야 하는지를 파악하여 업무를 분담
                                </span>
                                하였으며,{" "}
                                <span className={styles.pointText}>
                                    팀의 전체적인 작업 진척과 팀 내 분위기를 위해 노력
                                </span>
                                하였습니다.
                            </p>
                        </li>
                    </ul>
                </ul>
            </TextContainer>
        </main>
    );
}

export default StackOverflow;
