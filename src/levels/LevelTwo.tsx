import {
  FormContainer,
  LevelBody,
  LevelButton,
  LevelHint,
  LevelText,
  LevelTitle,
} from "../components/common";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled from "@emotion/styled";
import Collapsible from "../components/transition";

const password = "123456";

const LevelTwo = () => {
  const navigate = useNavigate();

  const textRef = useRef<HTMLSpanElement>(null);

  const [open, setOpen] = useState(false);
  setTimeout(() => setOpen(true), 4000);

  const onNextLevel = () => {
    if (textRef.current!.innerText === password) {
      navigate("/level/3");
    }
  };

  return (
    <FormContainer>
      <LevelTitle text={"输入上一关的密码以过关"} stage={2} />
      <LevelBody>
        <LevelText text={`密码是：${password}`} />
        <FakeInputContainer ref={textRef}>请在此输入密码</FakeInputContainer>
      </LevelBody>
      <CollapsibleContent>
        <Collapsible open={open} height={"9rem"}>
          <LevelBody>
            <LevelHint
              text={
                <>
                  {"按下 "}
                  <KeyBlock>Ctrl</KeyBlock>+<KeyBlock>Shift</KeyBlock>+
                  <KeyBlock>C</KeyBlock>
                  {
                    " 键，然后点击上面的输入框。怎么把这里的文字「替换」为密码？"
                  }
                </>
              }
            />
            <LevelText text={"其它浏览器请自行搜索对应快捷键"} />
          </LevelBody>
        </Collapsible>
      </CollapsibleContent>
      <LevelButton text={"下一关"} onClick={onNextLevel} />
    </FormContainer>
  );
};

const FakeInputContainer = styled.span`
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

const CollapsibleContent = styled.div`
  margin-top: -1rem;
`;

const KeyBlock = styled.span`
  border: 1px solid #808080;
  background-color: #fcfcfc;
  border-radius: 0.3rem;
  font-family: "Fira Code", monospace;

  font-size: 0.9em;

  padding: 0.1rem 0.2rem;
`;

export default LevelTwo;
