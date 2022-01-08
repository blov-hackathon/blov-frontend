import styled from "styled-components";

const Typography = styled.div`
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) => (props.size ? props.size : "inherit")}px;
  line-height: 1.5;
  white-space: pre-wrap;
  z-index: inherit;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
`;

export default Typography;
