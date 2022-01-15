import styled, { css } from "styled-components";
import Layout from "../component/Layout";
import Margin from "../component/Margin";

const LogoImage = styled.img`
    height: 120px;
`;

export default function Start() {
    return (
        <Layout>
            <Margin size="200" />
            <LogoImage src="/login/main-icon.svg" />
        </Layout>
    );
}
