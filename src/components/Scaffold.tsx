import styled from "styled-components";
import Navbar from "./Navbar";

interface IScaffoldProp {
  children: React.ReactNode;
}

const SScaffold = styled.div`
  display: flex;
  background-image: url("background.jpg");
  /* opacity: 0.6; */
  background-size: cover;
`;

const SContainer = styled.div`
  width: 100%;
`;

const Scaffold: React.FC<IScaffoldProp> = ({ children }) => {
  return (
    <SScaffold>
      <SContainer>{children}</SContainer>
      <Navbar />
    </SScaffold>
  );
};

export default Scaffold;
