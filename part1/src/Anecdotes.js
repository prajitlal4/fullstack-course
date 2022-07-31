import { useState } from 'react'

const Anecdotes = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  

  const pointsInitialArray = new Array(anecdotes.length).fill(0)

  const [points, setPoints] = useState(pointsInitialArray);
  const [selected, setSelected] = useState(0) 
  const [mostVoted, setMostVoted] = useState(0) // keeping track of the index of the most voted in the votes array.
  const votes = [...points]

  const handleSelected = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVotes = () => {
    votes[selected] += 1
    if (votes[selected] > votes[mostVoted]) {
      setMostVoted(selected);
    }
    setPoints(votes)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Has {points[selected]} votes.</p>
      <button onClick={handleVotes}>Vote</button>
      <button onClick={handleSelected}>Next anecdote</button>
      <h1>most voted anecdote</h1>
      <p>{anecdotes[mostVoted]}</p>
    </div>
  )
}

export default Anecdotes