import { useState,useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import personService from './services/personService'
//http://localhost:3001/persons
//npx json-server --port=3001 --watch db.json
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll] = useState(false)

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
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
      handlePersonUpdate(person)
    }else{
      //setPersons(persons.concat(person))
      personService
      .create(person)
      .then(returnedPersons =>{
        setPersons(persons.concat(returnedPersons))
      })
    }
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  const handlePersonDelete = (pname) => {
    if(window.confirm("Delete "+pname+"?")){
      console.log(pname+" to be deleted")
    let person = persons.find(person => person.name === pname)
    //console.log(id.id)
    personService
    .del(person.id);
    personService
    .getAll()
    .then(persons => {
      setPersons(persons)
    })
    }
  }
  const handlePersonUpdate = (p) => {
    if(window.confirm(`${p.name} is already added to phonebook, replace the old number with a new one?`)){
      //console.log("moi")
      let person = persons.find(person => person.name === p.name)
      personService
      .update(person.id,p)
      personService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
    }
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
      <Persons personsToShow ={personsToShow} handlePersonDelete ={handlePersonDelete} />
      

    </div>
  )
  

}



export default App
