import React from "react";
import styled, { css } from "styled-components";

export default function SparkleInstance({ color, size, style }) {
  return (
    <div>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        style={style}
      >
        <path d="all that stuff from before" fill={color} />
      </Svg>
    </div>
  );
}
const Svg = styled.svg`
  position: absolute;
  pointer-events: none;
  z-index: 2;
`;
