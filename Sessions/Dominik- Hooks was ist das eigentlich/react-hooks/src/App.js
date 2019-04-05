import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export const App = (props) => {
  
  const array = Array(9).fill('');
  const [stateArray, setStateArray] = useState(array);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const togglePlayer = () =>  setCurrentPlayer( x => x == 'X' ? 'O' : 'X');

  return (
    <div className="App">
      {stateArray.map( (element, index) =>
      <><button onClick={() => {
        togglePlayer();
        setStateArray(stateArray.map( (v, i) => i == index ? currentPlayer : v))}
      } >{element}</button>{index%3==2 && <br/>}</>)}
    </div>
  );
}

export default App;
