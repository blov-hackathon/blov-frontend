import React, { useState } from "react";
import Layout from "../component/Layout";
import Typography from "../component/Typography";
import Button from "../component/Button";
import Margin from "../component/Margin";
import styled, { css } from "styled-components";
import Link from "next/link";

import { useRouter } from "next/router";
import ImagePicker from "../component/ImagePicker";

export default function Custom1() {
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

  const CardContainer = styled.div`
    position: relative;
    height: 320px;
    width: 100%;
    text-align: center;
  `;

  const OriginCard = styled.img`
    width: 200px;
    box-shadow: 5px 5px 20px #e1e1e1;
    border-radius: 18px;
    border: 1px solid #d4d4d4;
  `;

  const CustomContainer = styled.div`
    position: relative;
    height: 80px;
    width: 100%;
  `;

  const SubText = styled(Typography)`
    font-weight: bold;
    color: #000;
    size: 36px;
    text-align: center;
  `;

  const ImageOption = styled.div``;

  const optionCircle = (image = "", color) => css`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    border: 5px solid #ffffff;
    background-color: ${color || "#000"};
    background-image: url(${image});
    background-size: cover;
    background-position: center;
    cursor: pointer;
    transition: 0.3s all;
  `;

  const router = useRouter();
  const ItemImage = "../login/main-icon.svg";
  return (
    <Layout>
      <TitleGrid>
        <BackBtn onClick={() => router.push("/donorDetail")}>
          <BackButton src="/temp/temp-back.svg" />
        </BackBtn>
        <TitleTypography>나만의 헌혈증 꾸미기 1/2</TitleTypography>
      </TitleGrid>
      <Margin size="40" />
      <CardContainer>
        <OriginCard src="/temp/temp-card.svg" />
      </CardContainer>
      <Margin size="40" />
      <CustomContainer>
        <SubText>이미지 선택하기</SubText>
        <ImageOption>
          {" "}
          <div css={optionCircle(ItemImage, null)} />
        </ImageOption>
        <ImagePicker />
      </CustomContainer>
      <Margin size="40" />

      <Link href={"/donorDetail"}>
        <StyledButton backgroundColor="#9B9B9B" width="280" height="50">
          <Typography color="#fff" size="16">
            다음으로
          </Typography>
        </StyledButton>
      </Link>
    </Layout>
  );
}
