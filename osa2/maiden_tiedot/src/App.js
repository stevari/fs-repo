import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';



function App() {

  const[countries,setCountries] = useState([])
  const[newFilter,setNewFilter] = useState("")
  const [showAll] = useState(false)

  const handleFilterChange = (event) =>{
    setNewFilter(event.target.value)
  }
  useEffect(()=> {
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(response => {
      setCountries(countries.concat(response.data))
      //countries.forEach(country => console.log(country))

    })
  },[])

  const countriesToShow = showAll
  
  ? countries
  : countries.filter(country => country.name.common.toLocaleLowerCase().includes(newFilter))

  return (
    <div>
    <SearchBar 
    newFilter ={newFilter}
    handleFilterChange ={handleFilterChange}
    />
    <CountryDisplayer countriesToShow ={countriesToShow}/>
    </div>
    
  );
}

const SearchBar = (props) => {
  return(
    <div>
      find countries
      <input
        value={props.newFilter}
        onChange={props.handleFilterChange}
        />
    </div>
    
  )
}
const Country = (props) =>{
  let country =props.country
  return(
    <div>
      <h2>{country.name.common}</h2>
      <p>
        capital {country.capital}
        <br></br>
        area {country.area}
      </p>
      <>
      <h4>
        languages:
      </h4>
      <ul>
        {Object.values(country.languages).map(lang =>
          <li>{lang}</li>)}
      </ul>
      </>
      <>
      <img src={country.flags.png}/>
      </>    
    </div>
  )
}
const CountryDisplayer =(props) => {

  let length = props.countriesToShow.length
  if(length===1){
    return(
      <div>
        <Country country={props.countriesToShow[0]}/>
      </div>
    )
  }
  else if(length>10){
    return(
      <div>
        Too many matches, specify another filter
      </div>
    )
  }else if(length < 10 && length > 1){
    return(
      <div>
          <ul>
          {props.countriesToShow.map(country => 
            <li>{country.name.common}</li>
            )}
        </ul>
      </div>
  
    )
  }
  
}

export default App;
