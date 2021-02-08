import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as nt from '@narrative/core';
/** @jsx jsx */
const jsx = nt.bind(React.createElement, { Fragment });
import { If, For, show } from '@narrative/control-statement';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React + Narrative!</p>
        <p>
          <button {...show(count < 10)} onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and{' '}
          <For of={['save', 'to', 'test', 'HMR', 'updates']}>
            {(item, { index, isLast }) => (
              <Fragment key={index}>
                {item}
                <If condition={!isLast}> </If>
              </Fragment>
            )}
          </For>
          .
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
