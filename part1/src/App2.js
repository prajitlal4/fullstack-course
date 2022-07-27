import { useState } from 'react'

const Statistics = (props) => {
  const all = props.good + props.bad + props.neutral
  const average = (props.good - props.bad) / all
  const positive = props.good / all * 100

  if (all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <div>
        <p>all {all}</p>
        <p>average {average}</p>
        <p>positive {positive}%</p>
      </div>
    </div>
  )
}

const App2 = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <Statistics good = {good} neutral = {neutral} bad = {bad} />
      </div>
    </div>
  )
}

export default App2