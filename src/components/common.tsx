import styled from "@emotion/styled";
import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

export const LevelContainer = ({ children }: { children: ReactNode }) => {
  return <LevelCard>{children}</LevelCard>;
};

const LevelCard = styled.div`
  border-radius: 0.5rem;
  margin: 4rem auto;
  padding: 2rem;
  width: 30rem;

  background-color: #fcfcfc;
  box-shadow: rgb(0 0 0 / 25%) 0 25px 50px -12px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const LevelTitle = ({
  text,
  stage,
}: {
  text?: string;
  stage?: string | number;
}) => {
  return (
    <>
      <LevelTitleText>{text}</LevelTitleText>
      <LevelDivider stage={stage} />
    </>
  );
};

export const LevelBody = styled.div`
  width: 100%;
  margin: 0.6rem 0 0.6rem 0;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LevelText = ({ text }: { text?: string }) => {
  return <LevelTextContainer>{text}</LevelTextContainer>;
};

export const LevelInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <LevelInputContainer {...props} />;
};

export const LevelHint = ({ text }: { text?: string }) => {
  return <LevelHintContainer>{text}</LevelHintContainer>;
};

export const LevelButton = (
  props: {
    text?: string;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return <LevelButtonContainer {...props}>{props.text}</LevelButtonContainer>;
};

const LevelTitleText = styled.h1`
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-size: 2em;
`;

const LevelDivider = ({ stage }: { stage?: string | number }) => {
  return (
    <LevelDividerContainer>
      <LevelDividerLine />
      STAGE {stage}
      <LevelDividerLine />
    </LevelDividerContainer>
  );
};

const LevelDividerContainer = styled.div`
  width: 100%;

  font-size: 1em;
  letter-spacing: 0.1rem;
  white-space: nowrap;
  color: #a0a0a0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const LevelDividerLine = styled.hr`
  border: none;
  border-top: 1px solid #c0c0c0;
  width: 100%;
`;

const LevelHintContainer = styled.div`
  border: 2px solid #ffbd5e;
  border-radius: 0.4rem;
  background-color: #ffbd5e30;
  padding: 0.6rem 0.8rem;
  color: #643900;

  font-size: 1.1em;

  ::before {
    content: "提示：";
    font-weight: 600;
  }
`;

const LevelTextContainer = styled.span`
  font-size: 1.1em;
  color: #707070;

  ::before {
    content: ">";
    margin-right: 0.6rem;
  }
`;

const LevelInputContainer = styled.input`
  color: #404040;
  font-size: 1.1em;
  border: 1px solid #e0e0e0;
  padding: 0.6rem;

  :hover {
    border: 1px solid #c0c0c0;
  }

  :focus {
    outline: none;
    border: 1px solid #a0a0a0;
  }

  transition: border 0.1s;
`;

const LevelButtonContainer = styled.button`
  padding: 0.4rem 0.8rem;
  font-size: 1.1rem;
  border: 1px solid #c0c0c0;
  background-color: #f0f0f0;

  :hover {
    background-color: #e7e7e7;
  }

  :active {
    border: 1px solid #a0a0a0;
    background-color: #e0e0e0;
  }

  transition: background-color 0.1s, border 0.1s;
`;
