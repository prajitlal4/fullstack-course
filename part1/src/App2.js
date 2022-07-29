import { useState } from 'react'

const Button = (props) => {
  const type = props.type
  const name = props.name
  const setState = props.setState

  return (
    <button onClick={() => setState(type + 1) }> {name} </button>
  )
}

const StatisticLine = (props) => {
  const text = props.text
  const value = props.value

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const all = props.good + props.bad + props.neutral
  const average = (props.good - props.bad) / all
  const positive = props.good / all * 100
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad

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
        <StatisticLine text={"good"} value={good} />
        <StatisticLine text={"neutral"} value={neutral} />
        <StatisticLine text={"bad"} value={bad} />
        <StatisticLine text={"all"} value={all} />
        <StatisticLine text={"average"} value={average} />
        <StatisticLine text={"positive"} value={positive + " %"} />
      </div>
    </div>
  )
}

const App2 = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button type={good} name={"good"} setState={setGood}/>
        <Button type={neutral} name={"neutral"} setState={setNeutral}/>
        <Button type={bad} name={"bad"} setState={setBad}/>
      </div>
      <div>
        <Statistics good = {good} neutral = {neutral} bad = {bad} />
      </div>
    </div>
  )
}

export default App2