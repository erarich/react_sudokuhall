import styles from '../../assets/GameOptionsSection.module.css'
import { useState } from 'react';
import { allAppStates } from '../../pages/Index'; 

// let numSelected = null;

const GameNumberSelector = () => {
  
  const changeNumSelectedState = allAppStates(state => state.changeNumSelected);

  const [numberState, changeNumberState] = useState({
    currentNumber: null,
    numbers: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }]
  });

  const changeNumSelected = (index, elements) => {
    changeNumberState({ ...numberState, currentNumber: numberState.numbers[index] })
    changeNumSelectedState(elements.id)
    // numSelected = elements.id
  }

  const changeClassName = (index) => {
    if (numberState.numbers[index] === numberState.currentNumber) {
      return "number active";
    } else {
      return "number inactive";
    }
  }

  return (
    <div className={styles.gameNumberSelector}>
      <div id="digits">
        {numberState.numbers.map((elements, index) => (
          <div
            key={index}
            className={changeClassName(index)}
            onClick={() => {
              changeNumSelected(index, elements);
            }}
          >{elements.id}</div>
        ))}
      </div>
    </div>
  )
}

export default GameNumberSelector;