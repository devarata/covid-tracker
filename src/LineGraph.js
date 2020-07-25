import React,{useState,useEffect} from 'react'

function LineGraph() {
  const [data,setData] = useState({});
  //https://disease.sh/v3/covid-19/historical/all?lastdays=120

 useEffect(()=>{
   fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
   .then(response => response.json())
   .then(data => {

   })
 })

  return (
    <div>
      <h3>I am a graph</h3>
    </div>
  )
}

export default LineGraph
