import React, {useState} from 'react';
import './App.css';

import LocationSVG from './components/SVG/locationSVG';

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
      <div className="add-init"><LocationSVG /></div>
      <h3 className="init-help-text">Click to Add a Location</h3> 
    </div>
  );
}

export default App;
