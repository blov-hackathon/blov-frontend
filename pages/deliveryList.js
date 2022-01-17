import React from "react";
import Layout from "../component/Layout";
import styled from "styled-components";
import Typography from "../component/Typography";
import { useRouter } from "next/router";
import Button from "../component/Button";

const TitleWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 90px;
  background-color: #d84d40;
  opacity: 1;
  z-index: 5;
`;

const BackBtn = styled(Button)`
  border: none;
`;

const BackButton = styled.img`
  width: 16px;
  cursor: pointer;
`;

const TitleTypography = styled(Typography)`
  font-weight: bold;
  color: #ffffff;
  font-size: 22px;
  text-align: center;
`;

const ElementWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  width: 100%;
`;

const BackCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.rgba};
  border-radius: 50%;
  z-index: 1;
  width: 20%;
  height: 50px;
`;

const Arrow = styled.img`
  z-index: 2;
  width: ${(props) => props.width}%;
`;

const Bar = styled.img`
  width: 100%;
  height: 50px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: ${(props) => props.width}%;
`;

const DeliveryInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const DotWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Dot = styled.img`
  width: 60%;
  height: 7px;
`;

const StyledName = styled(Typography)`
  font-weight: bold;
  color: #000;
`;

const StyledText = styled(Typography)`
  color: ${(props) => props.color};
`;

const FooterWrapper = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 90px;
  box-shadow: 3px -3px 8px #00000029;
  z-index: 5;
  background-color: white;
`;

const FooterBar = styled.img`
  width: 5px;
  height: 60px;
`;

const FooterImage = styled.img`
  width: 100%;
  height: 25px;
`;

export default function DeliveryList() {
  const router = useRouter();
  return (
    <>
      <TitleWrapper>
        <BackBtn
          onClick={() => router.push("/login")}
          backgroundColor="#d84d40"
        >
          <BackButton src="/temp/temp-back-white.svg" />
        </BackBtn>
        <TitleTypography>헌혈증 전달내역</TitleTypography>
        <div />
      </TitleWrapper>
      <Layout>
        <ElementWrapper
          justify="space-between"
          onClick={() => router.push("/donorDetail")}
        >
          <BackCircle rgba="rgba(255, 195, 190, 0.32)">
            <Arrow src="delivery/in-arrow.svg" width="50" />
          </BackCircle>
          <ContentWrapper width="60">
            <DeliveryInfo>
              <StyledName size="18">김멋사</StyledName>
              <Arrow src="delivery/delivery-arrow.svg" width="10" />
              <StyledName size="18">박멋사</StyledName>
            </DeliveryInfo>
            <DeliveryInfo>
              <StyledText size="15" color="#c1c1c1">
                2021.01.19
              </StyledText>
              <StyledText size="15" color="#c1c1c1">
                {" "}
                |{" "}
              </StyledText>
              <StyledText size="15" color="#c1c1c1">
                전혈 320ML
              </StyledText>
            </DeliveryInfo>
          </ContentWrapper>
          <DotWrapper>
            <Dot src="delivery/dot.svg" />
            <Dot src="delivery/dot.svg" />
            <Dot src="delivery/dot.svg" />
          </DotWrapper>
        </ElementWrapper>
        <Bar src="delivery/row-bar.svg" />

        <ElementWrapper
          justify="space-between"
          onClick={() => router.push("/donorDetail")}
        >
          <BackCircle rgba="rgba(176, 191, 242, 0.32)">
            <Arrow src="delivery/out-arrow.svg" width="50" />
          </BackCircle>
          <ContentWrapper width="60">
            <DeliveryInfo>
              <StyledName size="18">김멋사</StyledName>
              <Arrow src="delivery/delivery-arrow.svg" width="10" />
              <StyledName size="18">박멋사</StyledName>
            </DeliveryInfo>
            <DeliveryInfo>
              <StyledText size="15" color="#c1c1c1">
                2021.01.19
              </StyledText>
              <StyledText size="15" color="#c1c1c1">
                {" "}
                |{" "}
              </StyledText>
              <StyledText size="15" color="#c1c1c1">
                전혈 320ML
              </StyledText>
            </DeliveryInfo>
          </ContentWrapper>
          <DotWrapper>
            <Dot src="delivery/dot.svg" />
            <Dot src="delivery/dot.svg" />
            <Dot src="delivery/dot.svg" />
          </DotWrapper>
        </ElementWrapper>
        <Bar src="delivery/row-bar.svg" />

        <ElementWrapper
          justify="space-between"
          onClick={() => router.push("/donorDetail")}
        >
          <BackCircle rgba="rgba(255, 195, 190, 0.32)">
            <Arrow src="delivery/in-arrow.svg" width="50" />
          </BackCircle>
          <ContentWrapper width="60">
            <DeliveryInfo>
              <StyledName size="18">김멋사</StyledName>
              <Arrow src="delivery/delivery-arrow.svg" width="10" />
              <StyledName size="18">박멋사</StyledName>
            </DeliveryInfo>
            <DeliveryInfo>
              <StyledText size="15" color="#c1c1c1">
                2021.01.19
              </StyledText>
              <StyledText size="15" color="#c1c1c1">
                {" "}
                |{" "}
              </StyledText>
              <StyledText size="15" color="#c1c1c1">
                전혈 320ML
              </StyledText>
            </DeliveryInfo>
          </ContentWrapper>
          <DotWrapper>
            <Dot src="delivery/dot.svg" />
            <Dot src="delivery/dot.svg" />
            <Dot src="delivery/dot.svg" />
          </DotWrapper>
        </ElementWrapper>
        <Bar src="delivery/row-bar.svg" />

        <ElementWrapper
          justify="space-between"
          onClick={() => router.push("/donorDetail")}
        >
          <BackCircle rgba="rgba(176, 191, 242, 0.32)">
            <Arrow src="delivery/out-arrow.svg" width="50" />
          </BackCircle>
          <ContentWrapper width="60">
            <DeliveryInfo>
              <StyledName size="18">김멋사</StyledName>
              <Arrow src="delivery/delivery-arrow.svg" width="10" />
              <StyledName size="18">박멋사</StyledName>
            </DeliveryInfo>
            <DeliveryInfo>
              <StyledText size="15" color="#c1c1c1">
                2021.01.19
              </StyledText>
              <StyledText size="15" color="#c1c1c1">
                {" "}
                |{" "}
              </StyledText>
              <StyledText size="15" color="#c1c1c1">
                전혈 320ML
              </StyledText>
            </DeliveryInfo>
          </ContentWrapper>
          <DotWrapper>
            <Dot src="delivery/dot.svg" />
            <Dot src="delivery/dot.svg" />
            <Dot src="delivery/dot.svg" />
          </DotWrapper>
        </ElementWrapper>
        <Bar src="delivery/row-bar.svg" />

        <ElementWrapper
          justify="space-between"
          onClick={() => router.push("/donorDetail")}
        >
          <BackCircle rgba="rgba(255, 195, 190, 0.32)">
            <Arrow src="delivery/in-arrow.svg" width="50" />
          </BackCircle>
          <ContentWrapper width="60">
            <DeliveryInfo>
              <StyledName size="18">김멋사</StyledName>
              <Arrow src="delivery/delivery-arrow.svg" width="10" />
              <StyledName size="18">박멋사</StyledName>
            </DeliveryInfo>
            <DeliveryInfo>
              <StyledText size="15" color="#c1c1c1">
                2021.01.19
              </StyledText>
              <StyledText size="15" color="#c1c1c1">
                {" "}
                |{" "}
              </StyledText>
              <StyledText size="15" color="#c1c1c1">
                전혈 320ML
              </StyledText>
            </DeliveryInfo>
          </ContentWrapper>
          <DotWrapper>
            <Dot src="delivery/dot.svg" />
            <Dot src="delivery/dot.svg" />
            <Dot src="delivery/dot.svg" />
          </DotWrapper>
        </ElementWrapper>
        <Bar src="delivery/row-bar.svg" />

        <ElementWrapper
          justify="space-between"
          onClick={() => router.push("/donorDetail")}
        >
          <BackCircle rgba="rgba(176, 191, 242, 0.32)">
            <Arrow src="delivery/out-arrow.svg" width="50" />
          </BackCircle>
          <ContentWrapper width="60">
            <DeliveryInfo>
              <StyledName size="18">김멋사</StyledName>
              <Arrow src="delivery/delivery-arrow.svg" width="10" />
              <StyledName size="18">박멋사</StyledName>
            </DeliveryInfo>
            <DeliveryInfo>
              <StyledText size="15" color="#c1c1c1">
                2021.01.19
              </StyledText>
              <StyledText size="15" color="#c1c1c1">
                {" "}
                |{" "}
              </StyledText>
              <StyledText size="15" color="#c1c1c1">
                전혈 320ML
              </StyledText>
            </DeliveryInfo>
          </ContentWrapper>
          <DotWrapper>
            <Dot src="delivery/dot.svg" />
            <Dot src="delivery/dot.svg" />
            <Dot src="delivery/dot.svg" />
          </DotWrapper>
        </ElementWrapper>
        <Bar src="delivery/row-bar.svg" />

        <ElementWrapper
          justify="space-between"
          onClick={() => router.push("/donorDetail")}
        >
          <BackCircle rgba="rgba(255, 195, 190, 0.32)">
            <Arrow src="delivery/in-arrow.svg" width="50" />
          </BackCircle>
          <ContentWrapper width="60">
            <DeliveryInfo>
              <StyledName size="18">김멋사</StyledName>
              <Arrow src="delivery/delivery-arrow.svg" width="10" />
              <StyledName size="18">박멋사</StyledName>
            </DeliveryInfo>
            <DeliveryInfo>
              <StyledText size="15" color="#c1c1c1">
                2021.01.19
              </StyledText>
              <StyledText size="15" color="#c1c1c1">
                {" "}
                |{" "}
              </StyledText>
              <StyledText size="15" color="#c1c1c1">
                전혈 320ML
              </StyledText>
            </DeliveryInfo>
          </ContentWrapper>
          <DotWrapper>
            <Dot src="delivery/dot.svg" />
            <Dot src="delivery/dot.svg" />
            <Dot src="delivery/dot.svg" />
          </DotWrapper>
        </ElementWrapper>
        <Bar src="delivery/row-bar.svg" />

        <ElementWrapper
          justify="space-between"
          onClick={() => router.push("/donorDetail")}
        >
          <BackCircle rgba="rgba(176, 191, 242, 0.32)">
            <Arrow src="delivery/out-arrow.svg" width="50" />
          </BackCircle>
          <ContentWrapper width="60">
            <DeliveryInfo>
              <StyledName size="18">김멋사</StyledName>
              <Arrow src="delivery/delivery-arrow.svg" width="10" />
              <StyledName size="18">박멋사</StyledName>
            </DeliveryInfo>
            <DeliveryInfo>
              <StyledText size="15" color="#c1c1c1">
                2021.01.19
              </StyledText>
              <StyledText size="15" color="#c1c1c1">
                {" "}
                |{" "}
              </StyledText>
              <StyledText size="15" color="#c1c1c1">
                전혈 320ML
              </StyledText>
            </DeliveryInfo>
          </ContentWrapper>
          <DotWrapper>
            <Dot src="delivery/dot.svg" />
            <Dot src="delivery/dot.svg" />
            <Dot src="delivery/dot.svg" />
          </DotWrapper>
        </ElementWrapper>
        <Bar src="delivery/row-bar.svg" />

        <ElementWrapper
          justify="space-between"
          onClick={() => router.push("/donorDetail")}
        >
          <BackCircle rgba="rgba(255, 195, 190, 0.32)">
            <Arrow src="delivery/in-arrow.svg" width="50" />
          </BackCircle>
          <ContentWrapper width="60">
            <DeliveryInfo>
              <StyledName size="18">김멋사</StyledName>
              <Arrow src="delivery/delivery-arrow.svg" width="10" />
              <StyledName size="18">박멋사</StyledName>
            </DeliveryInfo>
            <DeliveryInfo>
              <StyledText size="15" color="#c1c1c1">
                2021.01.19
              </StyledText>
              <StyledText size="15" color="#c1c1c1">
                {" "}
                |{" "}
              </StyledText>
              <StyledText size="15" color="#c1c1c1">
                전혈 320ML
              </StyledText>
            </DeliveryInfo>
          </ContentWrapper>
          <DotWrapper>
            <Dot src="delivery/dot.svg" />
            <Dot src="delivery/dot.svg" />
            <Dot src="delivery/dot.svg" />
          </DotWrapper>
        </ElementWrapper>
        <Bar src="delivery/row-bar.svg" />

        <ElementWrapper
          justify="space-between"
          onClick={() => router.push("/donorDetail")}
        >
          <BackCircle rgba="rgba(176, 191, 242, 0.32)">
            <Arrow src="delivery/out-arrow.svg" width="50" />
          </BackCircle>
          <ContentWrapper width="60">
            <DeliveryInfo>
              <StyledName size="18">김멋사</StyledName>
              <Arrow src="delivery/delivery-arrow.svg" width="10" />
              <StyledName size="18">박멋사</StyledName>
            </DeliveryInfo>
            <DeliveryInfo>
              <StyledText size="15" color="#c1c1c1">
                2021.01.19
              </StyledText>
              <StyledText size="15" color="#c1c1c1">
                {" "}
                |{" "}
              </StyledText>
              <StyledText size="15" color="#c1c1c1">
                전혈 320ML
              </StyledText>
            </DeliveryInfo>
          </ContentWrapper>
          <DotWrapper>
            <Dot src="delivery/dot.svg" />
            <Dot src="delivery/dot.svg" />
            <Dot src="delivery/dot.svg" />
          </DotWrapper>
        </ElementWrapper>
      </Layout>
      <FooterWrapper>
        <ElementWrapper justify="space-around">
          <ContentWrapper width="47">
            <FooterImage src="delivery/wallet-address.svg" />
            <StyledText size="15" color="#878787">
              헌혈지갑 주소
            </StyledText>
          </ContentWrapper>
          <FooterBar src="delivery/footer-colBar.svg" />
          <ContentWrapper width="47">
            <FooterImage src="delivery/listMore.svg" />
            <StyledText size="15" color="#DF2A19">
              전달내역 더보기
            </StyledText>
          </ContentWrapper>
        </ElementWrapper>
      </FooterWrapper>
    </>
  );
}
