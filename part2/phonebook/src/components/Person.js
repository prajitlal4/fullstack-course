import React from 'react'

const Person = ({person}) => {
  const name = person.name
  const number = person.number

  return (
    <div>
      <p>{name} {number}</p>
    </div>
  )
}

export default Person