import { useState, useEffect } from "react";
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

const sampleButton = (image, selected) => css`
  flex-basis: 70px;
  flex-grow: 0;
  flex-shrink: 0;
  height: 70px;
  border: 3px solid ${selected ? "#0062AD" : "#ffffff"};
  border-radius: 35px;
  background-color: #fff;
  background-image: url(${image.src});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: 0.3s all;
`;

const ImagePicker = ({ samples, onChange }) => {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    onChange(samples[selected]);
  }, [samples]);

  const onClick = (i) => {
    if (selected === i) setSelected(null);
    else setSelected(i);
  };

  return (
    <div css={wrapper}>
      {_.map(samples, (sample, i) => (
        <div
          key={sample.id}
          css={sampleButton(sample.image, selected === i)}
          onClick={() => onClick(i)}
        />
      ))}
    </div>
  );
};

export default ImagePicker;
