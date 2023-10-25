import TextContainer from "@component/TextContainer";

import styles from "./HtmlParsing.module.css";
import IconHtml from "@assets/icon-html.png";
import HTMLParsing from "@assets/html-rendering.png";
import StringToToken from "@assets/string-to-token.png";
import TokenToNode from "@assets/token-to-node.png";

import { LiaExternalLinkAltSolid } from "react-icons/lia";

function HtmlParsing() {
    return (
        <main className={styles.container}>
            <img src={IconHtml} alt="" className={styles.iconImg} />
            <h1>HTML 파싱하기</h1>
            <div className={styles.textContainer}>
                <p>
                    <a className={styles.linkText} href="https://github.com/kay0829/how_brower_work" target="_blank">
                        <LiaExternalLinkAltSolid />
                        <span>깃허브 링크</span>
                    </a>
                </p>
                <p>브라우저 동작원리에 대해 학습하고 HTML 스트링을 받아 파싱하는 모듈을 만들어보았습니다.</p>
                <br />
                <p className={styles.grayText}>2023.02 (개인/10일)</p>
            </div>

            <TextContainer title="💻 개발 내용">
                <h3>HTML 파서 만들기</h3>
                <p>
                    관련 블로깅:{" "}
                    <a
                        className={styles.linkText}
                        href="https://velog.io/@kay_/3-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B3%BC%EC%A0%95-%ED%83%90%EA%B5%AC-HTML-%ED%8C%8C%EC%84%9C"
                        target="_blank"
                    >
                        <LiaExternalLinkAltSolid />
                        <span>🤿 (3) 브라우저 렌더링 과정 탐구 - HTML 파서</span>
                    </a>
                </p>
                <br />
                <p>브라우저 렌더링 과정에서 HTML을 파싱하여 DOM 트리를 생성하는 과정에 대한 학습을 진행하였습니다.</p>
                <img src={HTMLParsing} alt="" className={styles.imgContainer} />
                <p>이후 노드 구현을 위해 임의의 Node 계층 트리를 만들어보았고,</p>
                <p>문자에서 토큰으로 변환하는 과정</p>
                <img src={StringToToken} alt="" className={styles.imgContainer} />
                <p>토큰에서 노드로 변환하는 과정</p>
                <img src={TokenToNode} alt="" className={styles.imgContainer} />
                <p>위 두단계를 거쳐 입력한 Html string을 Node 트리로 구성하는 과정을 구현해보았습니다.</p>
            </TextContainer>
        </main>
    );
}

export default HtmlParsing;
