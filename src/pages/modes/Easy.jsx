import { GameSection } from "../../components/layout/GameSection";
import GameOptionsSection from "../../components/layout/GameOptionsSection";

const Easy = () => {
  return (
    <>
      <div className={styles.innerContainer}>
        <GameSection />
        <GameOptionsSection />
      </div>
    </>
  );
};

export default Easy;
