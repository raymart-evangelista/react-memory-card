import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"
import uniqid from "uniqid"

function App() {

  const importAll = (r) => {
    return r.keys().map(r)
  }

  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

  const listImages = images.map((image) => {
    <img src={image} className="App-logo" alt="logo" />
  })

  // function importAll(r) {
  //   let images = {}
  //   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item) })
  //   return images
  // }

  // const images = importAll(require.context('./images', false, '/\.jpeg/'))

  return (
    <div className="App border-4 border-blue-500 h-screen">
      <h1 className='text-3xl font-bold underline'>Score: 0</h1>
      <h1 className='text-3xl font-bold underline'>Best: 0</h1>
      <div className='border-4 border-red-500 grid grid-cols-3 sm:grid-cols-4 2xl:grid-cols-6 gap-2 p-2'>
        {images.sort(() => 0.5 - Math.random()).slice(0,12).map((image) =>
          <img src={image} key={uniqid()} className="" alt="" />
        )}
      </div>

      <h1 className='text-3xl font-bold underline'>Refresh</h1>
    </div>
  );
}

export default App;
