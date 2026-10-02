import './App.css'
import Row from './Row'

function App() {
  const players = [
    { id: 1, name: "Asha", score: 450 },
    { id: 2, name: "Ravi", score: 380 },
    { id: 3, name: "Rashikaa", score: 310 },
    { id: 4, name: "Meera", score: 500 },
  ]

  const sorted = [...players].sort((a, b) => b.score - a.score)

  return (
    <>
      <h1>Coding Tracker</h1>
      <p>This week's leaderboard</p>
      {sorted.map((p, i) => (
        <Row key={p.id} rank={i + 1} name={p.name} score={p.score} />
      ))}
    </>
  )
}

export default App