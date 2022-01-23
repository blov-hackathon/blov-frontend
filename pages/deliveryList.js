import React, { useState, useEffect } from "react";
import Layout from "../component/Layout";
import styled from "styled-components";
import Typography from "../component/Typography";
import { useRouter } from "next/router";
import Button from "../component/Button";
import _ from "lodash";
import Footer from "../component/Footer";
import Flex from "../component/Flex";
import axios from "axios";
import Margin from "../component/Margin";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 375px;
  height: 90px;
  background-color: #d84d40;
  opacity: 1;
`;

const BackBtn = styled(Button)`
  border: none;
`;

const BackButton = styled.img`
  width: 16px;
  cursor: pointer;
`;

const TitleTypography = styled(Typography)`
  font-weight: bold;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
`;

const ElementWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  width: 100%;
`;

const BackCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.rgba};
  border-radius: 50%;
  z-index: 1;
  width: 20%;
  height: 50px;
`;

const Arrow = styled.img`
  z-index: 2;
  width: ${(props) => props.width}%;
`;

const Bar = styled.img`
  width: 100%;
  height: 50px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: ${(props) => props.width}%;
`;

const DeliveryInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledName = styled(Typography)`
  font-weight: bold;
  color: #000;
`;

const StyledText = styled(Typography)`
  color: ${(props) => props.color};
`;

const StyledFlex = styled(Flex)`
  position: sticky;
  top: 0;
  z-index: 5;
`;

export default function DeliveryList() {
  const router = useRouter();
  const [token, setToken] = useState();
  const [deliveryList, setDeliveryList] = useState();

  if (typeof window !== "undefined") {
    const item = localStorage.getItem("token");
    if (!item) {
      router.push("/login");
    }
  }

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
    axios(`https://api-dev.blov.us/getDeliveryList`, {
      method: "GET",
      crossDomain: true,
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setDeliveryList(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [token]);

  return (
    <>
      <StyledFlex justify="center" align="center">
        <TitleWrapper>
          <Margin size="35" />
          <Flex justify="space-around" align="center">
            <BackBtn
              onClick={() => router.push("/mywallet")}
              backgroundColor="#d84d40"
            >
              <BackButton src="/temp/temp-back-white.svg" />
            </BackBtn>
            <TitleTypography>헌혈증 전달내역</TitleTypography>
            <div />
          </Flex>
        </TitleWrapper>
      </StyledFlex>
      <Layout>
        {_.map(deliveryList, (data) => (
          <>
            <ElementWrapper
              justify="space-around"
              onClick={() =>
                window.open(`https://rinkeby.etherscan.io/tx/${data.txid}`)
              }
            >
              <BackCircle
                rgba={
                  data.deliveryType == "recieve"
                    ? "rgba(255, 195, 190, 0.32)"
                    : "rgba(176, 191, 242, 0.32)"
                }
              >
                <Arrow
                  src={
                    data.deliveryType == "recieve"
                      ? "delivery/in-arrow.svg"
                      : "delivery/out-arrow.svg"
                  }
                  width="50"
                />
              </BackCircle>
              <ContentWrapper width="60">
                <DeliveryInfo>
                  <StyledName size="16">{data.toUser}</StyledName>
                  <StyledText size="15" color="#c1c1c1">
                    {" "}
                    -{" "}
                  </StyledText>
                  <StyledName size="16">{data.fromUser}</StyledName>
                </DeliveryInfo>
                <DeliveryInfo>
                  <StyledText size="12" color="#c1c1c1">
                    {data.donorCard.donorDate}
                  </StyledText>
                  <StyledText size="15" color="#c1c1c1">
                    {" "}
                    |{" "}
                  </StyledText>
                  <StyledText size="12" color="#c1c1c1">
                    {data.donorCard.donorType}
                  </StyledText>
                  <StyledText size="15" color="#c1c1c1">
                    {" "}
                    |{" "}
                  </StyledText>
                  <StyledText size="12" color="#c1c1c1">
                    {data.donorCard.donorVolume}
                  </StyledText>
                </DeliveryInfo>
              </ContentWrapper>
            </ElementWrapper>
            <Bar src="delivery/row-bar.svg" />
          </>
        ))}
      </Layout>
      <Flex justify="center" align="center">
        <Footer />
      </Flex>
    </>
  );
}
