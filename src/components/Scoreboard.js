import React, {useState} from "react"

function currentScore() {
  return (
    <h1 className='text-3xl font-bold underline'>Score: 0</h1>
    )
  }
  
  function bestScore() {
    return (
    <h1 className='text-3xl font-bold underline'>Best: 0</h1>
  )
}

export { currentScore, bestScore }