import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0412 345 678' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    console.log(checkName)

    if (checkName === true) {
      alert(`${newName} is already added to phonebook` ) 
    }
    else {
      setPersons(persons.concat({name : newName, number: newNumber}))
      setNewName('')
      setNewNumber('')
    }
  }

  const checkName = persons.some(person => {
    if (person.name === newName) {
      return true
    }
    return false
  })

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      <div>debug: {newName} {newNumber}</div>
      </form>
      <h2>Numbers</h2>
      <p>
        {persons.map(person =>
          <p key={person.name}> {person.name} {person.number}</p>
        )}
      </p>
    </div>
  )
}

export default App