import Layout from "../../component/Layout";
import Typography from "../../component/Typography";
import Button from "../../component/Button";
import Margin from "../../component/Margin";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

import dynamic from "next/dynamic";

import Link from "next/link";

const LogoContainer = styled.div`
  position: relative;
`;

const LogoImage = styled.img`
  height: 60px;
`;

const CameraContainer = styled.div`
  position: relative;
  width: 100%;
  border: 3px red black;
`;

const StyledButton = styled(Button)`
  border-radius: 100px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ffdeeb;
  }
`;

export default function Camera() {
  const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });
  const router = useRouter();
  const { id } = router.query;
  const [token, setToken] = useState();

  const qrRef = useRef(null);
  const [scanResultCamera, setScanResultCamera] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem("token");
      setToken(item);
      if (!item) {
        router.push("/login");
      }
    }
  }, []);

  const handleErrorCamera = (error) => {
    console.log("error");
  };

  const handelScanCamera = (result) => {
    if (result) {
      axios(`https://api-dev.blov.us/sendDonorCard/${id}`, {
        method: "POST",
        crossDomain: true,
        headers: {
          Authorization: `Token ${token}`,
        },
        data: {
          targetId: result,
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
    }
  };

  return (
    <Layout>
      {" "}
      <Margin size="40" />
      <LogoContainer>
        <LogoImage src="/login/main-icon.svg" />
      </LogoContainer>
      <Margin size="60" />
      <CameraContainer>
        <QrReader
          ref={qrRef}
          delay={300}
          style={{ width: "100%" }}
          onError={handleErrorCamera}
          onScan={handelScanCamera}
        />
      </CameraContainer>
      <Margin size="60" />
      <StyledButton
        backgroundColor="red"
        width="280"
        height="50"
        onClick={() => router.push(`/addAddress/${id}`)}
      >
        <Typography color="#fff" size="16">
          주소를 직접 입력하시겠어요?
        </Typography>
      </StyledButton>
    </Layout>
  );
}
