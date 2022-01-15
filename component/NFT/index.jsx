import React, { Component, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import Typography from "../Typography";
import Margin from "../Margin";

const StyledTypography = styled(Typography)`
    margin-left: 15px;
    margin-right: 15px;
    color: #df2a19;'
    font-size:24px;
`;

const BoldTypography = styled(Typography)`
    font-weight: bold;
    color: #df2a19;
`;

const NFTstyle = styled.div`
    height: 360px;
    width: 240px;
    border: solid 1px lightgray;
    border-radius: 18px;
`;

const NFTbackground = styled.div`
    height: 250px;
    width: 240px;
`;

const NFTfooter = styled.div`
    height: 80px;
    background-color: #df2a19;
    vertical-align: bottom;
    text-align: right;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
`;

const LogoImage = styled.img`
    height: 40px;
`;

export default function NFT() {
    const [nftData, setNftData] = useState([]);
    /*useEffect(() => {
        axios
            .get("URL이름 우헤헤")
            .then(({ 데이터이름 }) => setNftData(데이터이름));
    }, []);*/
    return (
        <NFTstyle>
            <Margin size="20" />
            <StyledTypography color="#DF2A19" size="16">
                2021.01.19
            </StyledTypography>
            <LogoImage src="/login/main-icon.svg" />
            <NFTbackground>
                <Margin size="170" />
                <StyledTypography color="#DF2A19" size="16">
                    인천멋사혈액원
                </StyledTypography>
                <br></br>
                <BoldTypography>전혈 320ML</BoldTypography>
            </NFTbackground>
            <NFTfooter>
                <Margin size="40" />
                <StyledTypography color="white">01-23-456789</StyledTypography>
            </NFTfooter>
        </NFTstyle>
    );
}

/*
useEffect로 axios로 받아서
get으로 받음
2번
로그인했는지받고
데이터받고->useState
*/
/* 
<Typography>{데이터.날짜}</Typography>
            <LogoImage src="/login/main-icon.svg" />
            <Typography>{데이터.혈액원}</Typography>
            <Typography>{데이터.혈액종류}</Typography>
            <Typography>{데이터.헌혈증번호}</Typography>//
*/
