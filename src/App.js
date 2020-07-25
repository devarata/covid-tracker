import React, {useState} from 'react';
import './App.css';

import {
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core"


function App() {
  const [countries,setCountries] = useState([
    'USA','UK','India'
  ]);


    return (
    <div className = "App">

     <div className="app__header">
      <h2>Covid19 tracker</h2>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {
              countries.map(country=> (
                <MenuItem value={country}>{country}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>

      {/*Header*/}
      {/*Title + select input dropdown*/}

      {/*Info boxes*/}
      {/*Info boxes*/}
      {/*Info boxes*/}

      {/*Table*/}
      {/*Graph*/}

      {/*Maps*/}
   </div>

    );
}

export default App;
