import styled, { css } from "styled-components";

const Button = styled.button`
  position: relative;
  height: ${(props) => (props.height ? props.height : "50")}px;
  width: ${(props) => (props.width ? props.width : "30")}px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "600")};
  color: ${(props) => (props.color ? props.color : "black")};
  z-index: inherit;

  ${(props) =>
    props.round &&
    css`
      border-radius: 24px;
    `}
`;

export default Button;
