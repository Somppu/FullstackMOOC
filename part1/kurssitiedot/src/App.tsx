import React from 'react';

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course}></Header>

      <Content parts={part1} exercises={exercises1}></Content>
      <Content parts={part2} exercises={exercises2}></Content>
      <Content parts={part3} exercises={exercises3}></Content>

      <Total total={exercises1 + exercises2 + exercises3}></Total>
    </div>
  );
};

const Header = (props: { course: string }) => {
  console.log(props);
  return <h1>{props.course}</h1>;
};

const Content = (props: { parts: string; exercises: number }) => {
  return (
    <p>
      {props.parts} {props.exercises}
    </p>
  );
};

const Total = (props: { total: number }) => {
  return <p>Number of exercises {props.total}</p>;
};

export default App;
