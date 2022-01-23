import { React, useState } from "react";
import Layout from "../component/Layout";
import Typography from "../component/Typography";
import Button from "../component/Button";
import Margin from "../component/Margin";
import Input from "../component/Input";

import styled, { css } from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";
import Select from "react-select";

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
  cursor: pointer;
  background-color: #fff;
  border: 2px solid #df2a19;

  &:hover {
    background-color: #df2a19;
    color: #fff;
  }
`;

const StyledInput2 = styled(StyledInput)`
  position: absolute;
  margin-top: 150px;
  background-color: #fff;
`;

const StyledSelect = styled(Select)`
  position: relative;
  width: 240px;
  margin-top: 16px;
  margin-left: 40px;
  background-color: #f8f8f8;
`;

const TypographyBtn = styled(Typography)`
  color: #df2a19;
  &:hover {
    color: #fff;
  }
`;

export default function Join() {
  const [content, setContent] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodtype, setBloodtype] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const requestJoin = () => {
    axios(`https://api-dev.blov.us/register`, {
      method: "POST",
      crossDomain: true,
      header: {
        "content-type": "application/json",
      },
      data: {
        name: content,
        phone_number: phone,
        blood_type: bloodtype,
        password: password,
      },
    })
      .then(() => {
        console.log("회원가입에 성공했습니다.");
        router.push("/login");
      })
      .catch((e) => {
        console.log(e);
        console.log("회원가입에 성공했습니다.");
      });
  };
  if (typeof window !== "undefined") {
    const item = localStorage.getItem("myCat");
    console.log(item);
  }

  const bloodtypes = [
    { value: "A+", label: "A형 Rh+" },
    { value: "A-", label: "A형 Rh-" },
    { value: "B+", label: "B형 Rh+" },
    { value: "B-", label: "B형 Rh-" },
    { value: "AB+", label: "AB형 Rh+" },
    { value: "AB-", label: "AB형 Rh-" },
    { value: "O+", label: "O형 Rh+" },
    { value: "O-", label: "O형 Rh-" },
  ];

  return (
    <Layout>
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
      <Margin size="20" />
      <StyledInput
        id
        placeholder="전화번호를 입력해주세요."
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Margin size="10" />

      <StyledInput2 blood />

      <StyledSelect
        options={bloodtypes}
        // onChange={(e) => setBloodtype(e.target.value)}
      />

      <Margin size="30" />

      <StyledInput
        password
        placeholder="패스워드를 입력해주세요."
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledMargin size="60" />
      <StyledButton
        color="#df2a19"
        width="280"
        height="50"
        onClick={requestJoin}
      >
        <TypographyBtn color="black" size="16">
          회원가입
        </TypographyBtn>
      </StyledButton>
    </Layout>
  );
}
