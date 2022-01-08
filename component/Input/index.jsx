import styled from "styled-components";

const Input = styled.input`
  border: 1px solid black;
  border-radius: 8px;
  font-size: 0.875rem;
  padding: 10px 12px;
  width: 343px;
  height: 60px;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border: 1px solid #3584df;
    box-shadow: 3px -3px 0px #bad1f4, 3px 3px 0px #bad1f4, -3px -3px 0px #bad1f4,
      -3px 3px 0px #bad1f4;
  }

  ${(props) =>
    props.id &&
    `
    background-image: url(/login/phone-icon.svg);
    background-repeat: no-repeat;
    background-position: 20px center;
    padding: 10px 12px 10px 50px;
    `}

  ${(props) =>
    props.password &&
    `
    background-image: url(/login/lock-icon.svg);
    background-repeat: no-repeat;
    background-position: 20px center;
    padding: 10px 12px 10px 50px;
    `}
`;

export default Input;
