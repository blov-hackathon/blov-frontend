import Layout from "../component/Layout";
import Typography from "../component/Typography";
import NFT from "../component/NFT";
import React, { Component } from "react";
import styled, { css } from "styled-components";
import Margin from "../component/Margin";
import Carousel from "nuka-carousel";

const Menu = {
    alignItems: "left",
};

const Header = styled.div`
    width: 300px;
    text-align: left;
`;
const NTFborder = styled.div`
    flex-direction: column;
    justify-content: center;
`;

const BoldTypography = styled(Typography)`
    font-weight: bold;
`;

/*
useEffect로 axios로 받아서
get으로 받음
2번
로그인했는지받고
데이터받고->useState
*/

export default function Wallet() {
    return (
        <Layout>
            <Header>
                <Margin size="30" />
                <BoldTypography size="24">나의 헌혈지갑</BoldTypography>
                <Margin size="10" />
                <div style={Menu}>
                    <Typography>NFT</Typography>
                    <Typography>시간순</Typography>
                </div>
            </Header>
            <Margin size="40" />
            <Carousel
                height="390px"
                width="240px"
                slidesToShow={1} // 한 번에 보여줄 슬라이드의 개수
                cellAlign="center"
                renderCenterLeftControls={({ previousSlide }) => null}
                renderCenterRightControls={({ nextSlide }) => null}
                renderBottomCenterControls={() => null}
            >
                <NTFborder>
                    <NFT></NFT>
                </NTFborder>
            </Carousel>
        </Layout>
    );
}
