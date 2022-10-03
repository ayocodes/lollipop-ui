import React from "react";
import styled from "styled-components";
import Router from "next/router";
import AccountDropdown from "./AccountDropdown";
import NetworkDropdown from "./TestnetDropdown";

interface IHeader {
  children: React.ReactNode;
}

const SContainer = styled.div`
  display: flex;
 align-items: center;
  justify-content: space-between;
`;

const SBack = styled.div`
  min-width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background-color: #262b3d;
  cursor: pointer;
  margin-right: 1.5rem;
`;

const STitle = styled.p`
  font-size: 3rem;
  line-height: 3rem;
  color: #4a4f63;
`;

const SBox = styled.div`
position: relative;
  align-items: center;
  display: flex;
`;

const SDropdown = styled.div`
  margin-left: 1.5rem;
  width: 10rem;
  height: 2.5rem;
  cursor: pointer;
  background-color: white;
  border: 2px solid #c8c8c8;
  border-radius: 5px;
  display: grid;
  place-items: center;
  font-size: 1.25rem;
`;

const Header: React.FC<IHeader> = ({ children }) => {
  return (
    <SContainer>
      <SBox>
        <SBack onClick={() => Router.push("/")} >
          <img src="Arrow - Left.svg" alt="" />
        </SBack>
        <STitle>{children}</STitle>
      </SBox>
    </SContainer>
  );
};

export default Header;
