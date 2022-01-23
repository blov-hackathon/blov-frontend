import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const moveLeft = keyframes`
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-580px);
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const Slider = styled.img`
  transform: translateX(0px);
  height: 270px;
  animation-name: ${(props) => props.animation && moveLeft};
  animation-duration: 4s;
  animation-iteration-count: 1;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
`;

const AnimationA = ({ animation }) => (
  <Wrapper>
    <Slider animation={animation} src="/tutorial/slider.svg" />
  </Wrapper>
);

AnimationA.propTypes = {
  animation: PropTypes.bool,
};

AnimationA.defaultProps = {
  animation: false,
};

export default AnimationA;
