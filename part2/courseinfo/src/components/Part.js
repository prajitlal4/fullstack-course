import React from 'react'

const Part = ({part}) => {
  const {name, exercises} = part;

  return (
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}

export default Part