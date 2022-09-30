import {
  FormContainer,
  LevelBody,
  LevelButton,
  LevelInput,
  LevelText,
  LevelTitle,
} from "../components/common";
import { useNavigate } from "react-router";
import { useState } from "react";
import useUser from "../components/useUser";

const LevelZero = () => {
  const navigate = useNavigate();
  const [, setUser] = useUser();

  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");

  const onNextLevel = () => {
    // validation
    if (
      isNaN(+userId) ||
      +userId <= 0 ||
      +userId >= 1e12 ||
      username.length > 10
    ) {
      alert("请填写正确的用户名和学号！");
      return;
    }
    setUser({
      id: userId,
      username: username,
    });
    navigate("/level/1");
  };

  return (
    <FormContainer>
      <LevelTitle text={"填写你的信息开始游戏"} stage={0} />
      <LevelBody>
        <LevelText text={"请确认填写正确的信息，将按照此信息计算个人得分"} />
        <LevelText text={"信息仅用于记录过关得分"} />
      </LevelBody>
      <LevelBody>
        <LevelInput
          placeholder={"请输入学号"}
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />
        <LevelInput
          placeholder={"请输入姓名"}
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </LevelBody>
      <LevelButton text={"前往第一关"} onClick={onNextLevel} />
    </FormContainer>
  );
};

export default LevelZero;
