import Layout from "../component/Layout";
import Typography from "../component/Typography";
import NFT from "../component/NFT";
import axios from "axios";
import React, { Component, useEffect, useState, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import _ from "lodash";
import Margin from "../component/Margin";
import Button from "../component/Button";
import Footer from "../component/Footer";
import Carousel from "nuka-carousel";
import Link from "next/link";
import { useRouter } from "next/router";
import domtoimage from "dom-to-image";
import Toast from "../component/Toast";

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

const ShareLogo = styled.img`
  height: 18px;
`;

const ShareLogoBox = styled.div`
  margin-top: 10px;
  margin-left: 200px;
  float: right;
  width: 30px;
  height: 30px;
  z-index: 5;
  position: absolute;
`;

export default function Wallet() {
  const [nftData, setNftData] = useState([]);
  const [cardList, setCardList] = useState();
  const [active, setActive] = useState(false); // 저장 완료 토스트 메시지용 State
  const router = useRouter();

  const [token, setToken] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem("token");
      setToken(item);
      if (!item) {
        router.push("/login");
      }
    }
  }, []);

  useEffect(() => {
    axios(`https://api-dev.blov.us/getDonorCard`, {
      method: "GET",
      crossDomain: true,
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => {
        setCardList(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [token]);

  useEffect(() => {
    if (active) {
      setTimeout(() => setActive(false), 2000);
    }
  }, [active]);
  const nftRef = useRef();
  const myNft = nftRef.current;
  const handleDownloadNFT = () => {
    domtoimage.toBlob(myNft).then((blob) => {
      saveAs(blob, "my_NFT_blood_donation_from_BLOV.png");
    });
    setActive((active) => !active);
  };
  return (
    <>
      <Layout>
        <Header>
          <Margin size="30" />
          <BoldTypography size="24">나의 헌혈지갑</BoldTypography>
          <Margin size="10" />
          <div style={Menu}>
            <Typography>NFT</Typography>
          </div>
        </Header>
        <Margin size="40" />

        <Carousel
          height="400px"
          width="240px"
          slidesToShow={1} // 한 번에 보여줄 슬라이드의 개수
          cellAlign="center"
          renderCenterLeftControls={({ previousSlide }) => null}
          renderCenterRightControls={({ nextSlide }) => null}
          renderBottomCenterControls={() => null}
        >
          {_.map(cardList, (nftData) => (
            <NTFborder>
              <NFT data={nftData} />
            </NTFborder>
          ))}
        </Carousel>
        <ShareLogoBox onClick={handleDownloadNFT}>
          {" "}
          <ShareLogo src="/mywallet/share-icon.svg" />
        </ShareLogoBox>
        {active && <Toast msg={"저장 완료!"} width={"100%"} />}
      </Layout>

      <Footer />
    </>
  );
}
