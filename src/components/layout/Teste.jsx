import React, { useState, useEffect } from 'react';
import { generateSudoku } from '../utils/GenerateSudoku';
import { allAppStates } from '../../pages/Index';

const Sudoku = () => {

  const getCurrentDiff = allAppStates(state => state.currentDiff);
  const sudokus = generateSudoku()
  const first = sudokus.boardArray
  const second = sudokus.solutionArray

  const [puzzle, setPuzzle] = useState(first);
  const [solution, setSolution] = useState(second);
  const [difficulty, setDifficulty] = useState(getCurrentDiff);

  const getCurrentBoard = allAppStates(state => state.currentBoard);
  const getCurrentSolution = allAppStates(state => state.currentSolution);

  useEffect(() => {
    const currentDifficulty = getCurrentDiff;
    const currentPuzzle = first;
    const currentSolution = second;
    setDifficulty(currentDifficulty);
    setPuzzle(currentPuzzle);
    setSolution(currentSolution);
  }, [getCurrentDiff]);

  

  return (
    <div>
      <h1>Sudoku</h1>
      <p>Puzzle: {puzzle}</p>
      <p>Solution: {solution}</p>
      <p>Difficulty: {difficulty}</p>
    </div>
  );
};

export default Sudoku;
