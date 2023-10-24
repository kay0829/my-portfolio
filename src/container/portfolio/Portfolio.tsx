import ProjectSection from "@component/ProjectSection";
import ProjectItem from "@component/ProjectItem";

import styles from "./Portfolio.module.css";
import myImg from "@assets/my-img2.jpeg";
import IconImHereWork from "@assets/icon-imherework.png";
import ExplanationImhereWork from "@assets/explanation-imherework.jpg";
import IconCashbroom from "@assets/icon-cashbroom.png";
import ExplanationCashbroom from "@assets/explanation-cashbroom.png";
import IconCodeStates from "@assets/icon-codestates.png";
import IconStackOverflow from "@assets/icon_stackoverflow.png";
import IconStackOverflowMini from "@assets/icon_stackoverflow_mini.png";
import IconDevSquad from "@assets/icon_devsquad.png";
import ExplanationDevSquad from "@assets/explanation-devsquad.png";

const companyProjects = [
    {
        explanationImg: ExplanationImhereWork,
        iconImg: IconImHereWork,
        title: "근태관리 앱, 아임히어워크",
        date: "2021.07 ~ 2022.09",
        stack: ["react", "mobx", "react native", "fastlane", "redux", "styled-component", "ruby on rails", "mysql"],
        myPart: "APP, Server, 관리자 페이지(Web) 유지보수 및 추가 개발",
        route: "imherework",
    },
    {
        explanationImg: ExplanationCashbroom,
        iconImg: IconCashbroom,
        title: "O2O 심부름 플랫폼, 캐시부름",
        date: "2022.01 ~ 2022.04",
        stack: ["react", "typescript", "redux", "ruby on rails", "mysql"],
        myPart: "Server 및 관리자 페이지(Web) 개발",
        route: "cashbroom",
    },
];

const codestatesProjects = [
    {
        explanationImg: ExplanationDevSquad,
        iconImg: IconDevSquad,
        date: "2023.09 (6인/4주)",
        title: "Dev Squad",
        stack: ["react + vite", "typescript", "recoil", "react-query", "tailwindcss"],
        myPart: "[팀장, 프론트] 공통 컴포넌트, 채팅, 자유게시판, 질문게시판, 유저리스트, 마이페이지",
        route: "devsquad",
    },
    {
        explanationImg: IconStackOverflow,
        iconImg: IconStackOverflowMini,
        date: "2023.08 (7인/3주)",
        title: "Stack Overflow 클론코딩",
        stack: ["next.js", "javascript", "recoil", "css module"],
        myPart: "[팀장, 프론트] 공통 컴포넌트, 회원가입, 로그인, 프로필 추가 화면, 유저리스트, 마이페이지",
        route: "stackoverflow",
        summary: [
            "next.js 13 버전에 대한 학습을 진행하며 개발하였습니다.",
            "깃허브와 git flow가 익숙하지 않은 팀원분들을 위해 설명을 문서화하여 전달드렸으며, 코드리뷰를 적극적으로 활용하고자 하였습니다.",
        ],
    },
];

export const privateProject = [
    {
        date: "2023.07 (개인/5일)",
        title: "Co'z Shopping",
        stack: ["react + vite", "typescript", "recoil", "storybook", "tailwindcss"],
        myPart: "[프론트] 메인페이지, 북마크 리스트 페이지",
        route: "cozshopping",
    },
    {
        date: "2023.03 (개인/10일)",
        title: "윈도우 XP 웹으로 구현해보기",
        stack: ["typescript", "HTML", "CSS"],
        myPart: "vanilla로 useEffect, useState 구현해보고 동작원리 학습",
        route: "windowxp",
    },
    {
        date: "2023.02 (개인/10일)",
        title: "HTML 파싱하기",
        subTitle: "typescript를 사용하여 HTML을 파싱하는 과정을 구현해본 프로젝트",
        stack: ["typescript"],
        myPart: "공통 컴포넌트, 회원가입, 로그인, 프로필 추가 화면, 유저리스트, 마이페이지",
        route: "html-parsing",
    },
    {
        date: "2021.01 ~ (개인/8주)",
        title: "오늘의 집 클론코딩",
        subTitle: "",
        stack: ["react", "styled-component", "node.js", "mysql"],
        myPart: "[프론트/백엔드] 회원가입, 로그인, 상품, 리뷰, 문의 CRUD",
        route: "ohouse",
    },
];

const CodestatesTitle = (
    <div style={{ display: "flex", alignItems: "center" }}>
        <img src={IconCodeStates} alt="" style={{ width: "28px", marginRight: "4px" }} />
        코드스테이츠 팀프로젝트
    </div>
);

function Portfolio() {
    return (
        <main className={styles.container}>
            <section className={styles.defaultInfoContainer}>
                <div className={styles.imgContainer}>
                    <img src={myImg} alt="" className={styles.mainImg} />
                </div>
                <div>
                    <h1>임정렬 | Portfolio</h1>
                    <div className={styles.textContainer}>
                        <p>
                            1년 6개월의 실무 경험과 프론트엔드 개발자로서 깊이를 다지고자 참여한 6개월 간의 개발 교육
                            기간 동안
                        </p>
                        <p>
                            <span className={styles.pointText}>
                                새로운 기술을 학습하고 적용하며 만들었던 프로젝트에 대한 소개를 담은 페이지
                            </span>
                            입니다.
                        </p>
                    </div>
                </div>
            </section>
            <ProjectSection title="🏢 회사 참여 프로젝트">
                {companyProjects.map((v) => (
                    <ProjectItem project={v} key={v.title} />
                ))}
            </ProjectSection>
            <ProjectSection title={CodestatesTitle}>
                {codestatesProjects.map((v) => (
                    <ProjectItem project={v} key={v.title} />
                ))}
            </ProjectSection>
            <ProjectSection title="👩‍💻 개인 미니 프로젝트">
                {privateProject.map((v) => (
                    <ProjectItem project={v} key={v.title} />
                ))}
            </ProjectSection>
        </main>
    );
}

export default Portfolio;
