import React, { useEffect, useState } from "react";
import Layout from "../../component/Layout";
import Typography from "../../component/Typography";
import Button from "../../component/Button";
import Margin from "../../component/Margin";
import styled, { css } from "styled-components";
import Link from "next/link";
import axios from "axios";

import { useRouter } from "next/router";
import samples from "../../public/data/samples";
import ImagePicker from "../../component/ImagePicker";
import Canvas from "../../component/Canvas";
import TextField from "../../component/TextField";
import Input from "../../component/Input";

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
  position: relative;
  top: 10px;
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
  width: 160px;
  height: 30px;
  color: #fff;
  background-color: #f8a9a2;
  border: none;
  text-align: center;
  text-overflow: clip;
  z-index: 9;
`;
const TextInput = styled(Input)`
  width: 260px;
`;
export default function Custom1() {
  const router = useRouter();
  const { id } = router.query;
  const [token, setToken] = useState();

  const [sampleItem, setSampleItem] = useState();
  const [textResult, setTextResult] = useState("");

  const onPrintText = (e) => {
    const textResult = document.getElementById("textResult").value;
    document.getElementById("textResult").innerText = textResult;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem("token");
      setToken(item);
      if (!item) {
        router.push("/login");
      }
    }
  }, []);

  const makeDonorCard = () => {
    console.log(sampleItem.id);
    axios(`https://api-dev.blov.us/makeDonorCard/${id}`, {
      method: "POST",
      crossDomain: true,
      headers: {
        Authorization: `Token ${token}`,
      },
      data: {
        inputImageId: sampleItem.id,
        inputText: textResult,
      },
    })
      .then((res) => {
        console.log("NFT ????????? ??????????????????.");
        router.push(`/donorDetail/${id}`);
      })
      .catch((e) => {
        console.log(e);
        console.log("NFT ????????? ??????????????????.");
      });
  };

  return (
    <Layout>
      <TitleGrid>
        <BackBtn onClick={() => router.push("/mywallet")}>
          <BackButton src="/temp/temp-back.svg" />
        </BackBtn>
        <TitleTypography>????????? ????????? ?????????</TitleTypography>
      </TitleGrid>
      <Margin size="20" />
      <Canvas sampleItem={sampleItem} />
      <StyledInput
        value={textResult}
        onkeyup={onPrintText}
        onChange={(e) => setTextResult(e.target.value)}
      />
      <Margin size="40" />
      <CustomContainer>
        <SubText>????????? ????????????</SubText>
        <ImagePicker samples={samples.sampleImg} onChange={setSampleItem} />
      </CustomContainer>
      <Margin size="80" />
      <CustomContainer>
        <SubText>??? ??? ?????????</SubText>
        <TextInput
          value={textResult}
          onkeyup={onPrintText}
          onChange={(e) => setTextResult(e.target.value)}
        />
      </CustomContainer>
      <Margin size="40" />

      <StyledButton
        backgroundColor="#9B9B9B"
        width="280"
        height="50"
        onClick={makeDonorCard}
      >
        <Typography color="#fff" size="16">
          ????????? ????????? ??????
        </Typography>
      </StyledButton>
    </Layout>
  );
}
