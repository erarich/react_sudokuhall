import SudokuToolCollection from "sudokutoolcollection";
import { allAppStates } from "../../pages/Index";

const sudoku = SudokuToolCollection();

export const generateSudoku = () => {

  const getCurrentDiff = allAppStates(state => state.currentDiff);

  const board = sudoku.generator.generate(getCurrentDiff)
  const solution = sudoku.solver.solve(board);
  const boardArray = board.split("");
  const solutionArray = solution.split("");

  return {
    boardArray: boardArray,
    solutionArray: solutionArray,
  }
}