import styles from '../../assets/GameOptionsSection.module.css'
import GameDifficulty from '../GameOptionsSection/GameDifficulty'
import GameExtraActions from '../GameOptionsSection/GameExtraActions'
import GameMistakes from '../GameOptionsSection/GameMistakes'
import GameNumberSelector from '../GameOptionsSection/GameNumberSelector'
import GameTimer from '../GameOptionsSection/GameTimer'

const GameOptionsSection = () => {
  return (
    <section className={styles.gameOptions}>
      <div>
        <GameNumberSelector />
        <GameDifficulty />
        <div className={styles.gameMisTimer}>
          <GameMistakes />
          <GameTimer />
        </div>
        
        <GameExtraActions />
      </div>
    </section>
  )
}

export default GameOptionsSection;