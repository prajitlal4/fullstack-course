import React from 'react'

const PersonForm = (props) => {
  const addName = props.addName;
  const newName = props.newName;
  const newNumber = props.newNumber;
  const handleNameChange = props.handleNameChange;
  const handleNumberChange = props.handleNumberChange;

  return (
    <div>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm