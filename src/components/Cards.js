import React, {useEffect, useState} from "react"
import uniqid from "uniqid"
import Button from './Button'

import albon from './assets/images/albon.jpeg'
import alonso from './assets/images/alonso.jpeg'
import bottas from './assets/images/bottas.jpeg'
import gasly from './assets/images/gasly.jpeg'
import goatifi from './assets/images/goatifi.jpeg'
import hamilton from './assets/images/hamilton.jpeg'
import leclerc from './assets/images/leclerc.jpeg'
import magnussen from './assets/images/magnussen.jpeg'
import norris from './assets/images/norris.jpeg'
import ocon from './assets/images/ocon.jpeg'
import perez from './assets/images/perez.jpeg'
import ricciardo from './assets/images/ricciardo.jpeg'
import russell from './assets/images/russell.jpeg'
import sainz from './assets/images/sainz.jpeg'
import schumacher from './assets/images/schumacher.jpeg'
import stroll from './assets/images/stroll.jpeg'
import tsunoda from './assets/images/tsunoda.jpeg'
import verstappen from './assets/images/verstappen.jpeg'
import vettel from './assets/images/vettel.jpeg'
import zhou from './assets/images/zhou.jpeg'
// import ListItem from './ListItem'

/*
- any click on any of the cards will:
  - know the card that was clicked
  - refresh the cards (randomize)
*/
function Cards() {
  const [cardsList, setCardsList] = useState([
    {
      name: 'albon',
      image: albon
    },
    {
      name: 'alonso',
      image: alonso
    },
    {
      name: 'bottas',
      image: bottas
    },
    {
      name: 'gasly',
      image: gasly
    },
    {
      name: 'goatifi',
      image: goatifi
    }
  ])

  const [updateCards, setUpdateCards] = useState(false)

  const [someVar, setSomeVar] = useState('some Var')
  
  useEffect(() =>  {
    
  })

  // const importAll = (r) => {
  //   return r.keys().map(r)
  // }

  // const images = importAll(require.context('./assets/images', false, /\.(png|jpe?g|svg)$/));
  // // const randomize = images.sort(() => 0.5 - Math.random())
  // const randomize = refreshCards(images)
  // const cardsAmount = 12
  // const cardsShown = randomize.slice(0,cardsAmount)
  // const listImages = cardsShown.map((image) =>
  //   <ListItem cards={images} key={uniqid()} value={image}/>
  // )

  const handleCardClick = e => {
    console.log('handling card click')
    console.log(cardsList)
    // setCardsList(cardsList.sort(() => 0.5 - Math.random()))
    setCardsList(shuffleES6(cardsList))
    // setSomeVar(someVar + ' some')
    // setUpdateCards(true)
  }

  const shuffleES6 = (array) => {
    array.reverse().forEach((item, index) => {
        const j = Math.floor(Math.random() * (index + 1));
        [array[index], array[j]] = [array[j], array[index]];
    });

    return array;
  };

  // const listImages = cardsList.map((card) =>
  //   <ListItem handleClick={handleCardClick} key={uniqid()} value={card}/>
  // )

  return (
    <div className="border-4 border-red-500 grid grid-cols-3 sm:grid-cols-4 2xl:grid-cols-6 gap-2 p-2">
      {/* {listImages} */}
      {cardsList.map((card) => (
        <ListItem handleClick={handleCardClick} key={uniqid()} value={card}/>
      ))}
      {/* <div>{someVar}</div> */}
    </div>
  )
}

const refreshCards = (cards) => cards.sort(() => 0.5 - Math.random())

function ListItem(props) {
  // const handleClick = () => {
  //   console.log(props.value.name)
  // }

  return (
      <img onClick={props.handleClick} src={props.value.image} alt="" />
  )

}

// function refresh() {
//   const handleButtonClick = e => {
//     console.log('Refresh action!')
//   }

//   return (
//     <Button name='Refresh' handleButton={handleButtonClick} />
//   )
// }

export default Cards
// export { refresh }