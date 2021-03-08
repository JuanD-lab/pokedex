import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function Encounters({match}) {
  const [areas, setAreas] = useState([])

  useEffect(() => {
    const promise = axios(`https://pokeapi.co/api/v2/pokemon/${match.params.id}/encounters`)
    promise.then((response) => {
      setAreas(response.data)
      console.log(response.data);
    })
  }, [match])

  const extractRegion = (r) => {
    let indice = r.indexOf("-");
    return r.substring(0, indice);
  }

  const extractArea = (a) => {
    let cadena = a;
    let start = cadena.indexOf("e-") +2;
    let end = cadena.indexOf("-a");
    return cadena.substring(start, end);
  }

  const areasMap = areas.map((area) => {
    return <div className="areas">
        <h4>Region: {extractRegion(area.location_area.name)}</h4>
        <h4>Area: {extractArea(area.location_area.name)}</h4>
      </div> 
  
  })
    return (
      <div className="Encounters" >
        <Link to={`/pokemon/${match.params.id}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        </Link>
        {areasMap ? areasMap : "No areas found"}
      </div>
    )
}

export default Encounters