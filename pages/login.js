import { useState } from "react";
import Layout from "../component/Layout";
import Typography from "../component/Typography";
import Button from "../component/Button";
import Margin from "../component/Margin";
import Input from "../component/Input";
import styled, { css } from "styled-components";
import Link from "next/link";

const LogoImage = styled.img`
  height: 100px;
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
  border: none;
`;

const StyledText = styled.div`
  text-align: left;
`;

export default function Login() {
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout>
      <Margin size="100" />
      <LogoImage src="/login/main-icon.svg" />
      <Margin size="20" />
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
        onChange={(e) => setPassword(e.target.value)}
      />
      <Margin size="10" />
      <StyledCheck>
        <Typography color="#000" size="12">
          로그인 상태 유지
        </Typography>
      </StyledCheck>
      <StyledMargin size="60" />
      <StyledButton backgroundColor="red" width="300" height="60">
        <Typography color="#fff" size="16">
          로그인
        </Typography>
      </StyledButton>
      <Margin size="5" />
      <StyledText>
        <Typography color="#505050" size="12">
          Blov가 처음이신가요?
        </Typography>
        &nbsp;
        <Link href={"/join"}>
          <Typography color="#DF2A19" size="12">
            회원가입하기
          </Typography>
        </Link>
      </StyledText>
    </Layout>
  );
}
