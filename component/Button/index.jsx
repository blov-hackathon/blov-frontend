import styled, { css } from "styled-components";

const Button = styled.button`
  position: relative;
  height: ${(props) => (props.height ? props.height : "50")}px;
  width: ${(props) => (props.width ? props.width : "30")}px;
  border: 2px solid 10px;
  border-color: #df2a19;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "600")};
  color: ${(props) => (props.color ? props.color : "#df2a19")};
  z-index: inherit;

  &:hover {
    background-color: #df2a19;
    color: #fff;
  }

  ${(props) =>
    props.round &&
    css`
      background-color: #df2a19;
      border-radius: 24px;
      color: #df2a19;
    `}
`;

export default Button;
