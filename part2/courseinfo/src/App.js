const Part = ({part}) => {
  const name = part.name
  const exercises = part.exercises

  return (
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}

const Header = ({header}) => {
  return (
    <h1>{header}</h1>
  )
}

const Content = ({content}) => {
  const parts = content

  return (
    <p>
    {parts.map(part=>
      <Part key={part.id} part={part}/>
    )}
  </p>
  )
}

const Course = ({course}) => {
  const total = course.parts.reduce((a, b) => {
    return {exercises: a.exercises + b.exercises}
  })

  return (
    <div>
      <Header header={course.name}/>
      <Content content={course.parts}/>
      <p>total of {total.exercises} exercises</p>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Programming languages (TEST)',
        exercises: 9,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App