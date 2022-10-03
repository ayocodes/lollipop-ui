import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Text from "./Text";

const SBox = styled.div`
  width: 23rem;
  height: 4rem;
  background-color: #a09f9f;
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

const SaveChange = ({
  state,
  saveChanges,
  resetChanges,
}: {
  state: any;
  saveChanges: (state: any) => void;
  resetChanges: (state: any) => void;
}) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(false);
  }, [state]);

  const memoState = useMemo(() => state, []);

  const handleSave = useCallback(() => {
    saveChanges(state);
    setSaved(true);
  }, [state]);

  const handleReset = useCallback(() => {
    resetChanges(memoState);
    setSaved(true);
  }, [memoState]);

  if (JSON.stringify(state) === JSON.stringify(memoState) || saved) {
    return null;
  }

  return (
    <SBox>
      <Sp>Save changes?</Sp>
      <SBox1>
        <SReset onClick={handleReset}>
          <Sp>Reset</Sp>
        </SReset>
        <SSave onClick={handleSave}>
          <Sp>Save</Sp>
        </SSave>
      </SBox1>
    </SBox>
  );
};

export default SaveChange;
