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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
    {courses.map(course=>
      <Course key={course.id} course={course}/>
    )}
    </div>
  )
}

export default App