import React, {useState} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');

  const onChangeHandler = (event) => {
    setText(event.target.value);
    setText2(event.target.value + 'test');
    console.log(text);
  }

  return (
    <div className="App">
      <h1>Hellow World!</h1>
  <h2>{text}</h2>
      <input onChange={onChangeHandler}/>
    </div>
  );
}

export default App;
