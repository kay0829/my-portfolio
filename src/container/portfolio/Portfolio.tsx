import ProjectSection from "@component/ProjectSection";
import ProjectItem from "@component/ProjectItem";

import styles from "./Portfolio.module.css";
import myImg from "@assets/my-img2.jpeg";
import IconImHereWork from "@assets/icon-imherework.png";
import ExplanationImhereWork from "@assets/explanation-imherework.jpg";
import IconCashbroom from "@assets/icon-cashbroom.png";
import ExplanationCashbroom from "@assets/explanation-cashbroom.png";
import IconCodeStates from "@assets/icon-codestates.png";
import IconStackOverflow from "@assets/icon_stackoverflow_mini.png";
import IconDevSquad from "@assets/icon_devsquad.png";
import ExplanationDevSquad from "@assets/explanation-devsquad.png";

const companyProjects = [
    {
        explantaionImg: ExplanationImhereWork,
        iconImg: IconImHereWork,
        title: "모바일 근태관리 앱, 아임히어워크",
        subTitle: "내근 사원의 근태관리 뿐만 아니라 방문 일정 등록으로 외근 사원 업무 관리까지 가능한 앱",
        date: "2021.07 ~ 2022.09",
        stack: ["react", "mobx", "react native", "fastlane", "redux", "styled-component", "ruby on rails", "mysql"],
        myPart: "APP, Server, 관리자 페이지(Web) 유지보수 및 추가 개발",
        summary: [
            "서비스 유지보수와 고객사의 요청 또는 서비스 발전을 위한 내부 논의를 통해 디벨롭을 진행하였습니다.",
            "zendesk를 통해 사용자의 의견을 직접 듣고 안내드릴 수 있었습니다.",
            "fastlane을 도입하여 앱 빌드 및 배포 자동화 프로세스를 구축하였습니다.",
            "고객사의 요청에 따라 엑셀 파일을 읽어 비동기적으로 방문지를 등록하는 api를 개발하였습니다.",
        ],
    },
    {
        explantaionImg: ExplanationCashbroom,
        iconImg: IconCashbroom,
        title: "O2O 심부름 플랫폼, 캐시부름",
        subTitle: "부름(요청)을 수행하여 포인트를 쌓을수도 있고, 사용자 수요에 따라 다양한 부름을 주문할 수 있는 앱",
        date: "2022.01 ~ 2022.04",
        stack: ["react", "typescript", "redux", "ruby on rails", "mysql"],
        myPart: "Server 및 관리자 페이지(Web) 개발",
        summary: [],
    },
];

const codestatesProjects = [
    {
        explantaionImg: ExplanationDevSquad,
        iconImg: IconDevSquad,
        date: "2023.09 (6인/4주)",
        title: "Dev Squad",
        subTitle: "프로젝트, 스터디를 함께할 팀원을 찾고 정보를 공유할 수 있는 플랫폼",
        stack: ["react + vite", "typescript", "recoil", "react-query", "tailwindcss"],
        myPart: "[팀장, 프론트] 공통 컴포넌트, 채팅, 자유게시판, 질문게시판, 유저리스트, 마이페이지",
        summary: [
            "팀장을 맡아 일정 조율과 소통을 리드하는 역할을 담당하였습니다.",
            "웹소켓 통신을 경험하였으며, 커스텀 훅을 적절히 사용하여 코드 중복을 방지하기 위해 노력했습니다.",
        ],
    },
    {
        iconImg: IconStackOverflow,
        date: "2023.08 (7인/3주)",
        title: "Stack Overflow 클론코딩",
        stack: ["next.js", "javascript", "recoil", "css module"],
        myPart: "[팀장, 프론트] 공통 컴포넌트, 회원가입, 로그인, 프로필 추가 화면, 유저리스트, 마이페이지",
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
        subTitle: "코드 스테이츠 개인 프로젝트로 현업 디자이너가 준비한 피그마 시안을 보고 구현한 프로젝트",
        stack: ["react + vite", "typescript", "recoil", "storybook", "tailwindcss"],
        myPart: "[프론트] 메인페이지, 북마크 리스트 페이지",
        summary: [
            "atomic css에 대해 학습하고 대표적인 라이브러리인 tailwindcss를 적용해보았습니다.",
            "기존 컴포넌트를 atomic 방식으로 컴포넌트를 분리하고 storybook을 사용해 문서화하였습니다.",
        ],
    },
    {
        date: "2023.03 (개인/10일)",
        title: "윈도우 XP 웹으로 구현해보기",
        stack: ["typescript", "HTML", "CSS"],
        myPart: "타입스크립트로 useEffect, useState 구현해보고 동작원리 학습",
        summary: [],
    },
    {
        date: "2023.02 (개인/10일)",
        title: "HTML 파싱하기",
        subTitle: "typescript를 사용하여 HTML을 파싱하는 과정을 구현해본 프로젝트",
        stack: ["typescript"],
        myPart: "공통 컴포넌트, 회원가입, 로그인, 프로필 추가 화면, 유저리스트, 마이페이지",
        summary: ["브라우저 동작원리에 대해 학습하고 HTML 스트링을 받아 파싱하는 모듈을 만들어보았습니다."],
    },
    {
        date: "2021.01 ~ (개인/8주)",
        title: "오늘의 집 클론코딩",
        subTitle: "",
        stack: ["react", "styled-component", "node.js", "mysql"],
        myPart: "[프론트/백엔드] 회원가입, 로그인, 상품, 리뷰, 문의 CRUD",
        summary: [
            "오늘의 집 상세페이지를 처음에는 바닐라JS로 개발하여 DOM에 대해 학습하였습니다.",
            "이후 React class 기반 컴포넌트로 개발하였으며, SASS를 적용하였습니다.",
            "이후 React function 기반 컴포넌트로 디벨롭하였으며, styled-component를 적용하였습니다.",
            "node.js의 query builder 라이브러리인 knex와 ORM 라이브러리인 sequelize를 경험해보았습니다.",
        ],
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
            <ProjectSection title="👩‍💻 개인 프로젝트">
                {privateProject.map((v) => (
                    <ProjectItem project={v} key={v.title} />
                ))}
            </ProjectSection>
        </main>
    );
}

export default Portfolio;
