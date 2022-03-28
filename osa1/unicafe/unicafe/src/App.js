import { useState } from 'react'
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Display = ({ value }) => <div>{value}</div>
const StatisticLine = ({ text,value,text2 }) => <div>{text} {value} {text2} </div>
const Statistics = ({good,neutral,bad}) => {
  /// ...
  let all = good+neutral+bad;
  let average = 0;
  average = (good -1*bad)/all;

  let pospercentige = 0;
  pospercentige = (good/all)*100;
  if(all>0){ //show stats only when there has been atleast one user input
    return(
    
      <div>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="all" value ={all} />
        <StatisticLine text="average" value ={average} />
        <StatisticLine text="positive" value ={pospercentige} text2="%" />
        
  
      </div>
    )
  }else{
    return(
      <div>
        <h4>No feedback given :(</h4>
      </div>
    )
  }
 
}

const App = () => {
  // tallenna napit omaan tilaansa
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  const addGoodRev = () => setGood(good + 1)
  const addNeutralRev = () => setNeutral(neutral + 1)
  const addBadRev = () => setBad(bad + 1)
 

  return (
    <div>
      <h2>Give feedback!</h2>
      <br></br>
      <Button
        handleClick={addGoodRev}
        text='good'
      />
      <Button
        handleClick={addNeutralRev}
        text='neutral'
      />
      <Button
        handleClick={addBadRev}
        text='bad'
      />
      <br></br>

      <h2>Statistics:</h2> 

      <br></br> 
     
      <Statistics good = {good} neutral={neutral} bad = {bad}/>


         
    </div>
      
  
  )
}

export default App