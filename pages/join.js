import { useState } from "react";
import Layout from "../component/Layout";
import Typography from "../component/Typography";
import Button from "../component/Button";
import Margin from "../component/Margin";
import Input from "../component/Input";
import styled, { css } from "styled-components";

const LineMargin = styled(Margin)`
  background-color: #df2a19;
  width: 40px;
  text-align: left;
  margin-bottom: 5px;
`;

const StyledMargin = styled(Margin)``;

const StyledInput = styled(Input)`
  background-color: #f8f8f8;
  border-radius: 60px;
  border: none;
`;

const StyledTitle = styled.div`
  text-align: left;
  font-weight: 600;
`;

const StyledButton = styled(Button)`
  border-radius: 100px;
  border: none;
`;

export default function Join() {
  const [content, setContent] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodtype, setBloodtype] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout>
      {" "}
      <Margin size="40" />
      <StyledTitle>
        <LineMargin size="3" />
        <Typography color="#DF2A19" size="24">
          환영합니다!
        </Typography>
        <Typography color="#DF2A19" size="14">
          쉽고 빠르게 나의 헌혈정보를 확인하세요.
        </Typography>
      </StyledTitle>
      <StyledMargin size="80" />
      <StyledInput
        person
        placeholder="이름을 입력해주세요."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Margin size="10" />
      <StyledInput
        id
        placeholder="전화번호를 입력해주세요."
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Margin size="10" />
      <StyledInput
        blood
        placeholder="혈액형을 입력해주세요."
        value={bloodtype}
        onChange={(e) => setBloodtype(e.target.value)}
      />
      <Margin size="10" />
      <StyledInput
        password
        placeholder="패스워드를 입력해주세요."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledMargin size="60" />
      <StyledButton backgroundColor="red" width="280" height="50">
        <Typography color="#fff" size="16">
          회원가입
        </Typography>
      </StyledButton>
    </Layout>
  );
}
