import React from "react";
import styled, { css } from "styled-components";
import SparkleInstance from "./SparkleInstance";
import "./sparkle.css";

export default function Sparkles({ children }) {
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const DEFAULT_COLOR = "hsl(50deg, 100%, 50%)";
  const generateSparkle = (color = DEFAULT_COLOR) => {
    return {
      id: String(random(10000, 99999)),
      createdAt: Date.now(),
      // Bright yellow color:
      color,
      size: random(10, 20),
      style: {
        // Pick a random spot in the available space
        top: random(0, 100) + "%",
        left: random(0, 100) + "%",
        // Float sparkles above sibling content
        zIndex: 2,
      },
    };
  };

  const sparkle = generateSparkle();
  return (
    <div>
      <Wrapper className="Wrapper">
        <SparkleInstance
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
        <ChildWrapper className="ChildWrapper">{children}</ChildWrapper>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.span`
  position: relative;
  display: inline-block;
`;
const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;
