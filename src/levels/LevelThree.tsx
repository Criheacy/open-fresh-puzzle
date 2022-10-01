import {
  FormContainer,
  LevelBody,
  LevelButton,
  LevelTitle,
} from "../components/common";
import { useRef } from "react";
import { useNavigate } from "react-router";
import chroma from "chroma-js";
import { useLevelTracker } from "../utils/request";

const LevelTwo = () => {
  const navigate = useNavigate();
  const [trackerState, track] = useLevelTracker(3);
  const blockRef = useRef<HTMLDivElement>(null);

  const onNextLevel = () => {
    const style = blockRef.current!.style.backgroundColor;
    if (!chroma.valid(style)) return;

    const color = chroma(style);
    const [h, s, v] = color.hsv();
    // blue predication
    if (185 <= h && h <= 260 && s >= 0.2 && v >= 0.3) {
      track().then(() => navigate("/level/4"));
    }
  };

  return (
    <FormContainer>
      <LevelTitle text={"把方块的背景色改为蓝色以过关"} stage={3} />
      <LevelBody>
        <div
          ref={blockRef}
          style={{
            margin: "0 auto",
            width: "6rem",
            height: "5rem",
            backgroundColor: "#E0E0E0",
          }}
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

export default LevelTwo;
