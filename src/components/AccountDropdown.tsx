import React, { useState } from "react";
import styled from "styled-components";

const SModal = styled.div`
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 1;
`;

const SAccountDropdown = styled.div`
  position: relative;
`;

const SDropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1rem;
  position: absolute;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  border: 4px solid #ffffff;
  border-radius: 15px;
  margin-top: 1rem;
  z-index: 5000;
`;

const SButton = styled.div`
  margin-left: 1.5rem;
  width: 10rem;
  height: 2.5rem;
  cursor: pointer;
  background-color: white;
  border: 2px solid #c8c8c8;
  border-radius: 5px;
  display: grid;
  place-items: center;
  font-size: 1.25rem;
`;

const SItem = styled.p`
  font-size: 16px;
  margin-bottom: 6px;
  cursor: pointer;
`;

const Sp = styled.p`
  font-size: 16px;
`;

const AccountDropdown = () => {
  const [modal, setModal] = useState(false);
  const [accountState, setAccountState] = useState({
    selectedAccount: "Account 1",
    accounts: ["Account 1"],
  });

  const handleSelect = (i: number) => {
    setAccountState((prev) => {
      return {
        ...prev,
        selectedAccount: prev.accounts[i],
      };
    });
    setModal(false);
  };
  return (
    <SAccountDropdown>
      <SButton onClick={() => setModal(true)}>
        <Sp>{accountState.selectedAccount}</Sp>
      </SButton>
      {modal ? (
        <>
          <SDropdown>
            {accountState.accounts?.map((account, i) => (
              <SItem onClick={() => handleSelect(i)}>{account}</SItem>
            ))}
          </SDropdown>
          <SModal onClick={() => setModal(false)} />
        </>
      ) : (
        <></>
      )}
    </SAccountDropdown>
  );
};

export default AccountDropdown;
