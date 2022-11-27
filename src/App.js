import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"
import uniqid from "uniqid"
import Cards from './components/Cards';
import { currentScore, bestScore } from './components/Scoreboard'
import Button from './components/Button'

function App() {

  const handleButtonClick = e => {
    console.log('Refresh action!')
  }

  return (
    <div className="App border-4 border-blue-500 h-screen">
      {currentScore()}
      {bestScore()}
      <Cards />
      <Button name='Refresh' handleButton={handleButtonClick} />
    </div>
  );
}

export default App;
