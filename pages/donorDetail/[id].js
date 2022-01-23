import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../component/Layout";
import Typography from "../../component/Typography";
import Button from "../../component/Button";
import Margin from "../../component/Margin";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../../component/Footer";
import axios from "axios";
import { identity } from "lodash";
import Flex from "../../component/Flex";

export default function DonorDetail() {
  const [enable, setEnable] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  const [token, setToken] = useState();

  const [cardData, setCardData] = useState();

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
    axios(`https://api-dev.blov.us/getDonorDetail/${id}`, {
      method: "GET",
      crossDomain: true,
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => {
        setCardData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  console.log(cardData);

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

  const WarningImage = styled.img`
    width: 100px;
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

  function SendButton() {
    return (
      <div>
        {enable ? (
          <Link href="#">
            <StyledButton
              backgroundColor="#DF2A19"
              width="300"
              height="50"
              onClick={() => router.push(`/camera/${id}`)}
            >
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

        {cardData ? (
          <>
            <CardImage src={cardData.cardImage} />

            <Margin size="40" />

            <Grid>
              <StyledDesc>헌혈일자</StyledDesc>
              <StyledValue>{cardData.donorDate}</StyledValue>

              <StyledDesc>헌혈종류</StyledDesc>
              <StyledValue>
                {cardData.donorType} {cardData.donorVolume}ML
              </StyledValue>

              <StyledDesc>헌혈인</StyledDesc>
              <StyledValue>{cardData.donorName}</StyledValue>

              <StyledDesc>생년월일</StyledDesc>
              <StyledValue>{cardData.donorBirth}</StyledValue>

              <StyledDesc>혈액원명</StyledDesc>
              <StyledValue>{cardData.donorPlace}</StyledValue>

              <StyledDesc>증서번호</StyledDesc>
              <StyledValue>{cardData.cardId}</StyledValue>
              <Margin size="40" />
            </Grid>

            <SendButton />
            <Margin size="100" />
          </>
        ) : (
          <>
            <WarningImage src="/temp/temp-warning.png" />
            <Margin size="40" />
            <h4>현재 사용할 수 없는 헌혈증 입니다.</h4>
          </>
        )}
      </Layout>
      <Flex justify="center" align="center">
        <Footer />
      </Flex>
    </>
  );
}
