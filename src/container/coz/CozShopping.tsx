import TextContainer from "@component/TextContainer";
import StackItem from "@component/StackItem";

import styles from "./CozShopping.module.css";
import IconCodeStates from "@assets/icon-codestates.png";
import CodeReview1 from "@assets/code-review1.png";
import CodeReview2 from "@assets/code-review2.png";

import { LiaExternalLinkAltSolid } from "react-icons/lia";

const stack = ["react + vite", "typescript", "recoil", "storybook", "tailwindcss", "husky"];

function CozShopping() {
    return (
        <main className={styles.container}>
            <img src={IconCodeStates} alt="" className={styles.iconImg} />
            <h1>Co'z shopping</h1>
            <div className={styles.textContainer}>
                <p>
                    <a
                        className={styles.linkText}
                        href="https://github.com/kay0829/fe-sprint-coz-shopping"
                        target="_blank"
                    >
                        <LiaExternalLinkAltSolid />
                        <span>깃허브 링크</span>
                    </a>
                </p>
                <p className={styles.etcText}>
                    vercel로 배포하였으나 코드스테이츠에서 만든 백엔드 서버로부터 CORS 에러로 api 응답을 받을 수 없어
                    기재하지 않았습니다.
                </p>
                <br />
                <p>
                    Co'z shopping 프로젝트는 코드 스테이츠 개인 프로젝트로 현업 디자이너가 준비한 피그마 시안을 보고
                    구현한 프로젝트입니다.
                </p>
                <br />
                <p className={styles.grayText}>기간: 2023.07 (개인/5일)</p>
                <p className={styles.grayText}>담당: [프론트] 메인페이지, 북마크 리스트 페이지</p>
                <ol className={styles.stackContainer}>
                    {stack.map((v) => (
                        <StackItem stack={v} key={v} />
                    ))}
                </ol>
            </div>

            <TextContainer title="💻 개발 내용">
                <h3>Vite로 React 세팅하기</h3>
                <p>
                    관련 블로깅:{" "}
                    <a
                        className={styles.linkText}
                        href="https://velog.io/@kay_/%EC%9D%B8%ED%84%B0%EB%A0%89%ED%8B%B0%EB%B8%8C-%EC%9B%B91-Vite%EC%99%80-%EC%A0%88%EB%8C%80%EA%B2%BD%EB%A1%9C"
                        target="_blank"
                    >
                        <LiaExternalLinkAltSolid />
                        <span>Vite와 절대경로</span>
                    </a>
                </p>
                <br />
                <strong>도입 계기</strong>
                <ul>
                    <li>
                        <p>
                            지금까지는 create-react-app을 사용하여 리액트 앱을 만들었지만, vite가 매우 빠르고 설정이
                            편하다는 장점이 있다는 것을 알게되어 프로젝트는 vite를 사용하여 react를 세팅하기로
                            결정하였습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 내용</strong>
                <ul>
                    <li>
                        <p>
                            <span className={styles.pointText}>
                                npm create vite@latest [폴더명] -- --template react-ts
                            </span>{" "}
                            커맨드 한줄로 타입스크립트 + react 세팅을 진행하였고, 절대경로를 추가하였습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 결과</strong>
                <ul>
                    <li>
                        <p>
                            CRA(create-react-app)으로 절대경로를 설정했을 때와 달리{" "}
                            <span className={styles.pointText}>
                                별도로 eject를 할지, 별도 라이브러리를 설치할지 고민할 필요가 없어 설정의 편리함
                            </span>
                            을 느낄 수 있었습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            또한 이후 같은 환경에서 테스트해본 결과{" "}
                            <span className={styles.pointText}>
                                CRA로 프로젝트를 init할 때 걸린 시간은 약 62초, VITE는 약 23초로 매우 빠른 것을 확인
                            </span>
                            할 수 있었습니다.
                        </p>
                    </li>
                </ul>
                <br />
                <h3>tailwindcss</h3>
                <p>tailwindcss는 개발자가 앱을 더 빠르고 쉽게 만들 수 있도록 설계된 유틸리티 우선 프레임워크입니다.</p>
                <p>
                    관련 블로깅:{" "}
                    <a
                        className={styles.linkText}
                        href="https://velog.io/@kay_/%EA%B5%AC%EA%B8%80-%EC%BA%98%EB%A6%B0%EB%8D%94-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A93-Tailwindcss"
                        target="_blank"
                    >
                        <LiaExternalLinkAltSolid />
                        <span>Tailwindcss</span>
                    </a>
                </p>
                <br />
                <strong>도입 계기</strong>
                <ul>
                    <li>
                        <p>
                            첫 CSS 라이브러리로 SASS를 학습했을때, 오히려 구조화된 변수나 함수를 잘 사용하지 못하면서
                            코드가 중구난방으로 작성되는 불편함을 느낀적이 있으며,
                        </p>
                    </li>
                    <li>
                        <p>
                            그에 대한 대안으로 등장한 styled-component를 사용하면서 class 네이밍에 대한 부담은 줄었지만
                            여전히 컴포넌트 네이밍과 한줄의 CSS를 추가하기 위해 컴포넌트를 만드는 것에 대한 불편함을
                            느끼게 되었습니다.
                        </p>
                    </li>
                    <li>
                        <p className={styles.pointText}>
                            기존 CSS 라이브러리에 불편함을 느끼던 중 CSS 관리하기 용이한 CSS 프레임워크인 tailwindcss에
                            대해 알게 되었고 이번 프로젝트에 적용하게 되었습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 내용</strong>
                <ul>
                    <li>
                        <p>
                            Visual Studio Code에서 Tailwindcss intellisense라는 extension을 추가하고, tailwind.config.js
                            파일에 커스텀한 스타일을 추가하는 방법을 학습하여 프로젝트에 적용하였습니다.
                        </p>
                    </li>
                </ul>
            </TextContainer>
            <TextContainer title="💡 문제 해결 경험">
                <h3>Husky</h3>
                <p>
                    git hook은 Git 이벤트가 발생했을 때 특정 스크립트를 실행하는 것을 의미하며, husky는 git hook을 쉽게
                    사용할 수 있도록 도와주는 라이브러리입니다.
                </p>
                <p>
                    관련 블로깅:{" "}
                    <a className={styles.linkText} href="https://velog.io/@kay_/Husky" target="_blank">
                        <LiaExternalLinkAltSolid />
                        <span>Husky</span>
                    </a>
                </p>
                <p>
                    관련 PR:{" "}
                    <a
                        className={styles.linkText}
                        href="https://github.com/kay0829/fe-sprint-coz-shopping/pull/31"
                        target="_blank"
                    >
                        {/* <LiaExternalLinkAltSolid /> */}
                        <span>🔧 12_husky_세팅 | pre-push, pre-commit 설정 추가</span>
                    </a>
                </p>
                <br />
                <strong>도입 계기</strong>
                <ul>
                    <li>
                        <p>
                            이전 개인 프로젝트 진행하던 중 git flow를 적용하여 작업을 하다가 실수로 origin/main 브랜치에
                            머지한 적이 있었고, 이를 해결하기 위한 방법을 찾다가 husky에 대해 알게 되었습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 내용</strong>
                <ul>
                    <li>
                        <p className={styles.pointText}>
                            shell script를 작성하여 commit 전 eslint 체크를 우선적으로 한 후, 현재 체크아웃된 브랜치와
                            커밋하면 안되는 브랜치를 비교하여 일치할 경우 에러를 내는 코드를 추가하였습니다.
                        </p>
                    </li>
                    <li>
                        <p className={styles.pointText}>
                            shell script를 작성하여 현재 체크아웃된 브랜치만 push할 수 있으며 현재 push 전 푸시하면
                            안되는 브랜치에 체크아웃되어있을 경우에 에러를 내는 코드를 작성하였습니다.
                        </p>
                    </li>
                </ul>
            </TextContainer>
            <TextContainer title="📈 성장 경험">
                <strong>코드리뷰</strong>
                <ul>
                    <li>
                        <p>
                            이번 진행된 프로젝트에 대해 코드스테이츠 엔지니어 분으로부터 코드리뷰를 받아 코드를 개선하는
                            시간을 가졌습니다.
                        </p>
                    </li>

                    <img src={CodeReview1} alt="" className={styles.imgContainer} />
                    <img src={CodeReview2} alt="" className={styles.imgContainer} />
                </ul>
                <strong>atomic 디자인</strong>
                <ul>
                    <li>
                        <p>기존 컴포넌트를 atomic 방식으로 컴포넌트를 분리하고 storybook을 사용해보았습니다.</p>
                    </li>
                </ul>
            </TextContainer>
        </main>
    );
}

export default CozShopping;
