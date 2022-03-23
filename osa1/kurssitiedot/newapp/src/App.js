const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  const Part = (props) => {
    return (
      <div>
        {props.name} {props.exercises}
      </div>
    )
  }
  const Content = (props) => {
    
    return (
      <div>
       <Part name = {parts[0].name} exercises ={parts[0].exercises}/>
       <Part name = {parts[1].name} exercises ={parts[1].exercises}/>
       <Part name = {parts[2].name} exercises ={parts[2].exercises}/>
      
      </div>
    )
  }
  
  const Total = (props) => {
    
    return (
      <div>
        <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
      </div>
    )
  }
  
  const Header = (props) => {
    //console.log(props.course)
    return (
      <div>
        <p>{props.course}</p>
      </div>
    )
  }
  
  return (
    <>
      
      <Header course = {course} />
      <Content parts={parts} />
      <Total parts={parts} />

    </>
  )

}

export default App