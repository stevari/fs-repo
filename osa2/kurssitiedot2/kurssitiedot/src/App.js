
const App = () => {


  const Course = (props) => {

    const Part = (props) => {
      console.log(props.name)
      return (
        <div>
          {props.name} {props.exercises}
        </div>
      )
    }

    const Header = (props) => {
      console.log(props.course.name)
      return (
        <div>
          <h1>{props.course.name}</h1>
        </div>
      )
    }


    return (
      <div>
        <Header course ={course}/>
        <div>
          {props.course.parts.map(part =>
            <>
              <Part name={part.name} exercises={part.exercises} />
              <br>
              </br>
            </>

          )}
        </div>
      </div>



    )
  }
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App;
