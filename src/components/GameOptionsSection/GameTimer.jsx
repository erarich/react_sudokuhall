import styles from '../../assets/GameOptionsSection.module.css'
import styled from 'styled-components';
import { useTimer } from 'use-timer';
import { formatTime } from '../utils/FormatTime';
import { useState } from 'react';
import { allAppStates } from '../../pages/Index';

const Icon = styled.div`
  background-position: center;
  cursor: pointer;
  height: 50px;
  background-image: ${(props) => (props.$bgd ? "url(src/assets/pauseIcon.png)" : "url(src/assets/playIcon.png)")};
`;

const GameTimer = () => {

  const [isPaused, changeIsPaused, incrementCurrentTime] = allAppStates(state => [state.isPaused, state.changeIsPaused, state.incrementCurrentTime]);
  const [isCompleted, setIsCompleted] = allAppStates(state => [state.isCompleted, state.setIsCompleted]);
  const [bgd, changeBGD] = useState(true);
  const { time, start, pause, reset, status } = useTimer({
    autostart: true,
    onTimeUpdate: (time) => {
      console.log('Time is updated', time);
      incrementCurrentTime(time)
      console.log(isCompleted)
      if (isCompleted === true) {
        console.log("Puzzle is completed!")
        pause()
      }
    },
  });

  const pausePlay = () => {
    changeBGD(!bgd)
    changeIsPaused(!isPaused)
    bgd ? pause() : start()
  }



  return (
    <div className={styles.gameTimer}>
      <Icon
        $bgd={bgd}
        onClick={() => pausePlay()}
      />
      <p>{formatTime(time)}</p>
    </div>
  )
}

export default GameTimer;