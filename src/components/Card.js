function Card(props) {
  return (
    // <div className="flex flex-col hover:bg-sky-700 hover:text-white active:bg-violet-700 active:text-white">
    //   <img className="object-cover object-top 3xl:h-48 3xl:w-96" onClick={() => props.handleClick(props.driver.id)} src={props.driver.img} alt="" />
    //   <p className="">{props.driver.name}</p>
    // </div>

    <div className="flex flex-col items-center bg-white border rounded-lg shadow-md overflow-hidden">
      <img className="2xl:h-60 2xl:max-w-max object-cover" onClick={() => props.handleClick(props.driver.id)} src={props.driver.img} alt="" />
      <p className="hidden 2xl:visible 2xl:text-9xl p-1">{props.driver.name}</p>
    </div>
  )
}

export default Card