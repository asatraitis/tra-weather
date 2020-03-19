import React, {useState} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const checkAPI = () => {
    fetch('/API',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({msg: 'Hey server!'})
    }).then(response => response.json()).then(res => {
      console.log(res);
      setText(JSON.stringify(res));
    })
  }
  return (
    <div className="App">
      <div className="logo">TraWeather</div>
      <pre>
        {text}
      </pre>
      <button onClick={checkAPI}>Check API</button>
    </div>
  );
}

export default App;
