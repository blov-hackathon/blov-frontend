import React, { Component, useState, useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";
import Typography from "../Typography";
import Margin from "../Margin";

const qrPopUp = keyframes`
  0% {
    top: 70%
  }
  
  100% {
    top: 0%
  }
`;
const ToastMsgBox = styled.div`
    left: 50%;
    top: 50%;
    margin: 0 auto;
    position: absolute;
    bottom: 15%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: ${(props) => (props.height ? props.height : "35px")};
    width: ${(props) => (props.color ? props.color : "120px")};
    text-align: center;
    transform: translate(-50%, -50%);
    z-index: 1000;
    background: rgba(260, 0, 0, 0.5);
    color: white;
    border-radius: 50px;
    animation: ${(props) =>
        props.active == true
            ? css`
                  ${qrPopUp} 0.8s forwards
              `
            : ""};
`;

export default function Toast({ msg = "토스트 메시지" }) {
    return <ToastMsgBox>{msg}</ToastMsgBox>;
}
