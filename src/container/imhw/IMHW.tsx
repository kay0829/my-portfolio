import TextContainer from "@component/TextContainer";
import StackItem from "@component/StackItem";

import styles from "./IMHW.module.css";
import IconImHereWork from "@assets/icon-imherework.png";

const stack = ["react", "mobx", "react native", "fastlane", "redux", "styled-component", "ruby on rails", "mysql"];

function IMHW() {
    return (
        <main className={styles.container}>
            <img src={IconImHereWork} alt="" className={styles.iconImg} />
            <h1>근태관리 앱, 아임히어워크</h1>
            <div className={styles.textContainer}>
                <p>아임히어워크는 내근 사원의 근태관리와 방문 일정 등록을 통한 외근 사원 근태관리를 위한 앱입니다.</p>
                <br />
                <p className={styles.grayText}>기간: 2021.07 ~ 2022.09</p>
                <p className={styles.grayText}>담당: APP, Server, 관리자 페이지(Web) 유지보수 및 추가 개발</p>
                <ol className={styles.stackContainer}>
                    {stack.map((v) => (
                        <StackItem stack={v} key={v} />
                    ))}
                </ol>
            </div>

            <TextContainer title="🏷️ 아임히어워크를 담당하면서">
                <p>입사 후 약 1년간 아임히어워크를 전담하여 서비스 운영에 적극적으로 참여하였습니다.</p>
                <br />
                <p>
                    개발은{" "}
                    <span className={styles.pointText}>
                        서비스 유지보수 건 또는 서비스 발전을 위한 기획팀과의 논의를 통해 개발할 내용을 정리 →
                    </span>
                </p>
                <p>
                    <span className={styles.pointText}>
                        지라(Jira) 에픽(Epic) 및 티켓 생성 → 데일리 미팅을 통한 작업 진행률 공유 순
                    </span>
                    으로 진행하였습니다.
                </p>
                <br />
                <p>CS 응대는 zendesk를 통해 사용자의 의견을 직접 듣고 안내드릴 수 있었으며,</p>
                <p>
                    <span className={styles.pointText}>
                        사용자의 서비스에 대한 의견 또는 고객사의 요청의 우선순위를 정리
                    </span>
                    하여 개발 내용에 포함하였습니다.
                </p>
            </TextContainer>

            <TextContainer title="💻 개발 내용">
                <h3>[APP | 서비스 유지보수] 🤖 fastlane 도입</h3>
                <p>
                    Fastlane은 ruby 기반 <span className={styles.pointText}>앱 배포 자동화 툴</span>이며, 커맨드라인으로
                    배포하거나 CI 시스템과의 통합이 용이합니다.
                </p>
                <br />
                <strong>도입 계기</strong>
                <ul>
                    <li>
                        <p>
                            <span className={styles.pointText}>
                                수동 배포의 경우 테스트 앱 및 상용 앱 배포 시 시간이 오래 걸리고 휴먼 에러가 발생할 수
                                있는 단점
                            </span>
                            이 있기에 앱 배포 자동화 툴을 도입하기로 결정하게 되었습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 내용</strong>
                <ul>
                    <li>
                        <p>
                            라이브러리 설치 → (ios) provisioning file 인증 → 빌드 → 업로드 순 으로 스크립트를 ruby 로
                            작성하였습니다.
                        </p>
                    </li>
                    <li>
                        <p>Jenkins Global Properties에서 fastlane 관련 환경 변수를 관리하도록 설정하였습니다.</p>
                    </li>
                    <li>
                        <p>
                            <span className={styles.pointText}>
                                Jenkins의 pipeline을 이용하여 스크립트의 각 단계 별로 진행이 되는지 시각적으로 확인
                            </span>
                            할 수 있도록 각 pipeline을 설정하였습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 결과</strong>
                <ul>
                    <li>
                        <p>
                            fastlane을 도입함으로써 android, ios 모두{" "}
                            <span className={styles.pointText}>배포하는 시간이 최소 20분에서 약 5분 정도로 감소</span>
                            하였습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            한달에 한 번 있는{" "}
                            <span className={styles.pointText}>
                                사내 세미나 시간에 fastlane 도입 관련 내용에 대해 발표
                            </span>
                            하였고, 회사 내 다른 서비스에도 fastlane을 적용하게 되었습니다.
                        </p>
                    </li>
                </ul>
                <br />
                <h3>[Server & Web | 고객사 요청 사항] 일괄 방문 장소 등록 api 개발</h3>
                <strong>도입 계기</strong>
                <ul>
                    <li>
                        <p>
                            방문 일정 등록을 통한 외근 사원 근태관리를 주로 사용하는 고객사에서 방문지를 직접 관리하고
                            있었으며,
                        </p>
                        <p>
                            앞으로 더 많은 외근 방문 장소를 관리해야 하는 상황이 생겨{" "}
                            <span className={styles.pointText}>일괄적으로 방문 장소를 등록하고 싶다는 요청</span>을
                            주셨습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 내용</strong>
                <ul>
                    <li>
                        <p>
                            <span className={styles.pointText}>
                                spreadsheet 타입의 파일을 읽고 쓸 수 있는 라이브러리인{" "}
                            </span>
                            <a href="https://github.com/roo-rb/roo">
                                <span className={styles.linkText}>ROO</span>
                            </a>{" "}
                            를 사용하여 입력된 값을 하나씩 읽을 수 있도록 코드를 작성하였습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span className={styles.pointText}>
                                각 입력값에 대한 유효성 검사를 선행하여, 만약 유효하지 않은 행이 있을 경우 모달을 통해
                                알려
                            </span>
                            드렸습니다.
                        </p>
                    </li>
                    <li>
                        <p>방문 장소 주소에 대한 유효성 검증을 위해 카카오맵 api를 사용하였습니다.</p>
                    </li>
                    <li>
                        <p>
                            방문 장소 등록의 과정은 <span className={styles.pointText}>비동기</span>로 처리하여 다른 api
                            요청 처리에 문제가 생기지 않도록 하였습니다.
                        </p>
                    </li>
                </ul>
            </TextContainer>

            <TextContainer title="💡 문제 해결 경험">
                <h3>[APP | 리팩토링] 화면 로드 속도 개선</h3>
                <p>
                    <span className={styles.pointText}>useCallback</span>은 리액트에서 제공하는 hook으로,{" "}
                    <span className={styles.pointText}>특정 함수를 새로 만들지 않고 재사용</span>하고 싶을 때
                    사용합니다.
                </p>
                <p>
                    <span className={styles.pointText}>useFocusEffect</span>는 react native의 navigation 라이브러리에서
                    제공하는 hook으로, <span className={styles.pointText}>해당 화면이 포커싱되는 그 순간에만 작동</span>
                    하도록 할 때 사용합니다.
                </p>
                <br />
                <strong>도입 계기</strong>
                <ul>
                    <li>
                        <p>
                            오늘의 날짜를 기준으로 주 단위의 날짜를 렌더링하는 함수 부분이 버벅이며{" "}
                            <span className={styles.pointText}>불필요하게 리렌더링</span>되고 있음을 확인하였습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 내용</strong>
                <ul>
                    <li>
                        <p>
                            유저가 앱 사용을 시작할 때 오늘의 날짜를 체크하는데,{" "}
                            <span className={styles.pointText}>
                                날짜의 변화가 있을 때만 함수가 렌더링 될 수 있도록 useCallback을 사용
                            </span>
                            하였습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            그 외 화면에 처음 진입할 때만 실행되어야하는 api 요청 함수의 경우 useFocusEffect와
                            useCallback을 사용하여 불필요한 함수 호출을 막았습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 결과</strong>
                <ul>
                    <li>
                        <p>
                            화면이 버벅거리거나 혹은 불필요한 리렌더링 과정이 보이는 화면이 깔끔하게 보이도록
                            개선하였으며, 이를 통해 특정 화면 로드 속도 또한 개선되었습니다.
                        </p>
                    </li>
                </ul>
                <br />
                <h3>[Web | xss 방어] xss 공격을 막기 위한 html to markdown</h3>
                <p></p>
                <br />
                <strong>도입 계기</strong>
                <ul>
                    <li>
                        <p>
                            <span className={styles.pointText}>
                                사용자 사용성을 위해 익숙한 형태의 에디터를 제공하기 위해 html 에디터를 선택
                            </span>
                            하였으나,
                        </p>
                        <p>
                            <span className={styles.pointText}>xss 공격에 대한 취약성에 대한 방안</span>을
                            고안해보았습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 내용</strong>
                <ul>
                    <li>
                        <p>
                            이를 해결하기 위해 관리자 페이지에서 html 에디터로 글을 작성하되, DB에 저장할 때는 마크다운
                            형식으로 저장하기로 결정하였습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            html ↔ markdown, 양방향으로 파싱할 수 있는 라이브러리인{" "}
                            <a href="https://www.npmjs.com/package/unified">
                                <span className={styles.linkText}>unified</span>
                            </a>
                            를 사용하였습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 결과</strong>
                <ul>
                    <li>
                        <p>
                            등록 시 에디터 작성의 결과로 얻은{" "}
                            <span className={styles.pointText}>html 문자열을 markdown으로 파싱하여 DB에 저장</span>하고,
                        </p>
                        <p>
                            수정 시 DB에서 얻은{" "}
                            <span className={styles.pointText}>markdown 문자열을 html 문자열로 파싱하여 에디터</span>에
                            띄우도록 하였습니다.
                        </p>
                    </li>
                </ul>
                <br />
                <h3>[APP | 위치 정확도] geolocation api</h3>
                <p>
                    geolocation api는 환경에 따라 GPS를 비롯한 Wi-Fi, 휴대전화의 기지국, IP 주소 등에서 위치 정보를
                    알아내는 api입니다.
                </p>
                <br />
                <strong>도입 계기</strong>
                <ul>
                    <li>
                        <p>
                            fake gps 또는 유효하지 않은 위경도에 대한 필터를 할 수 있는 사내 SDK를 활용하여 위치를
                            사용하고 있었으나{" "}
                            <span className={styles.pointText}>
                                단말 gps 자체에서 이전에 오래 머물던 위치 또는 부정확한 위치를 반환할 경우를 대비하기
                                위해
                            </span>{" "}
                            geolocation을 도입하게 되었습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 내용</strong>
                <ul>
                    <li>
                        <p>
                            geolocation의 도입이 유효한지 실험하기 위해 일부 사용자에게만 업데이트를 진행하는 A/B
                            테스트를 진행하였습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            사용자가 위치를 요청할 경우 geolocation 결과를 사용자에게 보여주되,{" "}
                            <span className={styles.pointText}>
                                gps와 geolocation 결과의 거리 차이를 같이 저장하여 어느정도 위치 보정이 되는지 테스트
                            </span>
                            하였습니다.
                        </p>
                    </li>
                </ul>
                <strong>작업 결과</strong>
                <ul>
                    <li>
                        <span className={styles.pointText}>
                            실내에서 요청한 위치의 경우 geolocation 위치가 보정을 해준다는 결과를 테스트를 통해 도출
                        </span>
                        하였고, 모든 사용자에게 적용하였습니다.
                    </li>
                </ul>
            </TextContainer>

            <TextContainer title="📈 성장 경험">
                <strong>자동화의 중요성</strong>
                <ul>
                    <li>
                        <p>기획팀의 제안으로 zendesk 답변 템플릿을 만들어 공유하였습니다.</p>
                    </li>
                    <li>
                        담당자 부재 시 기본적인 응답의 경우 타 담당자도 맡을 수 있었으며, 답변 작성 시간 또한 줄일 수
                        있었습니다.
                    </li>
                    <li>
                        <p className={styles.pointText}>
                            fastlane 도입과 마찬가지로 반복되는 작업을 자동화하거나 규격화하여 개발 외 작업 또는 개발
                            시간을 줄여 효율성을 높이는 방법에 대한 고민과 그 중요성을 알 수 있었습니다.
                        </p>
                    </li>
                </ul>
                <br />
                <strong>애자일 방법론을 통한 프로젝트 관리에 대한 경험</strong>
                <ul>
                    <li>
                        <p>
                            직접 개발 작업 내용을 리스트업하고 우선순위를 조정하는 과정을 통해 매우 책임감을 가지고
                            서비스 개발에 임하게되었습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            각 서비스 팀에 자율적으로 판단을 맡기지만, 주간/데일리 미팅을 통해 피드백을 받아 방향성을
                            바르게 잡을 수 있었습니다.
                        </p>
                    </li>
                    <li>
                        <p>
                            빠른 의사결정과 계획 설정으로 조직이 움직이며, 지라(Jira), 슬랙과 같은 툴을 사용하여 누가
                            어떤 작업을 하는지, 어떤 이슈를 맞이하게 되었는지 바로 확인할 수 있어 매우 효율적인
                            조직형태라는 생각을하게 되었습니다.
                        </p>
                    </li>
                </ul>
            </TextContainer>
        </main>
    );
}

export default IMHW;
