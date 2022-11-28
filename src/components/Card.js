function Card({value, handleClick}) {
  return (
    <div className="border-2 border-green">
      <img onClick={handleClick} src={value.image} alt="" />
    </div>
  )
}

export default Card