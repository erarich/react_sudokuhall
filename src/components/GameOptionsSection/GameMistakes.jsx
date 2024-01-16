import { allAppStates } from "../../pages/Index";

const GameMistakes = () => {
  const getStateCurrentMistakes = allAppStates(
    (state) => state.currentMistakes
  );

  return (
    <div className="gameMistakes">
      <p>Mistakes</p>
      <h4>{getStateCurrentMistakes}</h4>
    </div>
  );
};

export default GameMistakes;
