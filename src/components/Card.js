import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Card({arr}) {
  const [infos, setInfos] = useState([])
  const [stats, setStats] = useState([])
  const [types, setTypes] = useState([])
  const [imgUrl, setImgUrl]= useState(``)
  const [id, setId] = useState("")
    useEffect(() => {
      const promise = axios(arr)
      promise.then((response) => {
        setInfos([response.data.name])
        setTypes(response.data.types.map((type) => {
          return type.type.name
        }))
        const pokeName = response.data.name
        setId(response.data.id)
        setImgUrl(`https://projectpokemon.org/images/normal-sprite/${pokeName}.gif`)
        setStats([response.data.stats[0].base_stat, response.data.stats[1].base_stat, response.data.stats[2].base_stat, response.data.stats[5].base_stat])
      })
    }, [arr, types])
    return (
      <div className="Card" >
        <div className="card-container">
          <div className="pokemon-container">
            <div className="poke-card">
              <div className="name">
                <Link className="link" to={`/pokemon/${id}`}>
                  <h1>{infos[0]}</h1>
                </Link>
                <div className="hp">
                <label for="hp">HP {stats[0]}</label>
                <progress id="hp" value={stats[0]} max="100">{stats[0]}</progress>
                </div>
              </div>
              <ul className="stats">
                {types.length >= 2 ? <li>{types[0]} / {types[1]}<br /><span>Type</span></li> : <li>{types[0]}<br /><span>Type</span></li>}
                <li>{stats[1]}<br /><span>Attack</span></li>
                <li>{stats[2]}<br /><span>Defense</span></li>
                <li>{stats[3]}<br /><span>Speed</span></li>
              </ul>
              <div className="info">
                <img src={imgUrl} alt="pokemon"/>
              </div>
              <div className="transfer">
                <Link to={`/${id}/en`}>
                  <button className="button">Encounters</button>
                </Link>          
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Card