import { useState } from 'react'

import PersonList from './components/PersonList.js'
import PersonForm from './components/PersonForm.js'
import Filter from './components/Filter.js'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0412 345 678', id: 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [filter, setFilter] = useState(false)

  const personToShow = filter
    ? persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
    : persons
  
  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    console.log(checkName)

    if (checkName === true) {
      alert(`${newName} is already added to phonebook` ) 
    }
    else {
      setPersons(persons.concat({name : newName, number: newNumber, id: persons.length+1}))
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

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    if (event.target.value === "") {
      setFilter(false)
      setSearchName(event.target.value)
    }
    else {
      setFilter(true)
      setSearchName(event.target.value)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} handleSearchChange={handleSearchChange} />
      <h3>Add new contact</h3>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h3>Numbers</h3>
      <PersonList personList={personToShow} />
    </div>
  )
}

export default App