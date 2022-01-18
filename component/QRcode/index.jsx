import React, { Component, useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import axios from "axios";
import Typography from "../Typography";
import Margin from "../Margin";
import Button from "../Button";
import Layout from "../Layout";
import Link from "next/link";
import { useRouter } from "next/router";

const qrPopUp = keyframes`
0% {
  top: 100%
}

100% {
  top: 0%
}
`;

const BlackScreen = styled.div`
    height: 100%;
    width: 100%;
    max-width: 375px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
    position: absolute;
    top: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    animation: ${(props) =>
        props.active === true
            ? css`
                  ${qrPopUp} 0.4s forwards
              `
            : ""};
`;

const QrScreen = styled.div`
    height: 360px;
    width: 100%;
    border: solid 1px lightgray;
    border-radius: 18px;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleFlex = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
`;

const BackButton = styled.img`
    width: 16px;
    cursor: pointer;
`;

const QrImg = styled.img`
    width: 70%;
    border: 10px solid red;
    border-radius: 24px;
`;

const DotLine = styled.div`
    height: 30px;
    border: 1px gray;
    width: 100%;
    border-style: none none dashed none;
`;

const QrTypography = styled(Typography)`
    font-weight: bold;
    word-break: break-all;
`;

const ClickButton = styled(Button)`
    background-color: red;
`;

export default function QRcode() {
    //const [active, setActive] = useState(false);
    return (
        <BlackScreen>
            <QrScreen>
                <TitleFlex>
                    <Link href="#">
                        <BackButton
                            src="/temp/temp-close.svg"
                            //onClick={() => setActive((active) => !active)}
                        />
                    </Link>
                </TitleFlex>
                <QrImg src="https://chart.googleapis.com/chart?chs=500x500&chld=M%7C1&cht=qr&chl={123}&choe=UTF-8" />
                <DotLine></DotLine>
                <Margin size="20" />
                <QrTypography>
                    QEWTESGRGAREHGERSHSERAasdfadsasdfdsafasSFDSAT
                </QrTypography>
            </QrScreen>
        </BlackScreen>
    );
}
