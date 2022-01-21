import React, { Component, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import Typography from "../Typography";
import Margin from "../Margin";

const StyledTypography = styled(Typography)`
    margin-left: 18px;
    margin-right: 18px;
    color: ${(props) => (props.color ? props.color : "#df2a19")};
`;

const NFTstyle = styled.div`
    height: 360px;
    width: 240px;
    border: solid 1px lightgray;
    border-radius: 18px;
`;

const NFTmuted = styled.div`
    height: 360px;
    width: 240px;
    border: solid 1px lightgray;
    border-radius: 18px;
    background-color: lightgray;
`;

const NFTbackground = styled.div`
    height: 250px;
    width: 240px;
`;

const NFTfooter = styled.div`
    height: 80px;
    background-color: ${(props) => (props.color ? props.color : "#df2a19")};
    vertical-align: bottom;
    text-align: right;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
`;

const NFTimagebox = styled.div`
    height: 160px;
    width: 240px;
    // background-color: gray;
`;

const NFTimage = styled.img`
    height: 150px;
    width: 240px;
`;

const LogoImage = styled.img`
    //margin-left: 40px;
    float: right;
    margin-right: 10px;
    height: 40px;
`;

const ShareLogo = styled.img`
    margin-top: 15px;
    float: right;
    margin-right: 20px;
    margin-bottom: 10px;
    height: 18px;
`;

function NFTbegin() {
    return (
        <NFTstyle>
            <Margin size="15" />
            <StyledTypography size="17"></StyledTypography>
            <LogoImage src="/login/main-icon.svg" />
            <NFTbackground>
                <Margin size="50" />
                <StyledTypography size="20" color="">
                    BLOV가 처음이시네요!
                    <Margin size="30" />
                    <StyledTypography size="15">
                        지금 바로
                        <br />
                        나만의 전자헌혈증을
                        <br />
                        만들어보세요
                    </StyledTypography>
                </StyledTypography>
                <Margin size="20" />
            </NFTbackground>
            <NFTfooter>
                <Margin size="40" />
                <StyledTypography color="white"></StyledTypography>
            </NFTfooter>
        </NFTstyle>
    );
}

function NFTgold() {
    return (
        <NFTstyle>
            <Margin size="15" />
            <StyledTypography size="17"></StyledTypography>
            <LogoImage src="/login/main-icon.svg" />
            <NFTbackground>
                <Margin size="180" />
                <StyledTypography size="15" color="#FFCC00">
                    영예의 금장
                </StyledTypography>
                <StyledTypography size="24" color="#FFCC00">
                    헌혈 10회 달성!
                </StyledTypography>
                <ShareLogo src="/mywallet/share-icon-gold.svg" />
            </NFTbackground>
            <NFTfooter color="#FFCC00">
                <Margin size="40" />
                <StyledTypography color="white">01-22-516</StyledTypography>
            </NFTfooter>
        </NFTstyle>
    );
}

export default function NFT(data) {
    const [nftData, setNftData] = useState(data.data);
    console.log(data);
    if (!nftData.nftImage) {
        // 이미지 넘어온 거 없음
        return <NFTbegin />;
    } else if (nftData.idNumber == "0000") {
        // 특정 case (금장)
        return <NFTgold />;
    }
    return (
        // 일반 case
        <NFTstyle>
            <Typography>대충 NFT 이미지 들어갈 곳</Typography>
            <ShareLogo src="/mywallet/share-icon.svg" />
        </NFTstyle>
    );
}
