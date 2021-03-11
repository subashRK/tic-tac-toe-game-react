import React from 'react'

const PlayerScore = ({ x, o }) => {
  return (
    <div className="badge-container">
      <div className="badge1">X : {x}</div>
      <div className="badge2">O : {o}</div>
    </div>
  )
}

export default PlayerScore
