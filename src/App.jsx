import { useState, useEffect } from 'react'
import './App.css'
import Row from './Row'
import Podium from './Podium'
import { supabase } from './supabaseClient'

function App() {
  const [players, setPlayers] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadPlayers() {
      const { data, error } = await supabase
        .from('players')
        .select('*')
        .order('score', { ascending: false })

      if (error) {
        setError(error.message)
      } else {
        setPlayers(data)
      }
    }

    loadPlayers()
  }, [])

  const topScore = players.length > 0 ? players[0].score : 0
  const topThree = players.slice(0, 3)
  const rest = players.slice(3)

  return (
    <>
      <header className="header">
        <h1 className="logo">Coding Tracker</h1>
        <p className="tagline">Code daily. Climb the league.</p>
      </header>

      <div className="stats">
        <div className="stat">
          <strong>{players.length}</strong>
          <span>players</span>
        </div>
        <div className="stat">
          <strong>{topScore}</strong>
          <span>top XP</span>
        </div>
      </div>

      <h2 className="board-title">This week's league</h2>
      {error && <p className="error">Could not load players: {error}</p>}

      <Podium players={topThree} />

      {rest.map((p, i) => (
        <Row key={p.id} rank={i + 4} name={p.name} score={p.score} />
      ))}
    </>
  )
}

export default App