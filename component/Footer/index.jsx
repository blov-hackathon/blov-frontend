import React, { Component, useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import axios from "axios";
import Typography from "../Typography";
import Margin from "../Margin";
import Button from "../Button";
import Layout from "../Layout";
import Link from "next/link";
import { useRouter } from "next/router";
//import QRcode from "../QRcode";

const ElementWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  width: 100%;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: ${(props) => props.width}%;
`;

const StyledText = styled(Typography)`
  color: ${(props) => props.color};
`;
const FooterWrapper = styled.div`
  margin: 0 auto;
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 375px;
  height: 90px;
  box-shadow: 3px -3px 8px #00000029;
  z-index: 5;
  background-color: white;
`;

const FooterBar = styled.img`
  width: 5px;
  height: 60px;
`;

const FooterImage = styled.img`
  width: 100%;
  height: 19px;
`;

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
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: ${(props) => (props.active === true ? "flex" : "none")};
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

export default function Footer() {
  const [active, setActive] = useState(false);
  const [qrImg, setQrImg] = useState();
  const [qrAddress, setQrAddress] = useState();
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
    axios(`https://api-dev.blov.us/getMyAddress`, {
      method: "GET",
      crossDomain: true,
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => {
        setQrAddress(res.data.address);
        setQrImg(
          `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${res.data.address}`
        );
        setQrData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [token]);

  return (
    <FooterWrapper>
      <ElementWrapper justify="space-around">
        <ContentWrapper
          width="47"
          onClick={() => setActive((active) => !active)}
        >
          {
            <BlackScreen active={active}>
              <QrScreen onClick={(e) => e.stopPropagation()}>
                <TitleFlex>
                  <Margin size="10" />
                </TitleFlex>
                <QrImg src={qrImg} />
                <DotLine></DotLine>
                <Margin size="20" />
                <QrTypography>{qrAddress}</QrTypography>
              </QrScreen>
            </BlackScreen>
          }
          <FooterImage src="delivery/wallet-address.svg" />
          <StyledText size="15" color="#878787">
            헌혈지갑 주소
          </StyledText>
        </ContentWrapper>
        <FooterBar src="delivery/footer-colBar.svg" />
        <ContentWrapper width="47" onClick={() => router.push("/deliveryList")}>
          <FooterImage src="delivery/listMore.svg" />
          <StyledText size="15" color="#DF2A19">
            전달내역 더보기
          </StyledText>
        </ContentWrapper>
      </ElementWrapper>
    </FooterWrapper>
  );
}
