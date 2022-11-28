// import albon from './assets/images/albon.jpeg'
// import alonso from './assets/images/alonso.jpeg'
// import bottas from './assets/images/bottas.jpeg'
// import gasly from './assets/images/gasly.jpeg'
// import goatifi from './assets/images/goatifi.jpeg'
// import hamilton from './assets/images/hamilton.jpeg'
// import leclerc from './assets/images/leclerc.jpeg'
// import magnussen from './assets/images/magnussen.jpeg'
// import norris from './assets/images/norris.jpeg'
// import ocon from './assets/images/ocon.jpeg'
// import perez from './assets/images/perez.jpeg'
// import ricciardo from './assets/images/ricciardo.jpeg'
// import russell from './assets/images/russell.jpeg'
// import sainz from './assets/images/sainz.jpeg'
// import schumacher from './assets/images/schumacher.jpeg'
// import stroll from './assets/images/stroll.jpeg'
// import tsunoda from './assets/images/tsunoda.jpeg'
// import verstappen from './assets/images/verstappen.jpeg'
// import vettel from './assets/images/vettel.jpeg'
// import zhou from './assets/images/zhou.jpeg'

// import Card from './Card'
// import React, {useEffect, useState} from "react"

// // function Deck() {
// //   const [cardsList, setCardsList] = useState([
// //     {
// //       name: 'albon',
// //       image: albon
// //     },
// //     {
// //       name: 'alonso',
// //       image: alonso
// //     },
// //     {
// //       name: 'bottas',
// //       image: bottas
// //     },
// //     {
// //       name: 'gasly',
// //       image: gasly
// //     },
// //     {
// //       name: 'goatifi',
// //       image: goatifi
// //     },
// //     {
// //       name: 'hamilton',
// //       image: hamilton
// //     }
// //   ])

//   const [shuffle, setShuffle] = useState(false)
  
//   useEffect(() => {
//     if (shuffle) {
//       console.log(`shuffling`)
//     }
//     if (!shuffle) {
//       console.log('done shuffling')
//     }
//   }, [shuffle])


//   const handleCardClick = e => {
//     console.log('refresh deck!')
//     if (!shuffle) {
//       setCardsList(shuffleES6(cardsList))
//       setShuffle(true)
//     }
//   }

//   const shuffleES6 = (list) => {
//     const copy = list

//     copy.reverse().forEach((item, index) => {
//         const j = Math.floor(Math.random() * (index + 1));
//         [copy[index], copy[j]] = [copy[j], copy[index]];
//     });

//     return copy;
//   };

//   return (
//     <div className="border-4 border-red-500 grid grid-cols-3 sm:grid-cols-4 2xl:grid-cols-6 gap-2 p-2">
//       <Card handleClick={handleCardClick} value={cardsList[0]} />
//       <Card handleClick={handleCardClick} value={cardsList[1]} />
//       <Card handleClick={handleCardClick} value={cardsList[2]} />
//       <Card handleClick={handleCardClick} value={cardsList[3]} />
//       <Card handleClick={handleCardClick} value={cardsList[4]} />
//       <Card handleClick={handleCardClick} value={cardsList[5]} />
//     </div>
//   )
// }

// export default Deck