import React, { useState, useEffect } from "react";
import Layout from "../../component/Layout";
import Typography from "../../component/Typography";
import Button from "../../component/Button";
import Margin from "../../component/Margin";
import Footer from "../../component/Footer";
import styled from "styled-components";
import Input from "../../component/Input";
import axios from "axios";

import Link from "next/link";

import { useRouter } from "next/router";
import Flex from "../../component/Flex";

const StyledButton = styled(Button)`
  position: relative;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  text-align: center;
`;

const BackBtn = styled(Button)`
  border: none;
`;

const BackButton = styled.img`
  width: 16px;
  cursor: pointer;
`;

const TitleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr;
  width: 100%;
`;

const TitleTypography = styled(Typography)`
  font-weight: bold;
  color: #000;
  size: 36px;
  text-align: center;
  padding-top: 10px;
`;

const StyledDesc = styled(Typography)`
  position: relative;
  right: 46px;
  font-weight: bold;
  color: #000;
  size: 20px;
`;

const StyledValue = styled.textarea`
  width: 100%;
  height: 100px;
  border: 2px solid #dcdcdc;
  border-radius: 12px;
  background-color: #f8f8f8;
  opacity: 0.6;
  font-size: 12px;
  color: #191919;

  ::placeholder {
    padding: 10px;
  }
`;

export default function DonorDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [token, setToken] = useState();

  const [enable, setEnable] = useState(true);
  const [address, setAddress] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem("token");
      setToken(item);
      if (!item) {
        router.push("/login");
      }
    }
  }, []);

  if (typeof window !== "undefined") {
    const item = localStorage.getItem("token");
    if (!item) {
      router.push("/login");
    }
  }
  const sendDonorCard = () => {
    axios(`https://api-dev.blov.us/sendDonorCard/${id}`, {
      method: "POST",
      crossDomain: true,
      headers: {
        Authorization: `Token ${token}`,
      },
      data: {
        targetId: address,
      },
    })
      .then((res) => {
        console.log("헌혈증 전달에 성공했습니다.");
        router.push(`/deliveryList`);
      })
      .catch((e) => {
        console.log(e);
        alert("헌혈증 전달에 실패했습니다.");
        console.log("헌혈증 전달에 실패했습니다.");
      });
  };
  return (
    <>
      <Layout>
        <TitleGrid>
          <BackBtn onClick={() => router.push("/camera")}>
            <BackButton src="/temp/temp-back.svg" />
          </BackBtn>

          <TitleTypography>주소 입력하기</TitleTypography>
        </TitleGrid>
        <Margin size="40" />
        <StyledDesc>상대방 헌혈지갑 주소</StyledDesc>
        <Margin size="10" />

        <Input
          placeholder="헌혈증을 보내려는 상대방의 헌혈지갑 주소를 입력해주세요."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <Margin size="200" />
        <StyledButton
          backgroundColor="red"
          width="280"
          height="50"
          onClick={sendDonorCard}
        >
          <Typography color="#fff" size="16">
            입력하기
          </Typography>
        </StyledButton>
        <Margin size="54" />
      </Layout>
      <Flex justify="center" align="center">
        <Footer />
      </Flex>
    </>
  );
}
