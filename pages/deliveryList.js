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

const TitleWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 375px;
  height: 90px;
  background-color: #d84d40;
  opacity: 1;
  z-index: 5;
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
  font-size: 22px;
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

export default function DeliveryList() {
  const router = useRouter();
  const [token, setToken] = useState();

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
        setQrData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [token]);

  const deliveryData = [
    {
      senderName: "김멋사",
      receiverName: "박멋사",
      date: "2021.01.19",
      bloodKind: "전혈 320ML",
    },
    {
      senderName: "박멋사",
      receiverName: "김멋사",
      date: "2021.01.19",
      bloodKind: "전혈 320ML",
    },
    {
      senderName: "박멋사",
      receiverName: "송멋사",
      date: "2021.01.19",
      bloodKind: "전혈 320ML",
    },
    {
      senderName: "한멋사",
      receiverName: "박멋사",
      date: "2021.01.19",
      bloodKind: "전혈 320ML",
    },
    {
      senderName: "이멋사",
      receiverName: "박멋사",
      date: "2021.01.19",
      bloodKind: "전혈 320ML",
    },
    {
      senderName: "신멋사",
      receiverName: "박멋사",
      date: "2021.01.19",
      bloodKind: "전혈 320ML",
    },
    {
      senderName: "박멋사",
      receiverName: "손멋사",
      date: "2021.01.19",
      bloodKind: "전혈 320ML",
    },
    {
      senderName: "손멋사",
      receiverName: "박멋사",
      date: "2021.01.19",
      bloodKind: "전혈 320ML",
    },
  ];

  return (
    <>
      <Flex justify="center" align="center">
        <TitleWrapper>
          <BackBtn
            onClick={() => router.push("/login")}
            backgroundColor="#d84d40"
          >
            <BackButton src="/temp/temp-back-white.svg" />
          </BackBtn>
          <TitleTypography>헌혈증 전달내역</TitleTypography>
          <div />
        </TitleWrapper>
      </Flex>
      <Layout>
        {_.map(deliveryData, (data) => (
          <>
            <ElementWrapper
              justify="space-around"
              onClick={() => router.push("/donorDetail")}
            >
              <BackCircle
                rgba={
                  data.receiverName == "박멋사"
                    ? "rgba(255, 195, 190, 0.32)"
                    : "rgba(176, 191, 242, 0.32)"
                }
              >
                <Arrow
                  src={
                    data.receiverName == "박멋사"
                      ? "delivery/in-arrow.svg"
                      : "delivery/out-arrow.svg"
                  }
                  width="50"
                />
              </BackCircle>
              <ContentWrapper width="60">
                <DeliveryInfo>
                  <StyledName size="18">{data.senderName}</StyledName>
                  <Arrow src="delivery/delivery-arrow.svg" width="10" />
                  <StyledName size="18">{data.receiverName}</StyledName>
                </DeliveryInfo>
                <DeliveryInfo>
                  <StyledText size="15" color="#c1c1c1">
                    {data.date}
                  </StyledText>
                  <StyledText size="15" color="#c1c1c1">
                    {" "}
                    |{" "}
                  </StyledText>
                  <StyledText size="15" color="#c1c1c1">
                    {data.bloodKind}
                  </StyledText>
                </DeliveryInfo>
              </ContentWrapper>
            </ElementWrapper>
            <Bar src="delivery/row-bar.svg" />
          </>
        ))}
      </Layout>
      <Footer />
    </>
  );
}
