import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  
  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    setPersons(persons.concat({name : newName}))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      <div>debug: {newName}</div>
      </form>
      <h2>Numbers</h2>
      <p>
        {persons.map(person =>
          <p key={person.name}> {person.name} </p>
        )}
      </p>
    </div>
  )
}

export default App