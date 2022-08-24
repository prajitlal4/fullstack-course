import React from 'react'

import Person from './Person.js'

const PersonList = ({personList}) => {
  const personToShow = personList

  return (
    <div>
      {personToShow.map(person => 
        <Person key={person.id} person={person} />
      )}
    </div>
  )
}

export default PersonList