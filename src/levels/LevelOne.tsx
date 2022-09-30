import {
  FormContainer,
  LevelBody,
  LevelButton,
  LevelInput,
  LevelText,
  LevelTitle,
} from "../components/common";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useLevelTracker } from "../utils/request";

const password = "123456";

const LevelOne = () => {
  const [value, setValue] = useState("");
  const [trackerState, track] = useLevelTracker(1);
  const navigate = useNavigate();

  const onNextLevel = () => {
    if (value === password) {
      track().then(() => navigate("/level/2"));
    }
  };

  return (
    <FormContainer>
      <LevelTitle text={"输入密码以过关"} stage={1} />
      <LevelBody>
        <LevelText text={`密码是：${password}`} />
        <LevelInput
          value={value}
          placeholder={"请在此输入密码"}
          onChange={(event) => setValue(event.target.value)}
        />
      </LevelBody>
      <LevelButton
        text={"下一关"}
        onClick={onNextLevel}
        disabled={trackerState.loading}
      />
    </FormContainer>
  );
};

export default LevelOne;
