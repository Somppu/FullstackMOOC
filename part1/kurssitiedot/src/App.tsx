type Course = { name: string; exercises: number };

type PartsKey = 'eka' | 'toka' | 'kolmas';
type PartObject = {
  [key in PartsKey]: Course;
};
const App = () => {
  //Kurssiolio
  const course = {
    name: 'Half Stack application development',
    parts: {
      eka: { name: 'Fundamentals of React', exercises: 10 },
      toka: { name: 'Using props to pass data', exercises: 7 },
      kolmas: { name: 'State of a component', exercises: 14 },
    },
  };

  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
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

const Content = (props: { parts: PartObject }) => {
  // {props.parts.map((part) => {
  //   return <Part part={part.name} excercises={part.exercices} />;
  // })}

  return (
    <div>
      <Part
        part={props.parts.eka.name}
        excercises={props.parts.eka.exercises}
      ></Part>
      <Part
        part={props.parts.toka.name}
        excercises={props.parts.toka.exercises}
      ></Part>
      <Part
        part={props.parts.kolmas.name}
        excercises={props.parts.kolmas.exercises}
      ></Part>
    </div>
  );
};

const Total = (props: { parts: PartObject }) => {
  const total =
    props.parts.eka.exercises +
    props.parts.toka.exercises +
    props.parts.kolmas.exercises;

  return <div>{total}</div>;
};

export default App;
