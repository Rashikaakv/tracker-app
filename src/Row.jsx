function Row(props) {
  return (
    <p>
      {props.rank}. {props.name} - {props.score} points
    </p>
  )
}

export default Row