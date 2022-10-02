import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext, modalActions } from "../state/modals";

const Setting = styled.div`
  min-width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background-color: #262b3d;
  transition: 300ms ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

const Settings = () => {
  const { dispatch } = useContext(ModalContext) as { dispatch: any };

  return (
    <Setting
      onClick={() => dispatch({ type: modalActions.OPEN_SETTING_MODAL })}
    >
      <img src="Setting.svg" alt="setting" />
    </Setting>
  );
};

export default Settings;
