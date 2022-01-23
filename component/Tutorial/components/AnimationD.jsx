import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const heartBeat = keyframes`
  0% { transform: translate(10px, 10px) scale(1); }
  25% { transform: translate(10px, 10px) scale(1); }
  30% { transform: translate(10px, 10px) scale(1.4); }
  50% { transform: translate(10px, 10px) scale(1.2); }
  70% { transform: translate(10px, 10px) scale(1.4); }
  90% { transform: translate(10px, 10px) scale(1); }
  100% { transform:translate(10px, 10px) scale(1); }
`;

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 280px;
`;

const Insta = styled.img`
  height: 120px;
  width: 70%;
  animation: ${heartBeat} 2s linear infinite;
`;

const AnimationD = ({ animation }) => (
  <Wrapper>
    <Insta animation={animation} src="/login/main-icon.svg" />
  </Wrapper>
);

AnimationD.propTypes = {
  animation: PropTypes.bool,
};

AnimationD.defaultProps = {
  animation: false,
};

export default AnimationD;
