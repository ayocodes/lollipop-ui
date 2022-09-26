import React from "react";
import styled from "styled-components";

const Setting = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background-color: #262b3d;
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

const Navbar = () => {
  return (
    <SNavbar>
      <Setting>
        <img src="Setting.svg" alt="setting" />
      </Setting>
    </SNavbar>
  );
};

export default Navbar;
