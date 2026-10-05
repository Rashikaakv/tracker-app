import './Podium.css'

const TROPHY_COLORS = {
  1: '#f5b301',
  2: '#cbd5e1',
  3: '#cd7f32',
}

function Trophy({ place }) {
  const color = TROPHY_COLORS[place]

  return (
    <svg className="trophy" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3h10v5a5 5 0 0 1-10 0V3z" fill={color} />
      <path
        d="M7 4H4v2a3 3 0 0 0 3 3M17 4h3v2a3 3 0 0 1-3 3"
        fill="none"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="11" y="13" width="2" height="4" fill={color} />
      <rect x="8" y="17" width="8" height="3" rx="1" fill={color} />
    </svg>
  )
}

function PodiumSpot({ player, place }) {
  if (!player) return null

  return (
    <div className={`spot spot-${place}`}>
      <div className="avatar-wrap">
        <div className="avatar">{player.name.charAt(0).toUpperCase()}</div>
        <Trophy place={place} />
      </div>
      <div className="spot-name">{player.name}</div>
      <div className="spot-score">{player.score} XP</div>
      <div className="block">
        <span className="block-number">{place}</span>
      </div>
    </div>
  )
}

function Podium(props) {
  const [first, second, third] = props.players

  return (
    <div className="podium">
      <PodiumSpot player={second} place={2} />
      <PodiumSpot player={first} place={1} />
      <PodiumSpot player={third} place={3} />
    </div>
  )
}

export default Podium