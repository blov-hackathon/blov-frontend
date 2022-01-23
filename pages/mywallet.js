import Layout from "../component/Layout";
import Typography from "../component/Typography";
import NFT from "../component/NFT";
import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import _ from "lodash";
import Margin from "../component/Margin";
import Button from "../component/Button";
import Footer from "../component/Footer";
import Carousel from "nuka-carousel";
import Link from "next/link";
import { useRouter } from "next/router";

const BoldTypography = styled(Typography)`
  font-weight: bold;
`;

const Header = styled.div`
  width: 300px;
  text-align: left;
`;

const NTFborder = styled.div`
  flex-direction: column;
  justify-content: center;
  //box-shadow: -10px 20px 20px #000; // 그림자 이상해서 일단 주석 처리
`;

const Menu = {
  alignItems: "left",
};

export default function Wallet() {
  const [nftData, setNftData] = useState([]);
  const [cardList, setCardList] = useState();
  const router = useRouter();

  const [token, setToken] = useState();

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
    axios(`https://api-dev.blov.us/getDonorCard`, {
      method: "GET",
      crossDomain: true,
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => {
        setCardList(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [token]);
  return (
    <>
      <Layout>
        <Header>
          <Margin size="30" />
          <BoldTypography size="24">나의 헌혈지갑</BoldTypography>
          <Margin size="10" />
          <div style={Menu}>
            <Typography>NFT</Typography>
          </div>
        </Header>
        <Margin size="40" />

        <Carousel
          height="400px"
          width="240px"
          slidesToShow={1} // 한 번에 보여줄 슬라이드의 개수
          cellAlign="center"
          renderCenterLeftControls={({ previousSlide }) => null}
          renderCenterRightControls={({ nextSlide }) => null}
          renderBottomCenterControls={() => null}
        >
          {_.map(cardList, (nftData) => (
            <NTFborder>
              <NFT data={nftData} />
            </NTFborder>
          ))}
        </Carousel>
      </Layout>
      <Footer />
    </>
  );
}
