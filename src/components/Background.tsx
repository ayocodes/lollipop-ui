import React from "react";
import styled from "styled-components";

const SBackground = styled.img`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0;
  z-index: -1;
`;

const Background = () => {
  return <SBackground src="background.jpg" />;
};

export default Background;
