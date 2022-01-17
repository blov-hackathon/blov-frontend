import Layout from "../component/Layout";
import Typography from "../component/Typography";
import NFT from "../component/NFT";
import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import _ from "lodash";
import Margin from "../component/Margin";
import Carousel from "nuka-carousel";

const BoldTypography = styled(Typography)`
    font-weight: bold;
`;

const Header = styled.div`
    width: 300px;
    text-align: left;
`;

const NTFborder = styled.div`
    flex-direction: column;
    justify-content: center;
    //box-shadow: -10px 20px 20px #000; // 그림자 이상해서 일단 주석 처리
`;

const Menu = {
    alignItems: "left",
};

export default function Wallet() {
    const [nftData, setNftData] = useState([]);
    useEffect(() => {
        axios.get("/mywallet").then(({ data }) => setNftData(data));
    }, []);
    const array = [
        {
            name: "이름",
            date: "2022.01.17",
            nftImage: "이미지",
            bloodHouse: "혈액원명",
            bloodKind: "전혈 300ML",
            idNumber: "증서번호",
        },
        {
            name: "이름2",
            date: "2021.12.12",
            nftImage: "이미지122",
            bloodHouse: "혈액원명2",
            bloodKind: "헌혈종류22",
            idNumber: "증서번호1221",
        },
    ];
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
                {_.map(array, (array) => (
                    <NTFborder>
                        <NFT data={array} />
                    </NTFborder>
                ))}
            </Carousel>
        </Layout>
    );
}
