import { useState, useEffect } from "react";
import Layout from "../component/Layout";
import Typography from "../component/Typography";
import Button from "../component/Button";
import Margin from "../component/Margin";
import Input from "../component/Input";
import styled, { css } from "styled-components";
import axios from "axios";
import { keyframes } from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import Toast from "../component/Toast";

const heartBeat = keyframes`
  0% { transform: translate(10px, 10px) scale(1); }
  25% { transform: translate(10px, 10px) scale(1); }
  30% { transform: translate(10px, 10px) scale(1.4); }
  50% { transform: translate(10px, 10px) scale(1.2); }
  70% { transform: translate(10px, 10px) scale(1.4); }
  90% { transform: translate(10px, 10px) scale(1); }
  100% { transform:translate(10px, 10px) scale(1); }
`;

const LogoImage = styled.img`
    height: 100px;
    animation: ${heartBeat} 2s linear infinite;
`;

const StyledMargin = styled(Margin)``;

const StyledInput = styled(Input)`
    background-color: #f8f8f8;
    border-radius: 60px;
    border: none;
`;

const StyledCheck = styled.div`
    text-align: left;
`;

const StyledButton = styled(Button)`
  border-radius: 100px;
  border: 2px solid #df2a19;
  background-color: #fff;
  color: #df2a19;
  cursor: pointer;

  &:hover {
    background-color: #df2a19;
    color: #fff;
  }
`;

const StyledText = styled.div`
    text-align: left;
`;

const StyledTypo = styled(Typography)`
    cursor: pointer;
`;

const TypographyBtn = styled(Typography)`
  &:hover {
    color: #fff;
  }
`;

export default function Login() {
    const [content, setContent] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const [active, setActive] = useState(false);
  
    useEffect(() => {
        if (active) {
            setTimeout(() => setActive(false), 2000);
        }
    }, [active]);
  
  const requestLogin = () => {
        setActive((active) => !active);
    axios(`https://api-dev.blov.us/login`, {
      method: "POST",
      crossDomain: true,
      header: {
        "content-type": "application/json",
      },
      data: {
        phone_number: content,
        password: password,
      },
    })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log("로그인에 성공했습니다.");
        router.push("/mywallet");
      })
      .catch((e) => {
        console.log(e);
        console.log("로그인에 실패했습니다.");
      });
  };
  
  return (
    <Layout>
      <Margin size="100" />
      <LogoImage src="/login/main-icon.svg" />
      <Margin size="50" />
      <StyledInput
        id
        placeholder="전화번호 (010XXXXXXXX)"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Margin size="10" />
      <StyledInput
        password
        placeholder="패스워드"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Margin size="14" />

      <StyledMargin size="60" />
      <StyledButton backgroundColor="#df2a19" width="300" height="60">
        <TypographyBtn color="#df2a19" size="16" onClick={requestLogin}>
          로그인
        </TypographyBtn>
      </StyledButton>
            {active && <Toast msg={"로그인 중"} width={"100%"} />}
      <Margin size="10" />
      <StyledText>
        <Typography color="#505050" size="12">
          Blov가 처음이신가요?
        </Typography>
        &nbsp;
        <Link href={"/join"}>
          <StyledTypo color="#df2a19" size="12">
            회원가입하기
          </StyledTypo>
        </Link>
      </StyledText>
    </Layout>
  );
}
