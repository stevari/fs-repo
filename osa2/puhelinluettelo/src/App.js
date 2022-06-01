import { useState,useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll] = useState(false)

  useEffect(() => {
    axios
    .get("http://localhost:3001/persons")
    .then(response =>{
      setPersons(response.data)
    })
  },[])

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
