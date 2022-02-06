import React, { MouseEventHandler, useState } from 'react';

const App = () => {
  // tallenna napit omaan tilaansa
  const header1: string = 'give feedback';
  const header2: string = 'statics';
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleNaturalClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header header={header1}></Header>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNaturalClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Header header={header2}></Header>
      <Statics good={good} neutral={neutral} bad={bad}></Statics>
      {/* good: {good} <br />
      neutral: {neutral} <br />
      bad: {bad} <br />
      all: {good + neutral + bad}
      average: {(good * 1 + bad * -1) / (good + neutral + bad)}
      <br />
      positive: {(good / (good + neutral + bad)) * 100}%{' '} */}
    </div>
  );
};
const Header = (props: { header: string }) => {
  return <h1>{props.header}</h1>;
};

const Button = (props: {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
}) => {
  console.log(props);
  const { handleClick, text } = props;
  return <button onClick={handleClick}>{text}</button>;
};

const Statics = (props: {
  good: number;
  // all: number;
  // average: number;
  // positive: number;
  bad: number;
  neutral: number;
}) => {
  // const average: number = props.good;
  const all: number = props.good + props.neutral + props.bad;
  const average: number = props.good * 1 + (props.bad * -1) / all;
  const positive: number = (props.good / all) * 100;
  return (
    <p>
      good: {props.good} <br />
      neutral: {props.neutral} <br />
      bad: {props.bad} <br />
      all: {all} <br />
      average: {average} <br />
      positive: {positive}%
    </p>
  );
};

export default App;
