import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Navbar from "../components/Settings";
import { ModalContext, modalActions } from "../state/modals";

const SBody = styled.div`
  display: flex;
  width: 100%;
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

const SBox1 = styled.div`
  display: grid;
  place-items: center;
  gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  margin-top: 1.5rem;
`;

const SHeader = styled.p`
  font-size: 60px;
  line-height: 60px;
  color: #4a4f63;
`;

const SCard = styled.div`
  height: 18.5rem;
  width: 27rem;
  border-radius: 1.25rem;
  padding: 2rem;
  background-image: url("lollipop.jpg");
  background-size: contain;
  box-shadow: 0px 0px 32px 1px rgba(0, 0, 0, 0.25);
`;

const Scontainer = styled.div`
  display: flex;
`;

const SNavbar = styled.div`
  position: sticky;
  top: 0;
  width: 7rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  justify-content: end;
  align-items: center;
`;

const Sp = styled.p`
  color: white;
  font-weight: 600;
  font-size: 25px;
`;

const Home: NextPage = () => {
  const { dispatch } = useContext(ModalContext) as { dispatch: any };

  const handleOpenSetting = () => {
    dispatch({ type: modalActions.OPEN_SETTING_MODAL });
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Scontainer>
        <SBody>
          <SMain>
            <SHeader>Home</SHeader>
            <SBox1>
              <SCard>
                {/* <Sp>How it works</Sp> */}
              </SCard>
              <Link href="/send-tez">
                <a>
                  <Card color={"#221CA7"} func={handleOpenSetting}>
                    SEND TEZ
                  </Card>
                </a>
              </Link>
              <Link href="/send-nft">
                <a>
                  <Card color={"#FF3070"} func={handleOpenSetting}>TRANSFER NFT</Card>
                </a>
              </Link>
              <Card
                color={"#FF30F7"}
                func={() =>
                  dispatch({ type: modalActions.OPEN_ADMIN_NFT_MODAL })
                }
              >
                ADMIN NFT
              </Card>
            </SBox1>
          </SMain>
        </SBody>
        <SNavbar>
          <Navbar />
        </SNavbar>
      </Scontainer>
    </div>
  );
};

export default Home;
