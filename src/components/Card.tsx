import React from "react";
import styled from "styled-components";
import Text from "../components/Text";

interface CardProps {
  color?: any;
  className?: any;
  children?: React.ReactNode;
}
interface CardStyleProps {
  color: any;
  className?: any;
}

const Sbackground = styled.div`
  background-color: #CECECE;
  width: 27rem;
  height: 18.5rem;
  border-radius: 1.25rem;
`;

const SCard = styled.div<CardStyleProps>`
  display: grid;
  place-items: center;
  height: 18.5rem;
  width: 27rem;
  background-color: ${({ color }) => color};
  border-radius: 1.25rem;
  background-image: url("rustic-triangles.png");
  transition: 300ms ease-in-out;

  :hover {
    transform: translate(1.5rem, -1.5rem);
  }
`;

const STitle = styled(Text)`
  color: white;
  font-family: "Luckiest Guy";
  font-size: 60px;

  text-align: center;
`;


const Card: React.FC<CardProps> = ({ color, className, children }) => {
  return (
    <>
      <Sbackground>
        <SCard color={color} className={className}>
          <STitle>{children}</STitle>
        </SCard>
      </Sbackground>
    </>
  );
};

export default Card;
