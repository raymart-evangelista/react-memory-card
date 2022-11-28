import uniqid from 'uniqid'

const drivers = [
  {
    id: uniqid(),
    name: 'Alex Albon',
    img: require('../images/albon.jpeg')
  },
  {
    id: uniqid(),
    name: 'Fernando Alonso',
    img: require('../images/alonso.jpeg')
  },
  {
    id: uniqid(),
    name: 'Valtteri Bottas',
    img: require('../images/bottas.jpeg')
  },
  {
    id: uniqid(),
    name: 'Pierre Gasly',
    img: require('../images/gasly.jpeg')    
  },
  {
    id: uniqid(),
    name: 'Nicholas Goatifi',
    img: require('../images/goatifi.jpeg')    
  },
  {
    id: uniqid(),
    name: 'Zhou Guanyu',
    img: require('../images/guanyu.jpeg')    
  },
  {
    id: uniqid(),
    name: 'Lewis Hamilton',
    img: require('../images/hamilton.jpeg')    
  },
  {
    id: uniqid(),
    name: 'Charles Leclerc',
    img: require('../images/leclerc.jpeg')    
  },
  {
    id: uniqid(),
    name: 'Kevin Magnussen',
    img: require('../images/magnussen.jpeg')    
  },
  {
    id: uniqid(),
    name: 'Lando Norris',
    img: require('../images/norris.jpeg')    
  },
  {
    id: uniqid(),
    name: 'Esteban Ocon',
    img: require('../images/ocon.jpeg')    
  },
  {
    id: uniqid(),
    name: 'Sergio Perez',
    img: require('../images/perez.jpeg')    
  },
  {
    id: uniqid(),
    name: 'Daniel Ricciardo',
    img: require('../images/ricciardo.jpeg')    
  },
  {
    id: uniqid(),
    name: 'George Russell',
    img: require('../images/russell.jpeg')    
  },
  {
    id: uniqid(),
    name: 'Carlos Sainz',
    img: require('../images/sainz.jpeg')    
  },
  {
    id: uniqid(),
    name: 'Mick Schumacher',
    img: require('../images/schumacher.jpeg')    
  },
  {
    id: uniqid(),
    name: 'Lance Stroll',
    img: require('../images/stroll.jpeg')    
  },
  {
    id: uniqid(),
    name: 'Yuki Tsunoda',
    img: require('../images/tsunoda.jpeg')    
  },
  {
    id: uniqid(),
    name: 'Max Verstappen',
    img: require('../images/verstappen.jpeg')    
  },
  {
    id: uniqid(),
    name: 'Sebastian Vettel',
    img: require('../images/vettel.jpeg')    
  },
]

// shuffle ES6
const shuffleDrivers = () => {
  
  const copy = drivers

  copy.reverse().forEach((item, index) => {
      const j = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[j]] = [copy[j], copy[index]];
  });

  return copy;
};

export default shuffleDrivers