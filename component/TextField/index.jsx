import styled, { css } from "styled-components";
import Input from "../Input";

const StyledInput = styled(Input)`
  width: 100%;
  padding: 14px 20px;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: 3px;
  font-size: 12pt;
`;

const TextField = () => <StyledInput />;

export default TextField;
