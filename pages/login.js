import { useState } from "react";
import Layout from "../component/Layout";
import Typography from "../component/Typography";
import Button from "../component/Button";
import Margin from "../component/Margin";
import styled, { css } from "styled-components";

const StyledMargin = styled(Margin)`
  border: 1px solid red;
  width: 60px;
`;

const StyledButton = styled(Button)`
  border-radius: 100px;
  border: none;
`;
import Input from "../component/Input";

export default function Login() {
  const [content, setContent] = useState("");
  console.log(content);
  return (
    <Layout>
      <Margin size="30" />
      <Typography color="#aaa" size="16">
        전화번호
      </Typography>
      <Typography color="#aaa" size="16">
        패스워드
      </Typography>
      <Typography color="#000" size="16">
        로그인 상태 유지
      </Typography>
      <StyledMargin size="360" />
      <StyledButton backgroundColor="red" width="360" height="50">
        <Typography color="#fff" size="16">
          로그인
        </Typography>
      </StyledButton>
      <Margin size="20" />
      <Typography color="#505050" size="16">
        Blov가 처음이신가요?
      </Typography>
      <Typography color="#DF2A19" size="16">
        회원가입하기
      </Typography>
      <Input
        placeholder="학생 이름을 검색하세요"
        id
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </Layout>
  );
}
