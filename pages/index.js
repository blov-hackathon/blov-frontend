import styled, { css } from "styled-components";
import Layout from "../component/Layout";
import Margin from "../component/Margin";
import Link from "next/link";

const LogoImage = styled.img`
    height: 120px;
`;

export default function Start() {
    return (
        <Layout>
            <Margin size="200" />
            <Link href={"/login"}>
                <LogoImage src="/login/main-icon.svg" />
            </Link>
        </Layout>
    );
}
