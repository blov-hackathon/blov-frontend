import React, { Component, useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";
import Typography from "../Typography";
import Margin from "../Margin";

const ToastMsgBox = styled.div`
    text-align: center;
    height: ${(props) => (props.height ? props.height : "35px")};
    width: ${(props) => (props.color ? props.color : "120px")};
    position: fixed;
    bottom: 180px;
    border-radius: 30px;
    overflow: hidden;
    font-size: 0.8rem;
    opacity: 0;
    visibility: hidden;
    background: rgba(260, 0, 0, 0.35);
    z-index: 10000;
`;

export default function Toast({ msg = "토스트 메시지" }) {
    return <ToastMsgBox>{msg}</ToastMsgBox>;
}
