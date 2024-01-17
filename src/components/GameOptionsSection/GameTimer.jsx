import styled from "styled-components";
import { useTimer } from "use-timer";
import { formatTime } from "../utils/FormatTime";
import { useState } from "react";
import { allAppStates } from "../../pages/Index";

const Icon = styled.div`
  background-position: center;
  cursor: pointer;
  height: 50px;
  background-image: ${(props) =>
    props.$bgd ? "url(/pauseIcon.png)" : "url(/playIcon.png)"};
`;

const GameTimer = () => {
  const [isPaused, changeIsPaused, incrementCurrentTime] = allAppStates(
    (state) => [
      state.isPaused,
      state.changeIsPaused,
      state.incrementCurrentTime,
    ]
  );
  const [isCompleted, setIsCompleted] = allAppStates((state) => [
    state.isCompleted,
    state.setIsCompleted,
  ]);
  const [bgd, changeBGD] = useState(true);
  const { time, start, pause, reset, status } = useTimer({
    autostart: true,
    onTimeUpdate: (time) => {
      incrementCurrentTime(time);
      if (isCompleted === true) {
        pause();
      }
    },
  });

  const pausePlay = () => {
    changeBGD(!bgd);
    changeIsPaused(!isPaused);
    bgd ? pause() : start();
  };

  return (
    <div className="gameTimer">
      <Icon $bgd={bgd} onClick={() => pausePlay()} />
      <p>{formatTime(time)}</p>
    </div>
  );
};

export default GameTimer;
