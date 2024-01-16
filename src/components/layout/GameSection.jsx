import { useState, useEffect } from "react";
import { CompletionBox } from "../../features/CompletionBox";
import { allAppStates } from "../../pages/Index";
import { generateSudoku } from "../utils/GenerateSudoku";

export const GameSection = () => {
  const getStateNumberSelector = allAppStates((state) => state.numSelected);
  const increaseMistakes = allAppStates((state) => state.increaseMistakes);
  const [isPaused, changeIsPaused, currentTime] = allAppStates((state) => [
    state.isPaused,
    state.changeIsPaused,
    state.currentTime,
  ]);
  const [isCompleted, setIsCompleted] = allAppStates((state) => [
    state.isCompleted,
    state.setIsCompleted,
  ]);

  const sudokus = generateSudoku();
  const first = sudokus.boardArray;
  const second = sudokus.solutionArray;

  const [initalEmptyElements, setEmpty] = useState([]);
  const [finalVerification, setFinalVerification] = useState(true);
  const [appState, setAppState] = useState(first);
  const [solutionState, solutionChangeState] = useState(second);

  const updateBoard = (index) => {
    if (appState[index] === ".") {
      setEmpty((prev) => [...prev, index]);
    }
    if (appState[index] !== ".") {
      return appState[index];
    } else {
      appState[index] = "";
      return appState[index];
    }
  };

  const toggleActiveStyles = (elements, index) => {
    let classNome = "";
    let vLine = "tile vertical-line";
    let hLine = "tile horizontal-line";
    let vhLine = "tile vertical-line horizontal-line";
    let tile = "tile";
    let tileStart = " tile-start ";

    if (!initalEmptyElements.includes(index)) {
      if (elements.value !== "") {
        classNome = classNome + tileStart;
      }
    }

    const verticalLinesNumbers = [
      2, 5, 11, 14, 29, 32, 38, 41, 56, 59, 65, 68, 74, 77,
    ];
    const horizontalLinesNumbers = [
      18, 19, 21, 22, 24, 25, 26, 45, 45, 46, 48, 49, 51, 52, 53,
    ];
    if (verticalLinesNumbers.includes(index)) {
      return classNome + vLine;
    } else if (horizontalLinesNumbers.includes(index)) {
      return classNome + hLine;
    } else if (index === 20 || index === 23 || index === 47 || index === 50) {
      return classNome + vhLine;
    } else {
      return classNome + tile;
    }
  };

  const compareArrays = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
  };

  const selectTile = (index) => {
    let selNumberString;

    try {
      selNumberString = getStateNumberSelector.toString();
    } catch (e) {
      return selNumberString;
    }

    if (getStateNumberSelector !== null) {
      if (appState[index] === "") {
        if (selNumberString === solutionState[index]) {
          const updatedAppState = [...appState];
          updatedAppState[index] = selNumberString;
          setAppState(updatedAppState);
          let verification = compareArrays(updatedAppState, solutionState);
          if (verification === true) {
            setFinalVerification((finalVerification) => !finalVerification);
            setIsCompleted();
          }
        } else {
          increaseMistakes();
        }
      }
    }
  };

  let mainDiv;
  if (!finalVerification) {
    mainDiv = <CompletionBox isCompleted={isCompleted} />;
  } else {
    mainDiv = (
      <div id="board">
        {appState.map((elements, index) => (
          <div
            id={index}
            key={index}
            boardvalue={updateBoard(index)}
            className={toggleActiveStyles(elements, index)}
            onClick={() => {
              selectTile(index);
            }}
          >
            {elements}
          </div>
        ))}
      </div>
    );
  }

  return <section className="game-container">{mainDiv}</section>;
};
