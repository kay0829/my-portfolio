import TextContainer from "@component/TextContainer";
import StackItem from "@component/StackItem";

import styles from "./DevSquad.module.css";
import IconDevSquad from "@assets/icon_devsquad.png";
import LoadingSekeleton from "@assets/loading-sekeleton.gif";

import { LiaExternalLinkAltSolid } from "react-icons/lia";

const stack = ["react + vite", "typescript", "recoil", "react-query", "tailwindcss"];

const DevSquadTitle = (
    <div style={{ display: "flex", alignItems: "center" }}>
        <img src={IconDevSquad} alt="" style={{ width: "32px", marginRight: "4px" }} />
        Dev Squad
    </div>
);

function DevSquad() {
    return (
        <main className={styles.container}>
            <img src={IconDevSquad} alt="" className={styles.iconImg} />
            <h1>Dev Squad</h1>
            <div className={styles.textContainer}>
                <p>DevSquad는 프로젝트, 스터디를 함께할 팀원을 찾고 정보를 공유할 수 있는 플랫폼입니다.</p>
                <br />
                <p className={styles.grayText}>기간: 2023.09 (6인/4주)</p>
                <p className={styles.grayText}>
                    담당: [팀장, 프론트] 공통 컴포넌트, 채팅, 자유게시판, 질문게시판, 유저리스트, 마이페이지
                </p>
                <ol className={styles.stackContainer}>
                    {stack.map((v) => (
                        <StackItem stack={v} key={v} />
                    ))}
                </ol>
            </div>
            <TextContainer title={DevSquadTitle}>
                <div className={styles.textContainer} style={{ display: "flex", alignItems: "center" }}>
                    <ul className={styles.flex1}>
                        <li>
                            <p>
                                <LiaExternalLinkAltSolid />{" "}
                                <a
                                    href="http://dev-squad.s3-website.ap-northeast-2.amazonaws.com/"
                                    className={styles.linkText}
                                >
                                    배포 링크
                                </a>
                            </p>
                        </li>
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
                                    href="https://www.notion.so/45-Team-006-394711c2e73f44fca922f17fd75c561a"
                                    className={styles.linkText}
                                >
                                    서비스 메뉴얼
                                </a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <LiaExternalLinkAltSolid />{" "}
                                <a
                                    href="https://www.figma.com/file/vq17oIQmCMMtHIdY8zYljU/%EB%A9%94%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?type=design&node-id=1%3A2&mode=design&t=UxWMiAPlgHRlJ48E-1"
                                    className={styles.linkText}
                                >
                                    피그마 시안
                                </a>
                            </p>
                        </li>
                    </ul>
                    <div className={styles.flex1}>
                        <strong>테스트용 계정</strong>
                        <ul>
                            <li>
                                <p>
                                    <strong>아이디:</strong> test01@test.com
                                </p>
                            </li>
                            <li>
                                <p>
                                    <p>
                                        <strong>비밀번호:</strong> abc123!!
                                    </p>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </TextContainer>
            <TextContainer title="💻 개발 내용">
                <h3>react query</h3>
                <p>
                    react query는{" "}
                    <span className={styles.pointText}>React에서 비동기 데이터를 관리하기 위한 라이브러리</span>이며,
                    서버 상태 가져오기, 캐싱, 동기화 등의 작업을 쉽게 다룰 수 있는 이점이 있습니다.
                </p>
                <br />
                <strong>도입 계기</strong>
                <ul>
                    <li>
                        <p>
                            <span className={styles.pointText}>redux에 친숙한 팀원이 적었고,</span> API 통신과 비동기
                            데이터 관리를 위해 redux-saga 사용할 경우 꽤나 방대한 양의{" "}
                            <span className={styles.pointText}>bolierplate를 학습하는 러닝 커브가 클 것이라 예상</span>
                            하였습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            기존 서버 상태 관리 라이브러리의 불편함과 더불어 API 상태를 관리하기 위한 규격화된 방식이
                            있는 react-query의 등장으로 많은 회사에서 채택하였음을 알게 되었고, react-query 도입을
                            결정하게 되었습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 내용</strong>
                <ul>
                    <li>
                        <p>
                            첫주차에 팀원분들께 react-query를 소개하기 위해 선행하여 학습 후 dummy json 데이터를
                            요청하는, <span className={styles.pointText}>템플릿처럼 사용할 수 있는 시드 파일</span>을
                            만들었습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            미팅 시간을 잡아 해당 내용을{" "}
                            <span className={styles.pointText}>
                                팀원분들께 전체적인 react-query에 대한 설명과 함께 공유
                            </span>
                            드렸습니다.
                        </p>
                    </li>
                    <li>
                        <p>아래 코드는 그 일부 예시 코드입니다.</p>
                    </li>
                </ul>
                <span>api.ts</span>
                <div className={styles.codeContainer}>
                    <span className={styles.grayText}>// todo 추가하기</span>
                    <br />
                    <br />
                    <span className={styles.pointText}>export const </span>
                    <span className={styles.pinkText}>postTodo </span>
                    <span className={styles.pointText}>async </span>
                    <span>(requsetObj: PostReqTodo) =&gt; {"{"}</span>
                    <br />
                    <span className={styles.pointText}>&nbsp;&nbsp;&nbsp;&nbsp;const </span>
                    <span>url = {"`${COMMON_API_PATH.TODO.ADD}`"};</span>
                    <br />
                    <span className={styles.pointText}>&nbsp;&nbsp;&nbsp;&nbsp;const </span>
                    <span>{"{ data }"} = await todoTestApi.post(url, requsetObj);</span>
                    <br />
                    <span className={styles.pointText}>&nbsp;&nbsp;&nbsp;&nbsp;return </span>
                    <span>data;</span>
                    <br />
                    <span>{"};"}</span>
                </div>
                <span>hook.ts</span>
                <div className={styles.codeContainer}>
                    <span className={styles.grayText}>// todo 추가하기</span>
                    <br />
                    <br />
                    <span className={styles.pointText}>export const </span>
                    <span className={styles.pinkText}>usePostTodos</span>
                    <span>{" = () => {"}</span>
                    <br />
                    <span className={styles.pointText}>&nbsp;&nbsp;&nbsp;&nbsp;return </span>
                    <span>useMutation&lt;AxiosResponse&lt;PostResTodo&gt;, AxiosError, PostReqTodo&gt;(postTodo);</span>
                    <br />
                    {"};"}
                </div>
                <strong>작업 결과</strong>
                <ul>
                    <li>
                        <p>
                            시드 파일 작성을 통해 react-query를 기본적으로 사용하는 방법을 알 수 있었고,{" "}
                            <span className={styles.pointText}>팀원분들과 코드 컨벤션을 맞출 수 있었습니다.</span>
                        </p>
                    </li>
                </ul>
                <br />
                <br />
                <h3>tailwindcss</h3>
                <p>tailwindcss는 개발자가 앱을 더 빠르고 쉽게 만들 수 있도록 설계된 유틸리티 우선 프레임워크입니다.</p>
                <br />
                <strong>도입 계기</strong>
                <ul>
                    <li>
                        <p>
                            <span className={styles.pointText}>
                                if(kakao)를 통해 처음 알게된 atomic css와 대표적인 프레임워크인 tailwindcss
                            </span>
                            를 개인 프로젝트에서 적용해보았을 때 매우 편리하여 이번 프로젝트에 적용해볼 것을 팀원분들께
                            권유드렸습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 내용</strong>
                <ul>
                    <li>
                        <p>
                            vite를 사용하여 세팅하였기에 tailwindcss 문서에서 설명한대로 vite에 맞는 세팅을
                            진행하였습니다.{" "}
                        </p>
                    </li>
                    <li>
                        <p>
                            문서에 정의되지 않은 px 단위를 사용하고 싶을 경우 커스텀하게 설정을 추가해야하는 불편함을
                            피하기 위해
                        </p>
                        <p>
                            <span className={styles.pointText}>
                                멘토님께서 추천해주신 방법으로 필요한 단위의 px만큼 설정에 미리 추가하는 방식을 사용
                            </span>
                            하였습니다.
                        </p>
                    </li>
                </ul>
                <span>tailwind.config.js</span>
                <div className={styles.codeContainer}>
                    <span className={styles.pointText}>const </span>
                    <span className={styles.pinkText}>range </span>
                    <span>
                        = (length) =&gt; Array.<span className={styles.pinkText}>from</span>({length}, (_, i) =&gt; i);
                    </span>
                    <br />
                    <span className={styles.pointText}>const </span>
                    <span>
                        pixels = range(1000 + 1).<span className={styles.pinkText}>map</span>((x) =&gt; [x, `calc($
                        {"{x}"}rem / 16)`]);
                    </span>
                    <br />
                    <span className={styles.pointText}>const </span>
                    <span>px0_10 = Object.fromEntries(pixels.slice(0, 10 + 1));</span>
                    <br />
                    <span className={styles.pointText}>const </span>
                    <span>px0_100 = Object.fromEntries(pixels.slice(0, 100 + 1));</span>
                    <br />
                    <span className={styles.pointText}>const </span>
                    <span>px0_500 = Object.fromEntries(pixels.slice(0, 500 + 1));</span>
                    <br />
                    <span className={styles.pointText}>const </span>
                    <span>px0_1000 = Object.fromEntries(pixels);</span>
                    <br />
                    <br />
                    <span className={styles.grayText}>// 중략...</span>
                    <br />
                    <span>borderWidth: px0_10,</span>
                    <br />
                    <span>fontSize: px0_100,</span>
                    <br />
                    <span>minWidth: px0_1000,</span>
                    <br />
                    <span>minHeight: px0_1000,</span>
                    <br />
                    <span>maxWidth: px0_1000,</span>
                    <br />
                    <span>maxHeight: px0_1000,</span>
                    <br />
                    <span>width: px0_1000,</span>
                    <br />
                    <span>height: px0_1000,</span>
                </div>
                <span>사용 예시</span>
                <div className={styles.codeContainer}>
                    <span className={styles.grayText}>// width가 100px인 div</span>
                    <br />
                    <span>{"<div classname='w-100'></div>"}</span>
                </div>
                <strong>작업 결과</strong>
                <ul>
                    <li>
                        <p>
                            처음에 클래스명을 tailwindcss에서 검색하여 적용하는 과정은 시간이 들었으나, 점차
                            익숙해지면서 <span className={styles.pointText}>css를 작성하는 시간이 단축</span>되었습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            개인 프로젝트에 사용하였을 때,{" "}
                            <span className={styles.pointText}>
                                rem으로 계산하는 것이 익숙하지 않아 불편함을 겪었던 전과 달리{" "}
                            </span>
                            미리 px 단위로 바꿔 계산하도록 설정을 하면서 편하게 단위를 적용할 수 있었습니다.
                        </p>
                    </li>
                </ul>
                <br />
                <br />
                <h3>커스텀 hook 사용</h3>
                <ul>
                    <li>
                        <p>
                            Toast의 경우 2초 후 사라지는 알림(fireTaost), 사라지지 않고 Y/N 입력을 받는
                            알림(createToast), 에러 시 사용하는 알림(errorToast) 등을{" "}
                            <span className={styles.pointText}>
                                각 상황 별로 custom hook으로 분리하여 재사용성을 향상
                            </span>
                            시켰습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            유저의 로그인 유무, 글쓴이와 같은 유저인지 여부 등 유저 관련한 정보를 custom hook으로
                            분리하여 재사용성을 향상시켰습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            반복적으로 사용되는 react-query의 요청의 경우 hook으로 관리하여{" "}
                            <span className={styles.pointText}>불필요한 코드의 반복을 방지</span>할 수 있었습니다.
                        </p>
                    </li>
                </ul>
                <h3>공통 컴포넌트 모듈화</h3>
                <ul>
                    <li>
                        <p>
                            Pagination, Toast, Modal 과 같은 컴포넌트들을 모듈화하여 전역적으로 사용하여 재사용성과
                            유지보수성을 향상시켰습니다.
                        </p>
                    </li>
                </ul>
                <h3>채팅</h3>
                <ul>
                    <li>
                        <p>
                            웹소켓 통신 라이브러리인{" "}
                            <a href="https://www.npmjs.com/package/websocket-client">
                                <span className={styles.linkText}>websocket-client</span>
                            </a>
                            를 사용하여 채팅을 구현하였습니다.
                        </p>
                    </li>
                </ul>
            </TextContainer>
            <TextContainer title="💡 문제 해결 경험">
                <h3>Skeleton UI</h3>
                <p>
                    Skeleton UI는{" "}
                    <span className={styles.pointText}>
                        실제 데이터가 렌더링 되기 전에 보이게 될 화면의 윤곽을 먼저 그려주는 로딩 애니메이션
                    </span>
                    입니다.
                </p>
                <br />
                <strong>도입 계기</strong>
                <ul>
                    <li>
                        <p>
                            페이지에 처음 접속하여 데이터 요청을 할 경우{" "}
                            <span className={styles.pointText}>
                                데이터 응답까지 빈 화면이 보여 작동하지 않는 듯한 인상을 주는 점을 개선하기 위해 로딩
                                UI를 고민
                            </span>
                            하였습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 내용</strong>
                <ul>
                    <li>
                        <p>
                            한 화면에서 여러개의 api를 호출할 경우 로딩 스피너가 겹치게 보이는 문제가 있어 이를 개선하기
                            위해 가장 메인이 되는 api를 호출할 때 Sekeleton UI가 뜨도록 작업하였습니다.
                        </p>
                    </li>
                    <li>
                        <p>tailwindcss에서 기본으로 제공하는 animation인 pulse를 활용하여 구현하였습니다.</p>
                    </li>
                </ul>
                <strong>작업 결과</strong>
                <br />
                <img src={LoadingSekeleton} alt="" className={styles.gifContainer} />
            </TextContainer>
            <TextContainer title="📈 성장 경험">
                <strong>팀장으로서의 역할</strong>
                <ul>
                    <li>
                        <p>
                            팀을 리드하는 팀장으로서 전체적인 개발 일정 조율과 github project를 통한 일정관리를
                            하였습니다. 또한 데일리 미팅을 통해 이슈 공유 및 소통을 리드하는 역할을 담당하였습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            프론트엔드 팀을 리드하는 팀장으로서 개개인의 역량을 가늠하고 프로젝트가 기간 내에 끝날 수
                            있도록 컴포넌트 제작 및 시드 파일 제작 등을 통해 서포트할 수 있도록 노력하였습니다.
                        </p>
                    </li>
                </ul>
                <strong>팀장 역할에 대한 피드백</strong>
                <ul>
                    <li>
                        프로젝트 마무리 후 <span className={styles.pointText}>팀원분들로부터 다음과 같은 피드백</span>을
                        받았습니다.
                    </li>
                    <ul>
                        <li>
                            <p>
                                강점:{" "}
                                <span className={styles.pointText}>
                                    피드백을 빠르게 수용하는 모습과 프로젝트 방향성을 지속적으로 제시해주어 팀원들이
                                    다른 걱정없이 본인이 맡은 기능에만 집중할 수 있게 배려해준 모습이 좋았습니다.
                                </span>
                            </p>
                        </li>
                        <li>
                            <p>
                                개선할 점:{" "}
                                <span className={styles.pointText}>
                                    팀원에게 바라는 것이 있으면 어느 정도는 강하게 요구해도 될 것 같습니다.
                                </span>
                            </p>
                        </li>
                    </ul>
                    <li>
                        <p>
                            프로젝트를 같이 한 팀원분들께 위와 같은 피드백을 받고 스스로를 돌아볼 수 있는 좋은 기회가 된
                            것 같습니다.
                        </p>
                    </li>
                </ul>
                <strong>배포 경험</strong>
                <ul>
                    <li>
                        <p>AWS S3를 이용하여 클라이언트를 배포하는 경험을 할 수 있었습니다.</p>
                    </li>
                </ul>
            </TextContainer>
        </main>
    );
}

export default DevSquad;
