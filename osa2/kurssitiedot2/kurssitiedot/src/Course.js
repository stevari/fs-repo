const Part = (props) => {
    return (
      <div>
        {props.name} {props.exercises} {props.id}
      </div>
    )
  }

  const Header = (props) => {
    return (
      <div>
        <h2>{props.course.name}</h2>
      </div>
    )
  }


const Course = (props) => {

    const total = props.course.parts.reduce((prevValue,currentValue)=>
    prevValue+currentValue.exercises,0);

    return (
      <div>
        <Header course={props.course} />
        <>
          {props.course.parts.map(part =>
            <>
              <Part name={part.name} exercises={part.exercises} />
              <br>
              </br>
            </>
          )}

          <b>total of {total} exercises.</b>
        </>
      </div>
    )
  }
  export default Course;
