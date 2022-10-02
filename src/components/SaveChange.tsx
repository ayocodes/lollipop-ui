import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const SBox = styled.div`
  width: 23rem;
  height: 4rem;
  background: ${({ theme }) => theme.accent1};
  z-index: 1;
  position: absolute;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;
  border-radius: 5px;
  bottom: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
`;

const SSave = styled.div`
  width: 4.8rem;
  height: 1.85rem;
  display: grid;
  place-items: center;
  border-radius: 5px;
  background: ${({ theme }) => theme.accent2};
  cursor: pointer;
`;

const SReset = styled.div`
  width: 4rem;
  height: 1.85rem;
  margin-right: 1rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  :hover {
    text-decoration: underline white 1px;
  }
`;

const Sp = styled.p`
  font-size: 14px;
  color: white;
`;
const SBox1 = styled.div`
  display: flex;
  user-select: none;
`;

const SaveChange = () => {

  return (
    <SBox>
      <Sp>Save changes?</Sp>
      <SBox1>
        <SReset>
          <Sp>Reset</Sp>
        </SReset>
        <SSave>
          <Sp>Save</Sp>
        </SSave>
      </SBox1>
    </SBox>
  );
};

export default SaveChange;
