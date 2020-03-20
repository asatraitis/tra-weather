import React, {useState, useCallback} from 'react';
import './App.css';

import LocationSVG from './components/SVG/locationSVG';
import FormModal from './components/formModal/formModal';
import Card from './components/card/card';



function App() {
  const [locationForm, toggleLocationForm] = useState(false);
  const [locations, setLocations] = useState([]);

  const showLocationForm = useCallback(() => {
    toggleLocationForm(state => !state);
  },[toggleLocationForm])
  const addLocation = useCallback((loc) => {
    setLocations(oldLocations => {
      let newLocations = [...oldLocations];
      newLocations.push(loc);
      return newLocations;
    })
  },[setLocations])

  return (    
      <div className="App">
        <div className="logo">TraWeather</div>

        {locations.length?(
          locations.map(loc => <div className="card-container" key={loc.temperature + loc.date}><Card data={loc} /></div>)
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

        {
          locations.length?(
            <div onClick={showLocationForm} className="add-location">
              <LocationSVG size="60" />
            </div>
          ) : (
            null
          )
        }                  
      </div>    
  );
}

export default App;
