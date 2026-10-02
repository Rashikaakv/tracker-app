import { useState, useEffect } from 'react'
import './App.css'
import Row from './Row'
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

  return (
    <>
      <h1>Coding Tracker</h1>
      <p>This week's leaderboard</p>
      {error && <p>Could not load players: {error}</p>}
      {players.map((p, i) => (
        <Row key={p.id} rank={i + 1} name={p.name} score={p.score} />
      ))}
    </>
  )
}

export default App