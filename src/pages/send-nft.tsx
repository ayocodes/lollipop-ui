import React, { ChangeEvent, useCallback, useContext } from "react";
import styled from "styled-components";
import Send from "../components/Send";
import Header from "../components/Header";
import { SettingsContext } from "../state/settings";
import { sendNFTActions, SendNFTContext } from "../state/sendNFT";
import deployValues, { deployActions } from "../utils/deployValues";

const SBody = styled.div`
  display: flex;
  justify-content: center;
`;

const SMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  margin: 1rem;
  margin-bottom: 5rem;
  max-width: 59rem;
`;

const SAddress = styled.input`
  font-size: 1.125rem;
  border-radius: 5px;
  color: #4a4f63;
  background-color: white;
  resize: none;
  outline: none;
  width: 21.5rem;
  height: 3rem;
  padding: 10px 8px;
  border: 1.5px solid #c8c8c8;
  margin-right: 1rem;
`;

const STokenID = styled(SAddress)`
  width: 11ch;
`;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

const SContainer2 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const SClose = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: 250ms ease-out;
  :hover {
    background-color: #c8c8c8;
  }
`;

const SAddressTitle = styled.div`
  width: 21.5rem;
  font-size: 1.5rem;
  color: #696969;
`;
const STokenIDInput = styled.div`
  /* width: 9ch; */
  font-size: 1.5rem;
  margin-right: 1.3rem;
  color: #696969;
`;

const SAddField = styled.div`
  width: 15rem;
  height: 3rem;
  cursor: pointer;
  background-color: white;
  border: 2px solid #c8c8c8;
  border-radius: 5px;
  display: grid;
  place-items: center;
  margin-top: 3rem;
  font-size: 1.25rem;
  transition: 300ms ease-in-out;
  :hover {
    background-color: #c8c8c8;
  }
`;

const SendNFT = () => {
  const { sendNFTState, sendNFTDispatch } = useContext(SendNFTContext) as {
    sendNFTState: SendNFTState;
    sendNFTDispatch: any;
  };

  const { settingsState } = useContext(SettingsContext) as {
    settingsState: SettingsState;
  };

  const handleSubmit = () => {
    deployValues({
      config: settingsState,
      values: sendNFTState,
      action: deployActions.TRANSFER_NFT,
    });
  };

  const handleAddField = useCallback(() => {
    sendNFTDispatch({
      type: sendNFTActions.ADD_FIELD,
    });
  }, []);

  return (
    <SBody>
      <SMain>
        <Header>Transfer NFT</Header>
        <SContainer>
          <SContainer2>
            <STokenIDInput>Token-ID</STokenIDInput>
            <SAddressTitle>To Address</SAddressTitle>
          </SContainer2>
          {sendNFTState.map((e, i) => (
            <SendNFTInputUI
              key={i}
              sendNFTObject={e}
              index={i}
              sendNFTDispatch={sendNFTDispatch}
            />
          ))}
          <SAddField onClick={handleAddField}>Add Another Field</SAddField>
        </SContainer>
        <Send
          boxShadow={"rgba(255, 48, 112, 0.5)"}
          color={"#FF3070"}
          func={handleSubmit}
        >
          Send
        </Send>
      </SMain>
    </SBody>
  );
};

export default SendNFT;

interface ISendNFTInputUI {
  sendNFTObject: SendNFTObject;
  index: number;
  sendNFTDispatch: (x: SendNFTAction) => void;
}

const SendNFTInputUI: React.FC<ISendNFTInputUI> = ({
  sendNFTObject,
  index,
  sendNFTDispatch,
}) => {
  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    sendNFTDispatch({
      type: sendNFTActions.CHANGE_INPUT,
      payload: {
        index,
        name: e.target.name,
        value: e.target.value,
      } as SendNFTPayload,
    });
  }, []);

  const handleDelete = useCallback(() => {
    sendNFTDispatch({
      type: sendNFTActions.DELETE_FIELD,
      payload: {
        index,
      },
    });
  }, []);

  return (
    <SContainer2>
      <STokenID
        value={sendNFTObject.token_id}
        onChange={handleInputChange}
        name="token_id"
        type="number"
      />
      <SAddress
        value={sendNFTObject.to_address}
        onChange={handleInputChange}
        name="to_address"
        type="text"
      />
      <SClose onClick={handleDelete}>
        <img src="close.svg" alt="" />
      </SClose>
    </SContainer2>
  );
};
