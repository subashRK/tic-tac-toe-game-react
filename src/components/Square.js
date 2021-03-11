const Square = ({ i, values, updateBoardValue }) => {
  return (
    <div className="square" onClick={() => updateBoardValue(i)}>
      <span>{values[i]}</span>
    </div>
  )
}

export default Square
