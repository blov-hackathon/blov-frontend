import { useState, useEffect, useCallback } from "react";
import styled, { css } from "styled-components";

import { fabric } from "fabric";

const wrapper = css`
  position: relative;
  width: 100%;
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

const CanvasCard = ({ topItem }) => {
  const [canvas, setCanvas] = useState("");

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 1080,
      width: 1080,
      backgroundColor: "#ffffff",
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

      // 상단 아이템 추가
      if (topItem) await addImage(topItem?.image, 0, 0);
    };

    doAsync();
  }, [canvas, topItem, addImage]);

  return (
    <div css={wrapper}>
      <canvas id="canvas" />
    </div>
  );
};

Canvas.propTypes = {
  topItem: PropTypes.object,
};

Canvas.defaultProps = {
  topItem: null,
};

export default CanvasCard;
