import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ModalContext, modalActions } from "../state/modals";
import ScrollableFeed from "react-scrollable-feed";

const STerminal = styled.div`
  width: 30rem;
  height: 20.5rem;
  background-color: black;
  border-radius: 1.25rem;
  padding: 1.25rem;
  padding-bottom: 0;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const STitle = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.5rem;
`;

const SBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const SP = styled.p`
  color: #bdd3e8;
  font-size: 1rem;
`;

const SModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
  z-index: 2000;
`;

const Terminal = () => {
  const {
    state: { showTerminal },
    dispatch,
  } = useContext(ModalContext) as {
    state: ModalState;
    dispatch: any;
  };

  if (!showTerminal) {
    return null;
  }

  return (
    <SModal
      onClick={() => dispatch({ type: modalActions.CLOSE_TERMINAL_MODAL })}
    >
      <STerminal onClick={(e) => e.stopPropagation()}>
        <STitle>
          <SP>Logs</SP>
        </STitle>
        <SBody>
          <ScrollableFeed></ScrollableFeed>
        </SBody>
      </STerminal>
    </SModal>
  );
};

export default Terminal;
