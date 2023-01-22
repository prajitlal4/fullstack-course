import React from 'react'
import personService from '../services/persons'

const Person = ({person}) => {
  const {name, number} = person;

  const handleDeleteClick = () => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.remove(person.id)
    }
  }

  return (
    <div>
      {name} {number}
      <button onClick={handleDeleteClick}>delete</button>
    </div>
  )
}

export default Person