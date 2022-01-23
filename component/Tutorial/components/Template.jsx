import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../../Button";
import Layout from "../../Layout";
import Margin from "../../Margin";

const Animation = styled.div`
  width: 100%;
`;

const Title = styled.div`
  width: 100%;
  font-size: 24px;
  text-align: center;
  line-height: 1.3;
  letter-spacing: -2px;
`;

const StyledTitle = styled.div`
  width: 100%;
  font-size: 40px;
  color: #f68b81;
  text-align: center;
  line-height: 1.3;
  letter-spacing: -2px;
`;

const Subtitle = styled.div`
  width: 100%;
  font-size: 16px;
  color: #686868;
  text-align: center;
  font-weight: 300;
  line-height: 1.3;
  white-space: pre-line;
`;

const StyledButton = styled(Button)`
  border-radius: 100px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  color: white;
`;

export default function Template({ animation, title, subtitle, last }) {
  const router = useRouter();
  return (
    <Layout>
      <Animation>{animation}</Animation>
      {!last && (
        <>
          <Margin size={60} />

          <Title>{title}</Title>
          <Margin size={18} />

          <Subtitle>{subtitle}</Subtitle>
        </>
      )}

      {last && (
        <>
          <StyledTitle>{title}</StyledTitle>
          <Margin size={60} />
          <StyledButton
            backgroundColor="#DF2A19"
            width="230"
            height="50"
            onClick={() => router.push("/login")}
          >
            시작하기
          </StyledButton>
        </>
      )}
    </Layout>
  );
}
Template.propTypes = {
  animation: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  last: PropTypes.bool.isRequired,
};
