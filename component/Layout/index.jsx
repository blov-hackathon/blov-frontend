import PropTypes from "prop-types";
import styled from "styled-components";
import Flex from "../Flex";

const Width = styled.div`
  height: 100% !important;
  min-height: 550px;
  max-width: 375px;
  margin: 0 auto;
  padding: 50px;
`;

const StyledFlex = styled(Flex)`
  height: 100% !important;
`;

const Layout = ({ children }) => (
  <Width>
    <StyledFlex justify="center" align="center" direction="column">
      {children}
    </StyledFlex>
  </Width>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
