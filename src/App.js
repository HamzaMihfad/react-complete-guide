import React, { useState } from 'react';
import './App.css';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';

function App() {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');

  const onChangeHandler = (event) => {
    setText(event.target.value);
    setText2(event.target.value + 'test');
    //creating an error 
    const rnd = Math.random();
    if (rnd > 0.5)
      throw new Error('throw new error says: something went wrong');
  }

  return (
    <ErrorBoundary>
      <div className="App">
        <h1>Hellow World!</h1>
        <h2>{text}</h2>
        <input onChange={onChangeHandler} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
