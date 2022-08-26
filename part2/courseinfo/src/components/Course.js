import React from 'react'

import Header from './Header.js'
import Content from './Content.js'

const Course = ({course}) => {
  const total = course.parts.reduce((a, b) => {
    return {exercises: a.exercises + b.exercises}
  });

  return (
    <div>
      <Header header={course.name}/>
      <Content content={course.parts}/>
      <p>total of {total.exercises} exercises</p>
    </div>
  )
}

export default Course