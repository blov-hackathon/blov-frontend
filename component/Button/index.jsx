import styled, { css } from "styled-components";

const Button = styled.button`
  position: relative;
  height: ${(props) => (props.height ? props.height : "50px")};
  width: ${(props) => (props.width ? props.width : "30px")};
  border-radius: 10px;
  font-size: 1rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  color: ${(props) => (props.color ? props.color : "black")};
  z-index: inherit;

  ${(props) =>
    props.round &&
    css`
      border-radius: 24px;
    `}
`;

export default Button;
