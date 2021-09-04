import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Joke from './Joke';
import JokeData from './JokeData';

function dataFun(val)
{
  console.log(val);
  return(
    <JokeData
      Question={val.Question}
      Answer={val.Answer}
    />
  );
}

ReactDOM.render(
  <div>
  {JokeData.map(dataFun)}
  </div>,
  document.getElementById('root')
);

