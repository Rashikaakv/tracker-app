import './Row.css'

function Row(props) {
  return (
    <div className="row">
      <span className="rank">{props.rank}</span>
      <span className="name">{props.name}</span>
      <span className="score">{props.score} XP</span>
    </div>
  )
}

export default Row