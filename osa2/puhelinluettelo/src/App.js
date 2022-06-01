import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll] = useState(false)

  const addPerson = (event) => {
    event.preventDefault()
    //console.log('add -button clicked', event.target)
    const person = {
      name:newName,
      number:newNumber
    }
    if(persons.find( ({ name }) => name.trim().toLocaleLowerCase() === newName.trim().toLocaleLowerCase() )){
      alert(`${newName} is already added to phonebook`)
    }else{
      setPersons(persons.concat(person)) 
    }
    
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    //console.log(event.target.value)
    
    setNewFilter(event.target.value)
    
  }

  const personsToShow = showAll
  ? persons
  : persons.filter(person=>person.name.trim().toLocaleLowerCase().includes(newFilter.trim().toLocaleLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter 
          filter={newFilter} 
          handleFilterChange={handleFilterChange}/>
      <h2>Add a new</h2>
        <PersonForm
          newName={newName}
          handleNameChange={handleNameChange}
          newNumber={newNumber}
          handleNumberChange={handleNumberChange}
          addPerson={addPerson}
          
        />
      <h2>Numbers</h2>
      <Persons personsToShow ={personsToShow}/>

    </div>
  )

}



export default App
