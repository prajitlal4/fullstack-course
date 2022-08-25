import React from 'react'

import Person from './Person.js'

const PersonList = ({personList}) => {
  return (
    <div>
      {personList.map(person => 
        <Person key={person.id} person={person} />
      )}
    </div>
  )
}

export default PersonList