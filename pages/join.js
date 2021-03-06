import { React, useState, useEffect } from "react";
import Layout from "../component/Layout";
import Typography from "../component/Typography";
import Button from "../component/Button";
import Margin from "../component/Margin";
import Input from "../component/Input";

import styled, { css } from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";
import Toast from "../component/Toast";
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
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (active) {
            setTimeout(() => setActive(false), 2000);
        }
    }, [active]);
  
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
        console.log("??????????????? ??????????????????.");
        router.push("/login");
      })
      .catch((e) => {
        console.log(e);
        console.log("??????????????? ??????????????????.");
      });
  };
  if (typeof window !== "undefined") {
    const item = localStorage.getItem("myCat");
    console.log(item);
  }

  const bloodtypes = [
    { value: "A+", label: "A??? Rh+" },
    { value: "A-", label: "A??? Rh-" },
    { value: "B+", label: "B??? Rh+" },
    { value: "B-", label: "B??? Rh-" },
    { value: "AB+", label: "AB??? Rh+" },
    { value: "AB-", label: "AB??? Rh-" },
    { value: "O+", label: "O??? Rh+" },
    { value: "O-", label: "O??? Rh-" },
  ];

  return (
    <Layout>
      <Margin size="40" />
      <StyledTitle>
        <LineMargin size="3" />
        <Typography color="#DF2A19" size="24">
          ???????????????!
        </Typography>
        <Typography color="#DF2A19" size="14">
          ?????? ????????? ?????? ??????????????? ???????????????.
        </Typography>
      </StyledTitle>
      <StyledMargin size="80" />
      <StyledInput
        person
        placeholder="????????? ??????????????????."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Margin size="20" />
      <StyledInput
        id
        placeholder="??????????????? ??????????????????."
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
        placeholder="??????????????? ??????????????????."
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
          ????????????
        </TypographyBtn>
      </StyledButton>
            {active && <Toast msg={"?????? ??????!"} width={"100%"} />}
    </Layout>
  );
}
