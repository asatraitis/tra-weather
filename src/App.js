import React, {useState} from 'react';
import './App.css';

import LocationSVG from './components/SVG/locationSVG';
import FormModal from './components/formModal/formModal';



function App() {
  const [locationForm, toggleLocationForm] = useState(false);
  const [locations, setLocations] = useState([]);

  const showLocationForm = () => {
    toggleLocationForm(state => !state);
  }
  const addLocation = (loc) => {
    setLocations(oldLocations => {
      let newLocations = [...oldLocations];
      newLocations.push(loc);
      console.log(newLocations)
      return newLocations;
    })
  }
  return (    
      <div className="App">
        <div className="logo">TraWeather</div>

        {locations.length?(
          locations.map(loc => <div key={loc.location}>LOCATION</div>)
        ):(
          <div onClick={showLocationForm} className="add-init">
          <LocationSVG />
          <div className="shadow"></div>
          <h3 className="init-help-text">Click to Add a Location</h3>
        </div>         
        )}
    
        {locationForm?
          <FormModal toggle={showLocationForm} addLocation={addLocation}>
            <h1>FORM!</h1>
          </FormModal>
        :null
        }                    
      </div>    
  );
}

export default App;
