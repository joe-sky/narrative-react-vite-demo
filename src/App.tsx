import { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { If, For } from '@narrative/control-flow';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React + Narrative!</p>
        <p>
          <If when={count < 10}>
            <button onClick={() => setCount((count) => count + 1)}>count is: {count}</button>
          </If>
        </p>
        <p>
          Edit <code>App.jsx</code> and{' '}
          <For of={['save', 'to', 'test', 'HMR', 'updates']}>
            {(item, { index }, arr) => (
              <Fragment key={index}>
                {item}
                <If when={index < arr.length - 1}> </If>
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
