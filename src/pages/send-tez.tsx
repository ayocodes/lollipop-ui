import React, { ChangeEvent, useCallback, useContext } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Send from "../components/Send";
import { sendTezActions, SendTezContext } from "../state/sendTez";
import mintNFT from "./mint-nft";

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

const sendTEZ = () => {
  const { sendTezState, sendTezDispatch } = useContext(SendTezContext) as {
    sendTezState: SendTezState;
    sendTezDispatch: any;
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
              sendTezObject={e}
              index={i}
              sendTezDispatch={sendTezDispatch}
            />
          ))}
          <SAddField onClick={handleAddField}>Add Another Field</SAddField>
        </SContainer>
        <Send boxShadow={"rgba(34, 28, 167, 0.5)"} color={"#221CA7"}>
          Send
        </Send>
      </SMain>
    </SBody>
  );
};

export default sendTEZ;

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
        value={sendTezObject.toAddress}
        onChange={handleInputChange}
        name="toAddress"
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
