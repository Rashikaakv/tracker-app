import './Row.css'

function Row(props) {
  const medal = props.rank <= 3 ? `medal-${props.rank}` : ''

  return (
    <div className="row">
      <span className={`rank ${medal}`}>{props.rank}</span>
      <span className="name">{props.name}</span>
      <span className="score">{props.score} XP</span>
    </div>
  )
}

export default Row