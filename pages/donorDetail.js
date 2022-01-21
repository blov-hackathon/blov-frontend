import React, { useState } from "react";
import Layout from "../component/Layout";
import Typography from "../component/Typography";
import Button from "../component/Button";
import Margin from "../component/Margin";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../component/Footer";

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
    padding-top: 10px;
  `;

  const StyledDesc = styled(Typography)`
    font-weight: bold;
    color: #000;
    size: 32px;
  `;

  const StyledValue = styled(Typography)`
    opacity: 0.6;
    color: #191919;
    size: 32px;
  `;

  function SelectCardImage() {
    return (
      <div>
        {enable ? (
          <CardImage src="/temp/temp-card.svg" />
        ) : (
          <div>
            <CheckImage src="/temp/temp-select.svg" />
            <SelectImage src="/temp/temp-card.svg" />
          </div>
        )}
      </div>
    );
  }

  function SendButton() {
    return (
      <div>
        {enable ? (
          <Link href="#">
            <StyledButton backgroundColor="#DF2A19" width="300" height="50">
              <Typography color="#fff" size="16">
                헌혈증 보내기
              </Typography>
            </StyledButton>
          </Link>
        ) : (
          <StyledButton backgroundColor="#9B9B9B" width="300" height="50">
            <Typography color="#fff" size="16">
              헌혈증 전달완료!
            </Typography>
          </StyledButton>
        )}
      </div>
    );
  }

  const router = useRouter();
  if (typeof window !== "undefined") {
    const item = localStorage.getItem("token");
    if (!item) {
      router.push("/login");
    }
  }
  return (
    <>
      <Layout>
        <TitleGrid>
          <BackBtn onClick={() => router.push("/mywallet")}>
            <BackButton src="/temp/temp-back.svg" />
          </BackBtn>
          <TitleTypography>헌혈증 상세보기</TitleTypography>
        </TitleGrid>
        <Margin size="60" />

        <SelectCardImage />

        <Margin size="40" />

        <Grid>
          <StyledDesc>헌혈일자</StyledDesc>
          <StyledValue>2021.01.19</StyledValue>

          <StyledDesc>헌혈종류</StyledDesc>
          <StyledValue>전혈 320ML</StyledValue>

          <StyledDesc>헌혈인</StyledDesc>
          <StyledValue>김멋사</StyledValue>

          <StyledDesc>생년월일</StyledDesc>
          <StyledValue>2021.01.19</StyledValue>

          <StyledDesc>혈액원명</StyledDesc>
          <StyledValue>인천멋사혈액원</StyledValue>

          <StyledDesc>증서번호</StyledDesc>
          <StyledValue>21-23-456789</StyledValue>
        </Grid>

        <Margin size="40" />

        <SendButton />
      </Layout>
      <Footer />
    </>
  );
}
