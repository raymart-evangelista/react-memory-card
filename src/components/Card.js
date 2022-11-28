function Card(props) {
  return (
    <div className="flex flex-col border-2 border-green-500">
      <img className="object-cover object-top 3xl:h-64 3xl:w-96" onClick={() => props.handleClick(props.driver.id)} src={props.driver.img} alt="" />
      <p className="text-xs">{props.driver.name}</p>
    </div>
  )
}

export default Card