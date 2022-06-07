import personService from "../services/personService"
const Persons = (props) => {
    return (
    <ul>
       {props.personsToShow.map(person =>
        <li key={person.name}>{person.name} {person.number} 
        <button onClick={() => props.handlePersonDelete(person.name)}>delete</button>
        </li>)}
    </ul>
  )
  }

  export default Persons