import React, { Component, useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";
import Typography from "../Typography";
import Margin from "../Margin";

const ToastMsgBox = styled.div`
    text-align: center;
    margin: 0 auto;
  
  position: absolute;
  bottom:20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 375px;
  height: 90px;
    border-radius: 30px;
    overflow: hidden;
    font-size: 0.8rem;
    background-color: red;
    z-index: 10000;
`;

export default function Toast({ msg = "토스트 메시지" }) {
    return <ToastMsgBox>{msg}</ToastMsgBox>;
}
