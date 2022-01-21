import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Template from "./components/Template";
import AnimationA from "./components/AnimationA";
import AnimationB from "./components/AnimationB";
import AnimationC from "./components/AnimationC";
import AnimationD from "./components/AnimationD";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${(props) => (props.visible ? "block" : "none")};
  background-color: #ffffff;
  z-index: 9999;
`;

const StyledSlider = styled(Slider)`
  &,
  .slick-track,
  .slick-slide,
  .slick-list,
  .slick-slide > div {
    height: 100%;
  }

  .slick-slide > div {
    cursor: pointer;
    margin: auto;
  }

  .slick-prev {
    color: #a1a1a1;
    width: 30px;
    height: 30px;
  }

  .slick-next {
    color: #a1a1a1;
    width: 30px;
    height: 30px;
  }

  .slick-dots {
    top: 50px;
    bottom: initial;
  }
`;

const Item = styled.div`
  height: 100%;
`;

const Tutorial = () => {
  const [visible, setVisible] = useState(false);
  const [focused, setFocused] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    afterChange: (i) => setFocused(i),
  };

  useEffect(() => {
    if (localStorage.getItem("tutorial") === "true") setVisible(false);
    else setVisible(true);
  }, []);

  return (
    <Wrapper visible={visible}>
      <StyledSlider {...settings}>
        <Item>
          <Template
            animation={<AnimationA animation={focused === 0} />}
            title={
              <>
                세상에 단 하나밖에 없는
                <br />
                헌혈증을 만들어드릴게요!
              </>
            }
            subtitle="직접 선택한 이미지와 문구를 바탕으로 나만의 헌혈증을 만들어드려요."
          />
        </Item>
        <Item>
          <Template
            animation={<AnimationB animation={focused === 1} />}
            title={
              <>
                나만의 헌혈증을
                <br />
                SNS에 공유하세요!
              </>
            }
            subtitle="#세상에 #단하나뿐인 #헌혈증 #BLOV"
          />
        </Item>
        <Item>
          <Template
            animation={<AnimationC animation={focused === 2} />}
            title={
              <>
                당신의 헌혈증을
                <br />
                가치있게 사용하세요!
              </>
            }
            subtitle="당신의 따뜻한 마음이 환자의 목숨을 살릴 수 있습니다."
          />
        </Item>
        <Item>
          <Template
            animation={<AnimationD animation={focused === 3} />}
            title={"BLOV"}
            subtitle="가이드를 찾는 다른 여행자들에게 즐거운 후기를 공유해주세요."
            last
          />
        </Item>
      </StyledSlider>
    </Wrapper>
  );
};

export default Tutorial;
