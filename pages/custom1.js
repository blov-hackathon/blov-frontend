import React, { useState } from "react";
import Layout from "../component/Layout";
import Typography from "../component/Typography";
import Button from "../component/Button";
import Margin from "../component/Margin";
import styled, { css } from "styled-components";
import Link from "next/link";

import { useRouter } from "next/router";
import samples from "../public/data/samples";
import ImagePicker from "../component/ImagePicker";
import Canvas from "../component/Canvas";
import TextField from "../component/TextField";

export default function Custom1() {
  const [enable, setEnable] = useState(true);
  const router = useRouter();

  const [sampleItem, setSampleItem] = useState();
  const [initial, setInitial] = useState("");

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

  const onInitialChange = (e) => {
    const { value } = e.target;
    if (value.length <= 20) {
      setInitial(value.replace(/[^\\!-z]/gi, "").toUpperCase());
    }
  };

  return (
    <Layout>
      <TitleGrid>
        <BackBtn onClick={() => router.push("/donorDetail")}>
          <BackButton src="/temp/temp-back.svg" />
        </BackBtn>
        <TitleTypography>나만의 헌혈증 꾸미기</TitleTypography>
      </TitleGrid>

      <Margin size="20" />

      {/* <OriginCard src="/temp/temp-card.svg" /> */}
      <Canvas sampleItem={sampleItem} />

      <Margin size="20" />

      <CustomContainer>
        <SubText>이미지 선택하기</SubText>
        <ImagePicker samples={samples.sampleImg} onChange={setSampleItem} />
      </CustomContainer>

      <Margin size="80" />

      <CustomContainer>
        <SubText>한 줄 메세지</SubText>
        <TextField value={initial} onChange={onInitialChange} />
      </CustomContainer>

      <Margin size="40" />

      <Link href={"/donorDetail"}>
        <StyledButton backgroundColor="#9B9B9B" width="280" height="50">
          <Typography color="#fff" size="16">
            헌혈증 꾸미기 완료
          </Typography>
        </StyledButton>
      </Link>
    </Layout>
  );
}
