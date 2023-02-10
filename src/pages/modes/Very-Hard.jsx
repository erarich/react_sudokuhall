import styles from '../../assets/innerContainer.module.css'
import { GameSection } from '../../components/layout/GameSection';
import GameOptionsSection from '../../components/layout/GameOptionsSection';

const VeryHard = () => {
  return (
    <>
      <div className={styles.innerContainer}>
        <GameSection />
        <GameOptionsSection />
      </div>
    </>
  );
};

export default VeryHard;