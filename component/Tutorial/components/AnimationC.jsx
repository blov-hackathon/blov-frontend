import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const scaleUp = keyframes`
0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const Insta = styled.img`
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  height: 270px;
  width: 100%;
  animation-name: ${(props) => props.animation && scaleUp};
  animation-duration: 3s;
  animation-fill-mode: both;
`;

const AnimationC = ({ animation }) => (
  <Wrapper>
    <Insta animation={animation} src="/tutorial/delivery.svg" />
  </Wrapper>
);

AnimationC.propTypes = {
  animation: PropTypes.bool,
};

AnimationC.defaultProps = {
  animation: false,
};

export default AnimationC;
