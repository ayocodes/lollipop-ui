import Link from "next/link";
import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { ModalContext, modalActions } from "../state/modals";

const SModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
  display: grid;
  place-items: center;
  z-index: 2000;
`;

const SSchema = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3.5rem 0;
  width: 27rem;
  height: 24rem;
  background: rgba(255, 255, 255, 0.95);
  border: 4px solid #ffffff;
  border-radius: 25px;
`;

const SButtons = styled.div`
  width: 23rem;
  height: 4rem;
  padding: 1rem;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background-color: #ff30f7;
  box-shadow: 0px 4px 15px rgba(255, 48, 247, 0.5);
  transition: box-shadow 300ms;
  cursor: pointer;

  :hover {
    box-shadow: 0px 3px 15px 2px rgba(255, 48, 247, 0.5);
  }
`;

const SButtonText = styled.div`
  color: white;
  font-family: "Luckiest Guy";
  font-size: 2rem;
  align-items: center;
`;

const AdminNFT = () => {
  const {
    state: { showAdminNFT },
    dispatch,
  } = useContext(ModalContext) as {
    state: ModalState;
    dispatch: any;
  };

  const handleClick = useCallback(() => {
    dispatch({ type: modalActions.CLOSE_ADMIN_NFT_MODAL });
    dispatch({ type: modalActions.OPEN_SETTING_MODAL });
  }, []);

  if (!showAdminNFT) {
    return null;
  }

  return (
    <SModal
      onClick={() => dispatch({ type: modalActions.CLOSE_ADMIN_NFT_MODAL })}
    >
      <SSchema onClick={(e) => e.stopPropagation()}>
        <Link href="/create-nft">
          <a>
            <SButtons onClick={() => handleClick()}>
              <SButtonText> CREATE NFT</SButtonText>
            </SButtons>
          </a>
        </Link>
        <Link href="/mint-nft">
          <a>
            <SButtons onClick={() => handleClick()}>
              <SButtonText>MINT NFT</SButtonText>
            </SButtons>
          </a>
        </Link>
        <Link href="/create-and-mint-nft">
          <a>
            <SButtons onClick={() => handleClick()}>
              <SButtonText>CREATE & MINT NFT</SButtonText>
            </SButtons>
          </a>
        </Link>
      </SSchema>
    </SModal>
  );
};

export default AdminNFT;
