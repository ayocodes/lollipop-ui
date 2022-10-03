import React from "react";
import styled from "styled-components";
import Settings from "./Settings";
import Terminal from "./Terminal";

interface ISendProps {
  color: string;
  boxShadow: string;
  children?: React.ReactNode;
}

const SBox = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translate(-50%, 0);
  width: 27rem;
  height: 6rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.6);
  border: 3px solid #ffffff;
`;

const SendButton = styled.div<ISendProps>`
  width: 18rem;
  height: 4rem;
  padding: 1rem;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background-color: ${({ color }) => color};
  box-shadow: ${({ boxShadow }) => `0px 1px 15px ${boxShadow};`};
  transition: box-shadow 300ms;
  cursor: pointer;

  :hover {
    box-shadow: ${({ boxShadow }) => `0px 3px 15px 2px ${boxShadow};`};
  }
`;

const SButtonText = styled.div`
  color: white;
  font-size: 1.25rem;
  align-items: center;
  font-family: "Luckiest Guy";
`;

const Send: React.FC<ISendProps> = ({ color, children, boxShadow }) => {
  return (
    <SBox>
      <SendButton color={color} boxShadow={boxShadow}>
        <SButtonText>{children}</SButtonText>
      </SendButton>
      {/* <Settings /> */}
      <Terminal />
    </SBox>
  );
};

export default Send;
