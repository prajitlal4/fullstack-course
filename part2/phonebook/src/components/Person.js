import React from 'react'

const Person = ({person}) => {
  const {name, number} = person

  return (
    <div>
      <p>{name} {number}</p>
    </div>
  )
}

export default Person