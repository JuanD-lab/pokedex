import React, { useState, useEffect } from "react";
import axios from "axios";

function Card({arr}) {
  const [infos, setInfos] = useState(null)
    useEffect(() => {
      const promise = axios(arr)
      promise.then((response) => {
        setInfos(response.data.sprites.front_shiny)
      })
    }, [arr])
    return (
      <div className="Card">
        <h2>pokemon</h2>
        <div className="Card-inner">
          <img src={infos} alt={"pokemon"}/>
          <div className="info-inner">
            <p>Helth</p>
          </div>
        </div>
      </div>
    )
}

export default Card