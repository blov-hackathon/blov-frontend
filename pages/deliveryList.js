import Link from "next/link";
import React from "react";
import Layout from "../component/Layout";
import Margin from "../component/Margin";
import styled from "styled-components";
import Typography from "../component/Typography";

export default function DeliveryList() {
  const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 90px;
    background-color: #d84d40;
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

  return (
    <>
      <TitleWrapper>
        <Link href="#">
          <BackButton src="/temp/temp-back-white.svg" />
        </Link>
        <TitleTypography>헌혈증 전달내역</TitleTypography>
        <div />
      </TitleWrapper>
      <Layout></Layout>
    </>
  );
}
