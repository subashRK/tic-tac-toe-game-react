import { useState, useEffect } from 'react';
import './App.css';
import Box from './components/Box';
import Header from './components/Header';
import PlayerScore from './components/PlayerScore';

function App() {
  const [boardValues, setBoardValues] = useState([])
  const [currentPlayer, setcurrentPlayer] = useState("O")
  const [mounted, setMounted] = useState(true)
  const [reset, setReset] = useState(false)
  const [score, setScore] = useState({
    x: 0,
    o: 0
  })

  useEffect(() => setMounted(false), [])

  useEffect(() => {
    if (reset || boardValues.length === 0) {
      setBoardValues(["", "", "", "", "", "", "", "", ""])
      setReset(false)
    }
  }, [reset, boardValues])

  useEffect(() => {
    if (mounted) return

    const checkGameStatus = () => {
      const askConfirmation = (status) => {
        !status && setScore(oldScore => {
          const newScore = oldScore
          newScore[currentPlayer.toLowerCase()] = newScore[currentPlayer.toLowerCase()] + 1
          return newScore
        })

        setTimeout(() => {
          const confirmation = window.confirm(`${status ? status : `${currentPlayer} wins the game`}. Do you want to begin the next game?`)

          if (confirmation) {
            setReset(true)
          }
        }, 50)
      }
  
      if (
        (boardValues[0] === currentPlayer) &&
        (boardValues[1] === currentPlayer) &&
        (boardValues[2] === currentPlayer)
        ) {
        askConfirmation()
      } else if (
        (boardValues[3] === currentPlayer) &&
        (boardValues[4] === currentPlayer) &&
        (boardValues[5] === currentPlayer)
      ) {
        askConfirmation()
      } else if (
        (boardValues[6] === currentPlayer) &&
        (boardValues[7] === currentPlayer) &&
        (boardValues[8] === currentPlayer)
      ) {
        askConfirmation()
      } else if (
        (boardValues[0] === currentPlayer) &&
        (boardValues[3] === currentPlayer) &&
        (boardValues[6] === currentPlayer)
      ) {
        askConfirmation()
      } else if (
        (boardValues[1] === currentPlayer) &&
        (boardValues[4] === currentPlayer) &&
        (boardValues[7] === currentPlayer)
      ) {
        askConfirmation()
      } else if (
        (boardValues[2] === currentPlayer) &&
        (boardValues[5] === currentPlayer) &&
        (boardValues[8] === currentPlayer)
      ) {
        askConfirmation()
      } else if (
        (boardValues[0] === currentPlayer) &&
        (boardValues[4] === currentPlayer) &&
        (boardValues[8] === currentPlayer)
      ) {
        askConfirmation()
      } else if (
        (boardValues[2] === currentPlayer) &&
        (boardValues[4] === currentPlayer) &&
        (boardValues[6] === currentPlayer)
      ) {
        askConfirmation()
      }

      let result = false

      for (let i = 0; i < 9; i++) {
        if (boardValues[i] !== "") {
          result = true
        } else {
          result = false
          break
        }
      }

      result && askConfirmation("Draw")
    }

    checkGameStatus()
    changeMove()
  }, [boardValues])

  const changeMove = () => {
    if (currentPlayer === "X") {
      setcurrentPlayer("O")
    } else {
      setcurrentPlayer("X")
    }
  }

  const updateBoardValue = i => {
    if (boardValues[i] !== "X" && boardValues[i] !== "Y") {
      setBoardValues(oldBoardValues => {
        const newBoardValues = oldBoardValues.map((item, index) => {
          if (index === i) {
            item = currentPlayer
          }
  
          return item
        })
  
        return newBoardValues
      })
    } else {
      alert("Invalid Move!")
    }
  }

  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center", marginTop: 10, marginBottom: "-30px", fontWeight: "normal" }}>{currentPlayer}'s Turn</h1>
      <Box boardValues={boardValues} updateBoardValue={updateBoardValue} />
      <PlayerScore x={score.x} o={score.o} />
    </div>
  );
}

export default App;
