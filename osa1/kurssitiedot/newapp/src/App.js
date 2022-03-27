const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  const Part = (props) => {
    console.log(props.name)
    return (
      <div>
        {props.name} {props.exercises}
      </div>
    )
  }
  const Content = (props) => {
    
    return (
      <div>
       <Part name = {course.parts[0].name} exercises ={course.parts[0].exercises}/>
       <Part name = {course.parts[1].name} exercises ={course.parts[1].exercises}/>
       <Part name = {course.parts[2].name} exercises ={course.parts[2].exercises}/>
       
       
      
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
    console.log(props.course.name)
    return (
      <div>
        <p>{props.course.name}</p>
      </div>
    )
  }
  
  return (
    <>
      
      <Header course = {course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />

    </>
  )

}

export default App