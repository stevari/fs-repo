import { useState } from 'react'
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Display = ({ value }) => <div>{value}</div>

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
      <Display value={good}/>
      <Display value={neutral}/>
      <Display value={bad}/>
         
    </div>
      
  
  )
}

export default App