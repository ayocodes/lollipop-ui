import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Card from "../components/Card";
import Text from "../components/Text";

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
  padding: 1rem;
  background-color: white;
  box-shadow: 0px 0px 32px 1px rgba(0, 0, 0, 0.25);
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SBody>
        <SMain>
          <SHeader>Home</SHeader>
          <SBox1>
            <SCard>
              <p>how it works</p>
            </SCard>
            <Card color={"#221CA7"}>Send TEZ</Card>
            <Card color={"#FF3070"}>SEND NFT</Card>
            <Card color={"#FF30F7"}>Mint NFT</Card>
          </SBox1>
        </SMain>
      </SBody>
    </div>
  );
};

export default Home;
