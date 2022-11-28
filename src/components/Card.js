function Card(props) {
  return (
    <div className="flex flex-col items-center bg-white border rounded-lg shadow-md overflow-hidden cursor-pointer">
      <img className="2xl:h-60 2xl:max-w-max object-cover" onClick={() => props.handleClick(props.driver.id)} src={props.driver.img} alt="" />
      {/* <p className="hidden 2xl:visible 2xl:text-9xl p-1">{props.driver.name}</p> */}
    </div>
  )
}

export default Card