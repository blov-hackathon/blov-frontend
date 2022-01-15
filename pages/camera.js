import Layout from "../component/Layout";
import Typography from "../component/Typography";
import Button from "../component/Button";
import Margin from "../component/Margin";
import styled, { css } from "styled-components";
//import QrReader from "react-qr-reader";
import { useState, useRef } from "react";
import dynamic from "next/dynamic";

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
  const qrRef = useRef(null);
  const [scanResultCamera, setScanResultCamera] = useState("");

  const handleErrorCamera = (error) => {
    console.log("error");
  };

  const handelScanCamera = (result) => {
    if (result) {
      setScanResultCamera(result);
      location.href = "/donorDetail";
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
      <StyledButton backgroundColor="red" width="280" height="50">
        <Typography color="#fff" size="16">
          주소를 직접 입력하시겠어요?
        </Typography>
      </StyledButton>
    </Layout>
  );
}
