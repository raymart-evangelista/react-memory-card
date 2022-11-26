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
    <div className="App">
      <div className='grid grid-cols-3 gap-2'>
        {images.slice(0,12).map((image) =>
          <img src={image} key={uniqid()} className="" alt="" />
        )}
      </div>

      <h1 className='text-3xl font-bold underline'>Hello World!</h1>
    </div>
  );
}

export default App;
