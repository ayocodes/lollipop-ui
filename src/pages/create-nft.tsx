import React, { ChangeEvent, useCallback, useContext } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Send from "../components/Send";
import { createNFTActions, CreateNFTContext } from "../state/createNFT";
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

const SMetadata = styled.input`
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

const STokenID = styled(SMetadata)`
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

const SMetadataTitle = styled.div`
  width: 21.5rem;
  margin-right: 1rem;
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

const CreateNFT = () => {
  const { createNFTState, createNFTDispatch } = useContext(
    CreateNFTContext
  ) as {
    createNFTState: CreateNFTState;
    createNFTDispatch: any;
  };

  const { settingsState } = useContext(SettingsContext) as {
    settingsState: SettingsState;
  };

  const handleSubmit = () => {
    deployValues({
      config: settingsState,
      values: createNFTState,
      action: deployActions.CREATE_NFT,
    });
  };

  const handleAddField = useCallback(() => {
    createNFTDispatch({
      type: createNFTActions.ADD_FIELD,
    });
  }, []);

  return (
    <SBody>
      <SMain>
        <Header>Create NFT</Header>
        <SContainer>
          <SContainer2>
            <STokenIDInput>Token-ID</STokenIDInput>
            <SMetadataTitle>Metadata</SMetadataTitle>
          </SContainer2>
          {createNFTState.map((e, i) => (
            <CreateNFTInputUI
              key={i}
              createNFTObject={e}
              index={i}
              createNFTDispatch={createNFTDispatch}
            />
          ))}
          <SAddField onClick={handleAddField}>Add Another Field</SAddField>
        </SContainer>
        <Send
          boxShadow={"rgba(255, 48, 247, 0.5)"}
          color={"#FF30F7"}
          func={handleSubmit}
        >
          Mint
        </Send>
      </SMain>
    </SBody>
  );
};

export default CreateNFT;

interface ICreateNFTInputUI {
  createNFTObject: CreateNFTObject;
  index: number;
  createNFTDispatch: (x: CreateNFTAction) => void;
}

const CreateNFTInputUI: React.FC<ICreateNFTInputUI> = ({
  createNFTObject,
  index,
  createNFTDispatch,
}) => {
  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    createNFTDispatch({
      type: createNFTActions.CHANGE_INPUT,
      payload: {
        index,
        name: e.target.name,
        value: e.target.value,
      } as CreateNFTPayload,
    });
  }, []);

  const handleDelete = useCallback(() => {
    createNFTDispatch({
      type: createNFTActions.DELETE_FIELD,
      payload: {
        index,
      },
    });
  }, []);

  return (
    <SContainer2>
      <STokenID
        value={createNFTObject.token_id}
        onChange={handleInputChange}
        name="token_id"
        type="text"
      />
      <SMetadata
        value={createNFTObject.metadata_ipfs}
        onChange={handleInputChange}
        name="metadata_ipfs"
        type="text"
      />
      <SClose onClick={handleDelete}>
        <img src="close.svg" alt="" />
      </SClose>
    </SContainer2>
  );
};
