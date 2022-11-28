import React, {useEffect, useState} from "react"
import shuffleDrivers from './components/Drivers'
import Card from './components/Card'


function App() {
  const shuffle = shuffleDrivers()
  const [ids, setIds] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  
  const resetGame = () => {
    if (currentScore > bestScore) {
      setBestScore(currentScore)
    }
    setIds([])
    setCurrentScore(0)
    console.log('Game over')
  }

  const handleCardClick = driver_id => {
    console.log(driver_id)
    if (ids.includes(driver_id)) {
      resetGame()
    } else {
      console.log('not included yet')
      setIds(ids.concat(driver_id))
      setCurrentScore(currentScore + 1)
    }
  }

  useEffect(() => {
    if (ids.length == 20) {
      console.log('you got all the cards!')
      resetGame()
    }
  }, [ids])

  return (
    <div className="App h-screen text-center p-2">
      <h1 className='2xl:text-2xl'>Score: {currentScore}</h1>
      <h1 className='2xl:text-2xl'>Best: {bestScore}</h1>
      <div className='flex justify-center'>
      <div className='grid grid-cols-4 xl:grid-cols-5 gap-1'>
        {shuffle.map((driver) => <Card key={driver.id} driver={driver} handleClick={handleCardClick} />)}
      </div>
      </div>
    </div>
  );
}

export default App;
