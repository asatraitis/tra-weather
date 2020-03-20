import React, {useState} from 'react';
import './App.css';

import LocationSVG from './components/SVG/locationSVG';
import FormModal from './components/formModal/formModal';



function App() {
  const [locationForm, toggleLocationForm] = useState(false);

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
        :null
        }                    
      </div>    
  );
}

export default App;
