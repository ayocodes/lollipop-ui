import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface IText {
  color?: string;
  fontSize?: string;
  userSelect?: boolean;
}

const SH1 = styled("h1")<IText>`
  color: ${({ theme, color }) => (color ? color : theme.text1)};
  user-select: ${({ userSelect }) => (userSelect ? "none" : "")};
  transition: all 2s;
  font-size: 3.75rem;
  /* position: relative; */
  /* z-index: 2; */

  /* &:before {
    content: "";
    display: inline-block;
    vertical-align: baseline;
    height: 1.5rem;
  }
  &:after {
    content: "";
    display: inline-block;
    vertical-align: -1.5rem;
    height: 1.5rem;
  } */
`;

const SH2 = styled("h2")<IText>`
  color: ${({ theme, color }) => (color ? color : theme.text1)};
  user-select: ${({ userSelect }) => (userSelect ? "none" : "")};
  transition: all 2s;
  font-size: 3rem;
  /* position: relative; */
  /* z-index: 2; */

  /* &:before {
    content: "";
    display: inline-block;
    vertical-align: baseline;
    height: 1.5rem;
  }
  &:after {
    content: "";
    display: inline-block;
    vertical-align: -1.5rem;
    height: 1.5rem;
  } */
`;

const SH3 = styled("h3")<IText>`
  color: ${({ theme, color }) => (color ? color : theme.text1)};
  user-select: ${({ userSelect }) => (userSelect ? "none" : "")};
  transition: all 2s;
  font-size: 2rem;
  /* position: relative; */
  /* z-index: 2; */

  /* &:before {
    content: "";
    display: inline-block;
    vertical-align: baseline;
    height: 1.5rem;
  }
  &:after {
    content: "";
    display: inline-block;
    vertical-align: -1.5rem;
    height: 1.5rem;
  } */
`;

const SH4 = styled("h4")<IText>`
  color: ${({ theme, color }) => (color ? color : theme.text1)};
  user-select: ${({ userSelect }) => (userSelect ? "none" : "")};
  transition: all 2s;
  font-size: 1.75rem;
  /* position: relative; */
  /* z-index: 2; */

  /* &:before {
    content: "";
    display: inline-block;
    vertical-align: baseline;
    height: 1.5rem;
  }
  &:after {
    content: "";
    display: inline-block;
    vertical-align: -1.5rem;
    height: 1.5rem;
  } */
`;

const SH5 = styled("h5")<IText>`
  color: ${({ theme, color }) => (color ? color : theme.text1)};
  user-select: ${({ userSelect }) => (userSelect ? "none" : "")};
  transition: all 2s;
  font-size: 1.5rem;
  /* position: relative; */
  /* z-index: 2; */

  /* // simple
  &:before {
    content: "";
    display: inline-block;
    vertical-align: baseline;
    height: 0.5rem;
  }
  &:after {
    content: "";
    display: inline-block;
    vertical-align: -1rem;
    height: 0.5rem;
  } */
`;

const SH6 = styled("h6")<IText>`
  color: ${({ theme, color }) => (color ? color : theme.text1)};
  user-select: ${({ userSelect }) => (userSelect ? "none" : "")};
  transition: all 2s;
  font-size: 1rem;
  /* position: relative; */
  /* z-index: 2; */

  /* // simple
  &:before {
    content: "";
    display: inline-block;
    vertical-align: baseline;
    height: 0.5rem;
  }
  &:after {
    content: "";
    display: inline-block;
    vertical-align: -1rem;
    height: 0.5rem;
  } */
`;

const SP = styled("p")<IText>`
  color: ${({ theme, color }) => (color ? color : theme.text1)};
  user-select: ${({ userSelect }) => (userSelect ? "none" : "")};
  transition: all 2s;
  font-size: ${(props) => props.fontSize};
  /* position: relative; */
  /* z-index: 2; */

  /* // simple
  &:before {
    content: "";
    display: inline-block;
    vertical-align: baseline;
    height: 0.5rem;
  }
  &:after {
    content: "";
    display: inline-block;
    vertical-align: -1rem;
    height: 0.5rem;
  } */
`;

SP.defaultProps = {
  fontSize: "1rem",
};

interface IPageText {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: string;
  fontSize?: any;
  children: ReactNode;
  className?: any;
  style?: any;
  userSelect?: boolean;
}

const Text: React.FC<IPageText> = ({
  className,
  type,
  color,
  fontSize,
  children,
  style,
  userSelect,
}: IPageText) => {
  let text: ReactElement;

  switch (type) {
    case "h1":
      text = (
        <SH1
          style={style}
          className={className}
          color={color}
          userSelect={userSelect}
        >
          {children}
        </SH1>
      );
      break;

    case "h2":
      text = (
        <SH2
          style={style}
          className={className}
          color={color}
          userSelect={userSelect}
        >
          {children}
        </SH2>
      );
      break;

    case "h3":
      text = (
        <SH3
          style={style}
          className={className}
          color={color}
          userSelect={userSelect}
        >
          {children}
        </SH3>
      );
      break;

    case "h4":
      text = (
        <SH4
          style={style}
          className={className}
          color={color}
          userSelect={userSelect}
        >
          {children}
        </SH4>
      );
      break;

    case "h5":
      text = (
        <SH5
          style={style}
          className={className}
          color={color}
          userSelect={userSelect}
        >
          {children}
        </SH5>
      );
      break;

    case "h6":
      text = (
        <SH6
          style={style}
          className={className}
          color={color}
          userSelect={userSelect}
        >
          {children}
        </SH6>
      );
      break;

    default:
      text = (
        <SP
          style={style}
          className={className}
          color={color}
          fontSize={fontSize}
          userSelect={userSelect}
        >
          {children}
        </SP>
      );
      break;
  }

  return text;
};

export default Text;
