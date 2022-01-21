import { useState, useEffect, useCallback } from "react";
import styled, { css } from "styled-components";

import { fabric } from "fabric";

const wrapper = css`
  position: relative;
  width: 80%;
  /* background-color: black; */
  background-image: url("/temp/temp-card.svg");

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  & > div {
    width: 100% !important;
  }
  & canvas {
    width: 100% !important;
  }
`;

const Canvas = ({ sampleItem }) => {
  const [canvas, setCanvas] = useState("");

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 220,
      width: 140,
      backgroundColor: "none",
      selection: false,
    });

  const addImage = useCallback(
    (image, x, y) =>
      new Promise((resolve) => {
        fabric.Image.fromURL(image, (myImg) => {
          const img = myImg.set({
            left: x,
            top: y,
            selectable: false,
            evented: false,
          });
          canvas.add(img);
          resolve();
        });
      }),
    [canvas]
  );

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  useEffect(() => {
    const doAsync = async () => {
      if (!canvas) return;

      canvas.clear();

      // 이미지 추가
      if (sampleItem) await addImage(sampleItem?.image, 10, 40);
      console.log(sampleItem);
    };

    doAsync();
  }, [canvas, sampleItem, addImage]);

  return (
    <div css={wrapper}>
      <canvas id="canvas" />
    </div>
  );
};

export default Canvas;
