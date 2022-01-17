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

export default function NFT(data) {
    const [nftData, setNftData] = useState(data.data);
    console.log(data);
    return (
        <NFTstyle>
            <Margin size="15" />
            <StyledTypography size="17">
                {nftData.date ? nftData.date : ""}
            </StyledTypography>
            <LogoImage src="/login/main-icon.svg" />
            <NFTbackground>
                <NFTimagebox>
                    <NFTimage src="#" />
                </NFTimagebox>
                <StyledTypography size="16">
                    {nftData.bloodHouse ? nftData.bloodHouse : ""}
                </StyledTypography>
                <StyledTypography size="28">
                    {nftData.bloodKind ? nftData.bloodKind : ""}
                </StyledTypography>
                <ShareLogo src="/mywallet/share-icon.svg" />
                <Margin size="20" />
            </NFTbackground>
            <NFTfooter>
                <Margin size="40" />
                <StyledTypography color="white">
                    {nftData.idNumber ? nftData.idNumber : ""}
                </StyledTypography>
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

<Typography>{데이터.날짜}</Typography>
            <LogoImage src="/login/main-icon.svg" />
            <Typography>{데이터.혈액원}</Typography>
            <Typography>{데이터.혈액종류}</Typography>
            <Typography>{데이터.헌혈증번호}</Typography>//
*/
//<LogoImage src="/login/main-icon.svg" />
