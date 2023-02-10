import { propTypes } from 'react-bootstrap/esm/Image';
import styles from '../assets/CompletionBox.module.css'
import { formatTime } from '../components/utils/FormatTime';
import { allAppStates } from '../pages/Index';

export const CompletionBox = (props) => {

  const getCurrentDiff = allAppStates(state => state.currentDiff)
  const getCurrentMistakes = allAppStates(state => state.currentMistakes)
  const getCurrentTime = allAppStates(state => state.currentTime)
  const [isPaused, changeIsPaused] = allAppStates(state => [state.isPaused, state.changeIsPaused]);
  // changeIsPaused(!isPaused)

  return (
    <div className={styles.CompletionBox}>
      <h1 className={styles.CompletionBoxh1}>CONGRATULATIONS!</h1>
      <h2>You have completed the puzzle.</h2>
      <div className={styles.CompletionBox2}>
        <div className={styles.CompletionBoxList}>
          <ul className={styles.CompletionBoxListUL}>
            <li>Difficulty</li>
            <li>Mistakes</li>
            <li>Time</li>
            <li>Score</li>
          </ul>
        </div>
        <div className={styles.CompletionBoxListValues}>
          <ul className={styles.CompletionBoxListUL}>
            <li>{getCurrentDiff}</li>
            <li>{getCurrentMistakes}</li>
            <li>{formatTime(getCurrentTime)}</li>
            <li>TODO</li>
          </ul>
        </div>
      </div>
    </div>
  );
}