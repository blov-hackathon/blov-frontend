import React, { useState } from "react";
import Layout from "../component/Layout";
import Typography from "../component/Typography";
import Button from "../component/Button";
import Margin from "../component/Margin";
import styled from "styled-components";
import Link from "next/link";

import { useRouter } from "next/router";

export default function DonorDetail() {
  const [enable, setEnable] = useState(true);

  const StyledButton = styled(Button)`
    border-radius: 100px;
    border: none;
    cursor: pointer;
  `;

  const BackBtn = styled(Button)`
    border: none;
  `;

  const BackButton = styled.img`
    width: 16px;
    cursor: pointer;
  `;

  const CheckImage = styled.img`
    width: 200px;
    position: absolute;
  `;

  const CardImage = styled.img`
    width: 200px;
    box-shadow: 5px 5px 20px #e1e1e1;
    border-radius: 18px;
    border: 1px solid #d4d4d4;
  `;

  const SelectImage = styled(CardImage)`
    opacity: 0.28;
    position: relative;
  `;

  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    row-gap: 15px;
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
  `;

  const StyledDesc = styled(Typography)`
    font-weight: bold;
    color: #000;
    size: 16px;
  `;

  const StyledValue = styled.textarea`
    position: relative;
    width: 90%;
    height: 100px;
    opacity: 0.6;
    color: #191919;
    size: 32px;
  `;

  const router = useRouter();

  if (typeof window !== "undefined") {
    const item = localStorage.getItem("token");
    if (!item) {
      router.push("/login");
    }
  }

  return (
    <Layout>
      <TitleGrid>
        <BackBtn onClick={() => router.push("/camera")}>
          <BackButton src="/temp/temp-back.svg" />
        </BackBtn>

        <TitleTypography>주소 입력하기</TitleTypography>
      </TitleGrid>
      <Margin size="60" />
      <StyledDesc>상대방 헌혈지갑 주소</StyledDesc>

      <Margin size="60" />

      <StyledValue placeholder="헌혈증을 보내려는 상대방의 헌혈지갑 주소를 입력해주세요." />

      <Margin size="300" />

      <Link href={"/donorDetail"}>
        <StyledButton backgroundColor="red" width="280" height="50">
          <Typography color="#fff" size="16">
            입력하기
          </Typography>
        </StyledButton>
      </Link>
    </Layout>
  );
}
