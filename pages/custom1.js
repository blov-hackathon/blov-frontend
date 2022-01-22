import React, { useEffect, useState } from "react";
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
import Input from "../component/Input";

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

const StyledInput = styled(Input)`
  position: absolute;
  top: 200px;
  width: 120px;
  height: 30px;
  color: #fff;
  background-color: #f8a9a2;
  border: none;
  text-align: center;
  z-index: 9;
`;

export default function Custom1() {
  const router = useRouter();
  const [sampleItem, setSampleItem] = useState();
  const [textResult, setTextResult] = useState("");

  const onPrintText = (e) => {
    const textResult = document.getElementById("textResult").value;
    document.getElementById("textResult").innerText = textResult;
  };

  useEffect(() => {
    console.log(sampleItem);
  }, [sampleItem]);

  return (
    <Layout>
      <TitleGrid>
        <BackBtn onClick={() => router.push("/donorDetail")}>
          <BackButton src="/temp/temp-back.svg" />
        </BackBtn>
        <TitleTypography>나만의 헌혈증 꾸미기</TitleTypography>
      </TitleGrid>

      <Margin size="20" />

      {/* <Canvas sampleItem={sampleItem} initial={initial} /> */}
      <Canvas sampleItem={sampleItem}></Canvas>

      <StyledInput
        value={textResult}
        onkeyup={onPrintText}
        onChange={(e) => setTextResult(e.target.value)}
      />

      <CustomContainer>
        <SubText>이미지 선택하기</SubText>
        <ImagePicker samples={samples.sampleImg} onChange={setSampleItem} />
      </CustomContainer>

      <Margin size="80" />

      <CustomContainer>
        <SubText>한 줄 메세지</SubText>
        <Input
          value={textResult}
          onkeyup={onPrintText}
          onChange={(e) => setTextResult(e.target.value)}
        />
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
