import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SModal = styled.div`
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 1;
`;

const SNetworkDropdown = styled.div`
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

const Sp = styled.p`
  font-size: 16px;
`;

const SItem = styled.p`
  font-size: 16px;
  margin-bottom: 6px;
  cursor: pointer;
`;

const NetworkDropdown = () => {
  const [modal, setModal] = useState(false);
  const [networkState, setNetworkState] = useState({
    selectedNetwork: "Ghostnet Mainnet",
    networks: ["Tezos Mainnet", "Ghostnet Mainnet"],
  });

  const handleSelect = (i: number) => {
    setNetworkState((prev) => {
      return {
        ...prev,
        selectedNetwork: prev.networks[i],
      };
    });
    setModal(false);
  };

  return (
    <SNetworkDropdown>
      <SButton onClick={() => setModal(true)}>
        <Sp>{networkState.selectedNetwork}</Sp>
      </SButton>

      {modal ? (
        <>
          <SDropdown>
            {networkState.networks?.map((network, i) => (
              <SItem onClick={() => handleSelect(i)}>{network}</SItem>
            ))}
          </SDropdown>
          <SModal onClick={() => setModal(false)} />
        </>
      ) : (
        <></>
      )}
    </SNetworkDropdown>
  );
};

export default NetworkDropdown;
