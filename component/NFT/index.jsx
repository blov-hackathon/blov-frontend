import React, { Component, useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";
import Typography from "../Typography";
import Margin from "../Margin";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const StyledTypography = styled(Typography)`
    margin-left: 18px;
    margin-right: 18px;
    color: ${(props) => (props.color ? props.color : "#df2a19")};
`;

const NFTstyle = styled.div`
    height: 395px;
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

const NFTimageboxGold = styled.div`
    height: 160px;
    width: 240px;
    // background-color: gray;
`;

const NFTimagebox = styled.div`
    height: 395px;
    width: 240px;
    position: absolute;
    z-index: 1;
    border-radius: 18px;
`;
const NFTimage = styled.img`
    height: 150px;
    width: 240px;
`;
const NFTimageSource = styled.img`
    height: 395px;
    width: 240px;
    border-radius: 18px;
`;

const LogoImage = styled.img`
    //margin-left: 40px;
    float: right;
    margin-right: 10px;
    height: 40px;
`;

const ShareLogo = styled.img`
    height: 18px;
`;

const ShareLogoBox = styled.div`
    margin-top: 15px;
    margin-left: 200px;
    float: right;
    width: 30px;
    height: 30px;
    z-index: 5;
    position: absolute;
`;

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
    const router = useRouter();
    //const [isToast, setToast] = useState(false); // 저장 완료 토스트 메시지용 State
    const [nftData, setNftData] = useState(data.data);
    console.log(data);
    const nftRef = useRef();
    const handleDownloadNFT = () => {
        const myNft = nftRef.current;
        domtoimage.toBlob(myNft).then((blob) => {
            saveAs(blob, "my_NFT_blood_donation_from_BLOV.png");
        });
    };

    if (nftData.cardId == "0000") {
        // 특정 case (금장)
        return <NFTgold />;
    }
    return (
        // 일반 case
        <NFTstyle>
            <NFTimagebox
                onClick={() => {
                    nftData.cardImage == null
                        ? router.push("/custom1")
                        : router.push("/donorDetail");
                }}
            >
                <NFTimageSource
                    ref={nftRef}
                    src={
                        nftData.cardImage != "null"
                            ? nftData.cardImage
                            : "/mywallet/default-NFT.png"
                    }
                />
            </NFTimagebox>
            <Margin size="270" />
            <ShareLogoBox onClick={handleDownloadNFT}>
                {" "}
                <ShareLogo src="/mywallet/share-icon.svg" />
            </ShareLogoBox>
        </NFTstyle>
    );
}
