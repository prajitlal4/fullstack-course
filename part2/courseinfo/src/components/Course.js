import React from 'react'

const Part = ({part}) => {
  const {name, exercises} = part

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
  return (
    <p>
      {content.map(part=>
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

export default Course