import Container from "../components/Container";
import landingImg from "../assets/landing.svg";

function HomePage() {
    return (
        <>
            <div className={StyleSheet.bg}>
                <Container className={styles.container}>
                    <div>
                        <h1>코딩이 처음이라면,<br/><strong>DWOS</strong></h1>
                        <p className={styles.description}>
                        11만명이 넘는 비전공자, 코딩 입문자가 DWOS 무제한 멤버십을 선택했어요.?<br />
                        지금 함께 시작해보실래요?
                        </p>
                    </div>
                    <div className={styles.figure}>
                        <button>지금 시작하기</button>
                    </div>
                    <div>
                        <img src={landingImg}
                            alt="그래프, 모니터, 윈도우, 키보드, 마우스, 자물쇠"
                        />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default HomePage;