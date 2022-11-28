import React, {useState} from "react"
import uniqid from "uniqid"
// import ListItem from './ListItem'

/*
- any click on any of the cards will:
  - know the card that was clicked
  - refresh the cards (randomize)
*/
function Cards() {

  const importAll = (r) => {
    return r.keys().map(r)
  }

  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
  // const randomize = images.sort(() => 0.5 - Math.random())
  const randomize = refreshCards(images)
  const cardsAmount = 12
  const cardsShown = randomize.slice(0,cardsAmount)
  const listImages = cardsShown.map((image) =>
    <ListItem cards={images} key={uniqid()} value={image}/>
  )

  return (
    <div className="border-4 border-red-500 grid grid-cols-3 sm:grid-cols-4 2xl:grid-cols-6 gap-2 p-2">
      {listImages}
    </div>
  )
}

const refreshCards = (cards) => cards.sort(() => 0.5 - Math.random())

function ListItem(props) {
  const handleClick = () => {
    console.log(props.value)
  }

  return (
      <img onClick={handleClick} src={props.value} alt="" />
  )

}

export default Cards