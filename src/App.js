import React, {useState} from 'react';
import './App.css';

import LocationSVG from './components/SVG/locationSVG';
import FormModal from './components/formModal/formModal';

function App() {
  const [text, setText] = useState('');
  const [locationForm, toggleLocationForm] = useState(false);

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
  const showLocationForm = () => {
    toggleLocationForm(state => !state);
  }
  return (
    <div className="App">
      <div className="logo">TraWeather</div>
      <div onClick={showLocationForm} className="add-init">
        <LocationSVG />
        <div className="shadow"></div>
        <h3 className="init-help-text">Click to Add a Location</h3>
      </div>
      {locationForm?
        <FormModal toggle={showLocationForm}>
          <h1>FORM!</h1>
        </FormModal>
      :null}             
    </div>
  );
}

export default App;
