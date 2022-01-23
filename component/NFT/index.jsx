import React, { Component, useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";
import Typography from "../Typography";
import Margin from "../Margin";
import Toast from "../Toast";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const ShareLogo = styled.img`
  height: 18px;
  z-index: 10;
`;

const ShareLogoBox = styled.div`
  margin-top: 20px;
  margin-left: 200px;
  float: right;
  width: 30px;
  height: 30px;
  z-index: 5;
  position: absolute;
`;

const LogoImage = styled.img`
  //margin-left: 40px;
  float: right;
  margin-right: 10px;
  height: 40px;
`;

export default function NFT(data) {
  const router = useRouter();
  const [nftData, setNftData] = useState(data.data);
  const [active, setActive] = useState(false); // 저장 완료 토스트 메시지용 State
  const nftRef = useRef();
  const myNft = nftRef.current;

  useEffect(() => {
    if (active) {
      setTimeout(() => setActive(false), 2000);
    }
  }, [active]);

  const handleDownloadNFT = () => {
    window.open(
      `${data.data.cardImage}?download=1&bcdn_filename=my_NFT_blood_donation_from_BLOV.png`
    );
    domtoimage.toBlob(myNft).then((blob) => {
      saveAs(blob, "my_NFT_blood_donation_from_BLOV.png");
    });
    setActive((active) => !active);
  };
  /*if (nftData.cardId == "0000") {
        // 특정 case (금장)
        return <NFTgold />;
    }*/
  return (
    // 일반 case
    <NFTstyle>
      <NFTimagebox
        onClick={() => {
          nftData.cardImage == null
            ? router.push(`/custom/${data.data.cardId}`)
            : router.push(`/donorDetail/${data.data.cardId}`);
        }}
      >
        <NFTimageSource
          ref={nftRef}
          src={
            nftData.cardImage != null
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
      {active && <Toast msg={"저장 완료!"} width={"100%"} />}
    </NFTstyle>
  );
}
