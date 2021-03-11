import Square from "./Square"

const Box = ({ boardValues, updateBoardValue }) => {
  return (
    <div className="box">
      <div>
        <Square i={0} values={boardValues} updateBoardValue={updateBoardValue} />
        <Square i={1} values={boardValues} updateBoardValue={updateBoardValue} />
        <Square i={2} values={boardValues} updateBoardValue={updateBoardValue} />
      </div>
      <div>
        <Square i={3} values={boardValues} updateBoardValue={updateBoardValue} />
        <Square i={4} values={boardValues} updateBoardValue={updateBoardValue} />
        <Square i={5} values={boardValues} updateBoardValue={updateBoardValue} />
      </div>
      <div>
        <Square i={6} values={boardValues} updateBoardValue={updateBoardValue} />
        <Square i={7} values={boardValues} updateBoardValue={updateBoardValue} />
        <Square i={8} values={boardValues} updateBoardValue={updateBoardValue} />
      </div>
    </div>
  )
}

export default Box
