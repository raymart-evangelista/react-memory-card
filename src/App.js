import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"

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
      <img src={logo} className="App-logo" alt="logo" />
      {/* <img src={images[0]} className="App-logo" alt="logo" /> */}
      <img src={images[1]} className="App-logo" alt="logo" />
      <ul>
        {images.map((image) =>
          <img src={image} className="App-logo" alt="logo" />
        )}
        </ul>

      <h1 className='text-3xl font-bold underline'>Hello World!</h1>
    </div>
  );
}

export default App;
