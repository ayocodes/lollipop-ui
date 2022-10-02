import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext, modalActions} from "../state/modals";
import SaveChange from "./SaveChange";

const SModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
  z-index: 2000;
`;

const SSchema = styled.div`
  display: flex;
  flex-direction: column;
  width: 27rem;
  background: white;
  border-radius: 1.5rem;
  height: 37.25rem;
  position: relative;
`;

const SHeader = styled.div`
  height: 5rem;
  width: 27rem;
  padding: 2rem;
  border-bottom: 1.5px solid #c8c8c8;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SClose = styled.div`
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  border-radius: 0.5rem;
  transition: 200ms ease-in-out;
  :hover {
    background: ${({ theme }) => theme.accent1};
  }
`;

const STitle = styled.p`
  padding-top: 2rem;
  padding-bottom: 0.5rem;
  color: #4a4f63;
  font-size: 1rem;
`;

const SInput = styled.input`
  font-size: 1.125rem;
  border-radius: 5px;
  color: black;
  font-weight: 300;
  background-color: #e9e9e9;
  resize: none;
  outline: none;
  width: 100%;
  height: 2.8rem;
  padding: 10px 8px;
  border: none;
`;

const Sp = styled.p`
  color: #4a4f63;
`;

const SBody = styled.div`
  padding: 0 2rem;
  padding-bottom: 7rem;
  overflow-y: auto;
`;

const SettingModal = () => {
  const {
    state: { showSettings },
    dispatch,
  } = useContext(ModalContext) as {
    state: ModalState;
    dispatch: any;
  };

  if (!showSettings) {
    return null;
  }

  return (
    <SModal
      onClick={() => dispatch({ type: modalActions.CLOSE_SETTING_MODAL })}
    >
      <SSchema onClick={(e) => e.stopPropagation()}>
        <SHeader>
          <Sp>Settings</Sp>
          <SClose
            onClick={() => dispatch({ type: modalActions.CLOSE_SETTING_MODAL })}
          >
            <img src="close.svg" alt="" />
          </SClose>
        </SHeader>
        <SBody>
          <STitle>DID Seed Key</STitle>
          <SInput></SInput>
          <STitle>Ceramic Node</STitle>
          <SInput></SInput>
          <STitle>Server Endpoint</STitle>
          <SInput></SInput>
        </SBody>
        <SaveChange></SaveChange>
      </SSchema>
    </SModal>
  );
};

export default SettingModal;
