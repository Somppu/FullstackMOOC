type Course = { name: string; exercices: number };

const App = () => {
  const course = 'Half Stack application development';

  const parts: Course[] = [
    { name: 'Fundamentals of React', exercices: 10 },
    { name: 'Using props to pass data', exercices: 7 },
    { name: 'Using props to pass data', exercices: 14 },
  ];

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts}></Content>
      <Total parts={parts}></Total>
    </div>
  );
};

const Header = (props: { course: string }) => {
  console.log(props);
  return <h1>{props.course}</h1>;
};

const Part = (props: { part: string; excercises: number }) => {
  return (
    <p>
      {props.part} {props.excercises}
    </p>
  );
};

const Content = (props: { parts: Course[] }) => {
  // {props.parts.map((part) => {
  //   return <Part part={part.name} excercises={part.exercices} />;
  // })}

  return (
    <div>
      <Part part={props.parts[0].name} excercises={props.parts[0].exercices} />
      <Part part={props.parts[1].name} excercises={props.parts[1].exercices} />
      <Part part={props.parts[2].name} excercises={props.parts[2].exercices} />
    </div>
  );
};

const Total = (props: { parts: Course[] }) => {
  const total =
    props.parts[0].exercices +
    props.parts[1].exercices +
    props.parts[2].exercices;

  return <div>{total}</div>;
};

export default App;
