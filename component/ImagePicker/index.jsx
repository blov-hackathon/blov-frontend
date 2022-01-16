import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import styled, { css } from "styled-components";

const wrapper = css`
  display: flex;
  overflow-x: scroll;
  flex-wrap: nowrap;
  gap: 5px;
  padding: 10px 0;
  ::-webkit-scrollbar {
    width: 15px;
    height: 7px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const itemButton = (image, selected, isBottom) => css`
  flex-basis: 70px;
  flex-grow: 0;
  flex-shrink: 0;
  height: 70px;
  border-radius: 35px;
  border: 5px solid ${selected ? "#0062AD" : "#ffffff"};
  background-color: #ffffff;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: 0.3s all;
`;

const ImagePicker = () => (
  <wrapper>
    <itemButton />
  </wrapper>
);

export default ImagePicker;
