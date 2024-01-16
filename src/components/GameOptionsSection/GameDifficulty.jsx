import { allAppStates } from "../../pages/Index";
import { useNavigate } from "react-router-dom";

const GameDifficulty = () => {
  let navigate = useNavigate();
  const getCurrentDifficulty = allAppStates((state) => state.currentDiff);
  const selectDiff = allAppStates((state) => state.selectDiff);

  const difficulties = [
    { value: "easy", text: "Easy" },
    { value: "medium", text: "Medium" },
    { value: "hard", text: "Hard" },
    { value: "very-hard", text: "Very-Hard" },
    { value: "insane", text: "Insane" },
    { value: "inhuman", text: "Inhuman" },
  ];

  const options = difficulties.map((option) => {
    return (
      <option key={option.value} value={option.value}>
        {option.text}
      </option>
    );
  });

  // console.log(getCurrentDifficulty)

  const handleChange = (value) => {
    selectDiff(value);
    navigate(`/${value}`);
  };

  return (
    <div className="gameDifficulty">
      <span>Difficulty: </span>
      <select
        value={getCurrentDifficulty}
        onChange={(e) => handleChange(e.target.value)}
        name="select"
      >
        {options}
      </select>
    </div>
  );
};

export default GameDifficulty;
