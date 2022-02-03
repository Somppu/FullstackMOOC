const App = () => {
  const course = 'Half Stack application development';

  const parts = {
    part1: { name: 'Fundamentals of React', exercices: 10 },
    part2: { name: 'Using props to pass data', exercices: 7 },
    part3: { name: 'Using props to pass data', exercices: 14 },
  };

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

const Content = (props: {
  parts: {
    part1: { name: string; exercices: number };
    part2: { name: string; exercices: number };
    part3: { name: string; exercices: number };
  };
}) => {
  return (
    <div>
      <Part
        part={props.parts.part1.name}
        excercises={props.parts.part1.exercices}
      />
      <Part
        part={props.parts.part2.name}
        excercises={props.parts.part2.exercices}
      />
      <Part
        part={props.parts.part3.name}
        excercises={props.parts.part3.exercices}
      />
    </div>
  );
};

const Part = (props: { part: string; excercises: number }) => {
  return (
    <p>
      {props.part} {props.excercises}
    </p>
  );
};
const Total = (props: {
  parts: {
    part1: { exercices: number };
    part2: { exercices: number };
    part3: { exercices: number };
  };
}) => {
  return (
    <div>
      {props.parts.part1.exercices +
        props.parts.part2.exercices +
        props.parts.part3.exercices}
    </div>
  );
};

export default App;
