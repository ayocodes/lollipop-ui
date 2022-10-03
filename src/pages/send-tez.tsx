import React, { ChangeEvent, useCallback, useContext } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Send from "../components/Send";
import { sendTezActions, SendTezContext } from "../state/sendTez";
import { SettingsContext } from "../state/settings";
import deployValues, { deployActions } from "../utils/deployValues";

const SBody = styled.div`
  display: flex;
  justify-content: center;
`;

const SMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
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

const SAmount = styled(SAddress)`
  width: 10rem;
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
  margin-right: 1rem;
  font-size: 1.5rem;
  color: #696969;
`;
const SAmountTitle = styled.div`
  width: 10rem;
  font-size: 1.5rem;
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

const SendTEZ = () => {
  const { sendTezState, sendTezDispatch } = useContext(SendTezContext) as {
    sendTezState: SendTezState;
    sendTezDispatch: any;
  };

  const { settingsState } = useContext(SettingsContext) as {
    settingsState: SettingsState;
  };

  const handleSubmit = () => {
    deployValues({
      config: settingsState,
      values: sendTezState,
      action: deployActions.SEND_TEZ,
    });
  };

  const handleAddField = useCallback(() => {
    sendTezDispatch({
      type: sendTezActions.ADD_FIELD,
    });
  }, []);

  return (
    <SBody>
      <SMain>
        <Header>Send TEZ</Header>
        <SContainer>
          <SContainer2>
            <SAddressTitle>To Address</SAddressTitle>
            <SAmountTitle>Amount</SAmountTitle>
          </SContainer2>
          {sendTezState.map((e, i) => (
            <SendTezInputUI
              key={i}
              sendTezObject={e}
              index={i}
              sendTezDispatch={sendTezDispatch}
            />
          ))}
          <SAddField onClick={handleAddField}>Add Another Field</SAddField>
        </SContainer>
        <Send
          boxShadow={"rgba(34, 28, 167, 0.5)"}
          color={"#221CA7"}
          func={handleSubmit}
        >
          Send
        </Send>
      </SMain>
    </SBody>
  );
};

export default SendTEZ;

interface ISendTezInputUI {
  sendTezObject: SendTezObject;
  index: number;
  sendTezDispatch: (x: SendTezAction) => void;
}

const SendTezInputUI: React.FC<ISendTezInputUI> = ({
  sendTezObject,
  index,
  sendTezDispatch,
}) => {
  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    sendTezDispatch({
      type: sendTezActions.CHANGE_INPUT,
      payload: {
        index,
        name: e.target.name,
        value: e.target.value,
      } as SendTezPayload,
    });
  }, []);

  const handleDelete = useCallback(() => {
    sendTezDispatch({
      type: sendTezActions.DELETE_FIELD,
      payload: {
        index,
      },
    });
  }, []);

  return (
    <SContainer2>
      <SAddress
        value={sendTezObject.to_address}
        onChange={handleInputChange}
        name="to_address"
        type="text"
      />
      <SAmount
        value={sendTezObject.amount}
        onChange={handleInputChange}
        name="amount"
        type="number"
      />
      <SClose onClick={handleDelete}>
        <img src="close.svg" alt="" />
      </SClose>
    </SContainer2>
  );
};
