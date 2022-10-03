import { ChangeEvent, useCallback, useContext } from "react";
import styled from "styled-components";
import { settingsActions, SettingsContext } from "../state/settings";
import { ModalContext, modalActions } from "../state/modals";
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
  width: 2.4rem;
  height: 2.4rem;
  display: grid;
  place-items: center;
  border-radius: 0.5rem;
  transition: 200ms ease-in-out;
  :hover {
    background-color: #c8c8c8;
  }
`;

const STitle = styled.p`
  padding-top: 1rem;
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

  const { modalState, modalDispatch } = useContext(ModalContext) as {
    modalState: ModalState;
    modalDispatch: any;
  };

  const { settingsState, settingsDispatch } = useContext(SettingsContext) as {
    settingsState: SettingsState;
    settingsDispatch: (x: SettingsAction) => void;
  };

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    settingsDispatch({
      type: settingsActions.CHANGE_INPUT,
      payload: {
        name: e.target.name,
        value: e.target.value,
      } as SettingsPayload,
    });
  }, []);

  const handleSaveChanges = useCallback(() => {
    modalDispatch({ type: modalActions.CLOSE_SETTING_MODAL });
  }, [modalActions]);

  const handleReset = useCallback((state: SettingsState) => {
    settingsDispatch({
      type: settingsActions.RESET_STATE,
      payload: {
        state: state,
      },
    });
  }, []);

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
          <STitle>RPC Url</STitle>
          <SInput
            type="text"
            value={settingsState.rpcUrl}
            onChange={handleInputChange}
            name="rpcUrl"
            autoComplete="off"
          ></SInput>
          <STitle>Public Key</STitle>
          <SInput
            type="text"
            value={settingsState.publicKey}
            onChange={handleInputChange}
            name="publicKey"
            autoComplete="off"
          ></SInput>
          <STitle>Private Key</STitle>
          <SInput
            type="text"
            value={settingsState.privateKey}
            onChange={handleInputChange}
            name="privateKey"
            autoComplete="off"
          ></SInput>
          <STitle>Contract Address</STitle>
          <SInput
            type="text"
            value={settingsState.contractAddress}
            onChange={handleInputChange}
            name="contractAddress"
            autoComplete="off"
          ></SInput>
          <STitle>PG User</STitle>
          <SInput
            type="text"
            value={settingsState.pgUser}
            onChange={handleInputChange}
            name="pgUser"
            autoComplete="off"
          ></SInput>
          <STitle>PG Password</STitle>
          <SInput
            type="text"
            value={settingsState.pgPassword}
            onChange={handleInputChange}
            name="pgPassword"
            autoComplete="off"
          ></SInput>
          <STitle>PG Host</STitle>
          <SInput
            type="text"
            value={settingsState.pgHost}
            onChange={handleInputChange}
            name="pgHost"
            autoComplete="off"
          ></SInput>
          <STitle>PG Port</STitle>
          <SInput
            type="text"
            value={settingsState.pgPort}
            onChange={handleInputChange}
            name="pgPort"
            autoComplete="off"
          ></SInput>
          <STitle>PG Database</STitle>
          <SInput
            type="text"
            value={settingsState.pgDatabase}
            onChange={handleInputChange}
            name="pgDatabase"
            autoComplete="off"
          ></SInput>
        </SBody>
        <SaveChange
          state={settingsState}
          saveChanges={() => handleSaveChanges()}
          resetChanges={(state) => handleReset(state)}
        />
      </SSchema>
    </SModal>
  );
};

export default SettingModal;
