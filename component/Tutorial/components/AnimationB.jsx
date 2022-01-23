import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const Insta = styled.img`
  opacity: 0;
  width: 100%;
  animation-name: ${(props) => props.animation && fadeIn};
  animation-duration: 3s;
  animation-fill-mode: forwards;
`;

const AnimationB = ({ animation }) => (
  <Wrapper>
    <Insta animation={animation} src="/tutorial/insta.png" />
  </Wrapper>
);

AnimationB.propTypes = {
  animation: PropTypes.bool,
};

AnimationB.defaultProps = {
  animation: false,
};

export default AnimationB;
