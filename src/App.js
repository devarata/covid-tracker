import React, {useState,useEffect} from 'react';
import './App.css';
import InfoBox from './InfoBox';
import Map from './Map'
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent
} from "@material-ui/core"

function App() {
  const [countries,setCountries] = useState([]);
  const[country, setCountry]=  useState('worldwide');
  const[countryInfo, setCountryInfo] = useState([]);

  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data =>{
      setCountryInfo(data)
    })

  },[]);

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

const onCountryChange = async (e)=> {
  const countryCode = e.target.value;
  setCountry(countryCode);


 const url = countryCode ==='worldwide' ? 'https://disease.sh/v3/covid-19/all':
 `https://disease.sh/v3/covid-19/countries/${countryCode}`

await fetch(url)
.then((response)=> response.json())
.then((data)=>{
  setCountry(countryCode);
  setCountryInfo(data);

});
};

  return (
    <div className = "App">
        <div className="app__left">

          <div className="app__header">
           <h2>Covid19 tracker</h2>
             <FormControl className="app__dropdown">
               <Select variant="outlined" value={country} onChange={onCountryChange}>
                 <MenuItem value="worldwide">Worldwide</MenuItem>
                 {
                   countries.map(country=> (
                     <MenuItem value={country.value}>{country.name}</MenuItem>
                   ))
                 }

               </Select>
             </FormControl>
           </div>

           <div  className="app__stats">
             <InfoBox title="Corona Virus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
             <InfoBox title="Recovered Cases" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
             <InfoBox title="Death Cases" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
           </div>
           <Map/>
        </div>
        <Card className="app__right">
          <CardContent>
            <h3>Live Cases by Country</h3>
            {/*Table*/}
            <h3>Worldwide new cases</h3>
              {/*Graph*/}
          </CardContent>
        </Card>




   </div>

    );
}

export default App;
