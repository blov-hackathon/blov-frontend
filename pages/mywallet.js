import Layout from "../component/Layout";
import Typography from "../component/Typography";
import NFT from "../component/NFT";
import React, { Component, useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import _ from "lodash";
import Margin from "../component/Margin";
import Button from "../component/Button";
import Carousel from "nuka-carousel";
import Link from "next/link";

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
  //box-shadow: -10px 20px 20px #000; // 그림자 이상해서 일단 주석 처리 ㅜㅜ
`;

const Menu = {
  alignItems: "left",
};

const qrPopUp = keyframes`
  0% {
    top: 100%
  }
  
  100% {
    top: 0%
  }
`;

const BlackScreen = styled.div`
  height: 100%;
  width: 100%;
  max-width: 375px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
  position: absolute;
  top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  animation: ${(props) =>
    props.active === true
      ? css`
          ${qrPopUp} 0.4s forwards
        `
      : ""};
`;

const QrScreen = styled.div`
  height: 360px;
  width: 100%;
  border: solid 1px lightgray;
  border-radius: 18px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleFlex = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

const BackButton = styled.img`
  width: 16px;
  cursor: pointer;
`;

const QrImg = styled.img`
  width: 70%;
  border: 10px solid red;
  border-radius: 24px;
`;

const DotLine = styled.div`
  height: 30px;
  border: 1px gray;
  width: 100%;
  border-style: none none dashed none;
`;

const QrTypography = styled(Typography)`
  font-weight: bold;
  word-break: break-all;
`;

const ClickButton = styled(Button)`
  background-color: red;
`;

export default function Wallet() {
  const array = [
    { name: "인천 444", blood: "카리나의 피", number: "011111-23-44" },
    { name: "인천 멋사 혈액원2222", blood: "전혈 1000ml", number: "01-23-442" },
    { name: "인천 444", blood: "카리나의 피", number: "011111-23-44" },
    { name: "인천 멋사 혈액원2222", blood: "전혈 1000ml", number: "01-23-442" },
  ];
  const [active, setActive] = useState(false);
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
        width="250px"
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
      <ClickButton onClick={() => setActive((active) => !active)}>
        테스트 버튼
      </ClickButton>
      <BlackScreen active={active}>
        <QrScreen>
          <TitleFlex>
            <Link href="#">
              <BackButton
                src="/temp/temp-close.svg"
                onClick={() => setActive((active) => !active)}
              />
            </Link>
          </TitleFlex>
          <QrImg src="https://chart.googleapis.com/chart?chs=500x500&chld=M%7C1&cht=qr&chl={123}&choe=UTF-8" />
          <DotLine></DotLine>
          <Margin size="20" />
          <QrTypography>
            QEWTESGRGAREHGERSHSERAasdfadsasdfdsafasSFDSAT
          </QrTypography>
        </QrScreen>
      </BlackScreen>
    </Layout>
  );
}

/*
useEffect로 axios로 받아서
get으로 받음
2번
로그인했는지받고
데이터받고->useState
*/
