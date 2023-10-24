import TextContainer from "@component/TextContainer";
import StackItem from "@component/StackItem";

import styles from "./CashBroom.module.css";
import IconCashBroom from "@assets/icon-cashbroom.png";

const stack = ["react", "typescript", "redux", "ruby on rails", "mysql"];

function CashBroom() {
    return (
        <main className={styles.container}>
            <img src={IconCashBroom} alt="" className={styles.iconImg} />
            <h1>O2O 심부름 플랫폼, 캐시부름</h1>
            <div className={styles.textContainer}>
                <p className={styles.etcText}>현재 서비스 종료된 앱입니다.</p>
                <p>
                    캐시부름은 부름(요청)을 수행하여 포인트를 쌓을수 있고, 사용자 수요에 따라 다양한 부름을 주문할 수
                    있는 서비스입니다.
                </p>
                <br />
                <p className={styles.grayText}>기간: 2022.01 ~ 2022.04</p>
                <p className={styles.grayText}>담당: Server 및 관리자 페이지(Web) 개발</p>
                <ol className={styles.stackContainer}>
                    {stack.map((v) => (
                        <StackItem stack={v} key={v} />
                    ))}
                </ol>
            </div>

            <TextContainer title="🏷️ 캐시부름 서비스를 담당하면서">
                <p>
                    신규 B2C 서비스 캐시부름을 담당하여{" "}
                    <span className={styles.pointText}>
                        서비스의 기획부터 앱 서비스의 필수 기능을 넣은 MVP 앱 런칭까지의 프로세스를 경험
                    </span>
                    할 수 있었습니다.
                </p>
                <br />
                <p>
                    개발은 기획팀과의 사용자 요구사항 정의서, 디자인 시안에 대한 미팅 → 지라(Jira) 티켓 생성 및 작업 →
                    기획팀과의 주간/데일리 미팅을 통해 작업 진행률 공유 순 으로 진행하였습니다.
                </p>
            </TextContainer>
            <TextContainer title="💻 개발 내용">
                <h3>[Web] 타입스크립트 도입</h3>
                <br />
                <strong>도입 계기</strong>
                <ul>
                    <li>
                        <p>
                            기존 프로젝트들에는 PropTypes를 통해 부모 컴포넌트에서 자식 컴포넌트에 전달되는 props에 대한
                            타입을 검사하였습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            하지만 타입스크립트가 점차 강력한 생태계를 가지고 성장하였으며 타 프로젝트에도 점진적 전환이
                            가능하다는 장점이 있어 관리자 페이지 개발 시 도입하게 되었습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 내용</strong>
                <ul>
                    <li>
                        <p className={styles.pointText}>
                            타 프로젝트에서도 사용할 수 있도록 기본적인 typescript, eslint, prettier 설정을
                            진행하였으며, 개발팀과의 논의를 통해 타입 작성 컨벤션을 정하였습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 결과</strong>
                <ul>
                    <li>
                        <p>
                            타입스크립트 관련 플러그인 등을 통해 더욱 편하게 개발할 수 있었으며, 잘못된 타입으로 인한
                            타입 에러 또는 렌더링 에러의 발생률을 현저히 줄일 수 있었습니다.
                        </p>
                    </li>
                </ul>
            </TextContainer>
            <TextContainer title="📈 성장 경험">
                <strong>기획부터 개발 전까지</strong>
                <ul>
                    <li>
                        <p>
                            기획팀의 메인 아이디어에 아이디어를 더하고 필수 기능을 정의하는 과정을 경험할 수 있었습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            API 명세서와 테이블 명세서 등 개발 전 필요한 명세를 문서화하였으며, RESTful API 설계에 대한
                            고민으로 명확한 uri를 작성하고자 노력하였습니다.
                        </p>
                    </li>
                </ul>
                <br />
                <strong>개발 과정</strong>
                <ul>
                    <li>
                        <p>
                            해당 프로젝트는 서버 담당자로서 참여하여 클라이언트 담당자와 소통하며 진행하였으며, 각
                            분야에 대한 이해를 높일 수 있었습니다.
                        </p>
                    </li>
                </ul>
                <br />
                <strong>MVP 앱 런칭 및 소비자 반응 확인</strong>
                <ul>
                    <li>
                        <p>
                            일일 활성 유저(DAU(Daily active Users))의 중요함을 알 수 있었으며, DAU를 높이기 위한 미니
                            게임을 추가로 개발하여 소비자 반응을 확인하였습니다.
                        </p>
                    </li>
                </ul>
            </TextContainer>
        </main>
    );
}

export default CashBroom;
