const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
 


  return (
    <>
      
      <Header course = {course} />
      <Content p1 = {part1.name} e1 = {part1.exercises} p2 = {part1.name} e2 = {part2.exercises} p3 = {part1.name} e3 = {part3.exercises} />
      <Total e1 ={part1.exercises} e2={part2.exercises} e3 ={part3.exercises}/>

    </>
  )

}
const Part = (props) => {
  const partname = props.partname
  const exercises = props.exercises
  return (
    <div>
      {partname} {exercises}
    </div>
  )
}
const Content = (props) => {
  
  return (
    <div>
     <Part partname = {props.p1} exercises = {props.e1}/>
     <Part partname = {props.p2} exercises = {props.e2}/>
     <Part partname = {props.p3} exercises = {props.e3}/>
    </div>
  )
}

const Total = (props) => {
  
  const exercises = props.e1+props.e2+props.e3
  return (
    <div>
      <p>Number of exercises {exercises}</p>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}


export default App