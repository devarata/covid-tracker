import React, {useState,useEffect} from 'react';
import './App.css';

import {
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core"

//https://disease.sh/v3​/covid-19​/countries
function App() {
  const [countries,setCountries] = useState([

  ]);

useEffect(()=>{
 const getCountriesData = async () => {
   await fetch('https://disease.sh/v3/covid-19/countries')
   .then((response) => response.json())
   .then((data)=>{
     const countries = data.map(
              (country) => ({
                name: country.country,
                value: country.countryInfo.iso2,
              }));
setCountries(countries);
   });

 };
 getCountriesData();
},[]);

    return (
    <div className = "App">

     <div className="app__header">
      <h2>Covid19 tracker</h2>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {
              countries.map(country=> (
                <MenuItem value={country.value}>{country.name}</MenuItem>
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
