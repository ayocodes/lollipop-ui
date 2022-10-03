import { useContext, useEffect, useState } from "react";
import ScrollableFeed from "react-scrollable-feed";
import styled from "styled-components";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { modalActions, ModalContext } from "../state/modals";

const STerminal = styled.div`
  width: 45rem;
  height: 25rem;
  background-color: black;
  border-radius: 1.25rem;
  padding: 1.25rem;
  padding-bottom: 0;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const STitle = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.5rem;
`;

const SBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const SP = styled.p`
  color: #bdd3e8;
  font-size: 1rem;
  overflow: auto;
`;

const SModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
  z-index: 2000;
`;

const WS_PORT = process.env.WS_PORT;

const url = `ws://127.0.0.1:${WS_PORT ? WS_PORT : "8080"}/stream-logs`;
const client = new W3CWebSocket(url);

const Terminal = () => {
  const {
    state: { showTerminal },
    dispatch,
  } = useContext(ModalContext) as {
    state: ModalState;
    dispatch: any;
  };

  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = (message: any) => {
      setLogs((prev) => [...prev, JSON.parse(message.data)]);
    };
  }, [client]);

  if (!showTerminal) {
    return null;
  }

  return (
    <SModal
      onClick={() => dispatch({ type: modalActions.CLOSE_TERMINAL_MODAL })}
    >
      <STerminal onClick={(e) => e.stopPropagation()}>
        <STitle>
          <SP>Logs</SP>
        </STitle>
        <SBody>
          <ScrollableFeed>
            {logs?.map((e, i) => (
              <SP key={i}>{e}</SP>
            ))}
          </ScrollableFeed>
        </SBody>
      </STerminal>
    </SModal>
  );
};

export default Terminal;
