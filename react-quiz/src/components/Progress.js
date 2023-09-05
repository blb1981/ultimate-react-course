const Progress = ({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}) => {
  return (
    <header className='progress'>
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      {/* The value calculated by adding the 
      boolean value of whether or not the answer is null or not */}
      <p>
        <strong>Question </strong>
        {index + 1}/{numQuestions}
      </p>
      <p>
        <strong>Points </strong>
        {points}/{maxPossiblePoints}
      </p>
    </header>
  )
}

export default Progress
