import Layout from "../component/Layout";
import Typography from "../component/Typography";

const divStyle = {
    width: "300px",
    height: "500px",
};

export default function Home() {
    return (
        <Layout>
            <Typography>hello</Typography>
            <Typography color="red" size="100">
                hihihi
            </Typography>
            <Carousel
                width="400px"
                height="600px"
                slidesToShow={1} // 한 번에 보여줄 슬라이드의 개수
                cellAlign="center"
                renderCenterLeftControls={({ previousSlide }) => null}
                renderCenterRightControls={({ nextSlide }) => null}
                // 좌, 우 이동 버튼 제거
            >
                <div style={divStyle}>
                    <NFT></NFT>
                </div>
                <div style={divStyle}>
                    <NFT></NFT>
                </div>
                <div style={divStyle}>
                    <NFT></NFT>
                </div>
            </Carousel>
        </Layout>
    );
}
