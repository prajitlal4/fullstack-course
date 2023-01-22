import { useState, useEffect } from 'react'
import personService from './services/persons'

import PersonList from './components/PersonList.js'
import PersonForm from './components/PersonForm.js'
import Filter from './components/Filter.js'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const personToShow = filter
    ? persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
    : persons;
  
  const checkName = persons.some(person => {
    if (person.name === newName) {
      return true;
    }
    return false;
  });

  const addName = (event) => {
    event.preventDefault();

    if (checkName === true) {
      alert(`${newName} is already added to phonebook` ) ;
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length+1}

      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewNumber('');
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    if (event.target.value === "") {
      setFilter(false);
      setSearchName(event.target.value);
    }
    else {
      setFilter(true);
      setSearchName(event.target.value);
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