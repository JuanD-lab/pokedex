import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { Link} from "react-router-dom";

function Pokemon({match}) {
  const [datas, setDatas] = useState([])
  const [img, setImg] = useState("")
  const [abilities, setAbilities] = useState([])
  const [moves, setMoves] = useState([])

useEffect(() => {
  const promise = axios(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
  promise.then((response) => {
    setDatas(response.data)
    setImg(response.data.sprites.other.dream_world.front_default)
    setAbilities(response.data.abilities)
    setMoves(response.data.moves)
  })
}, [match])

  const abMap = abilities.map((ab) =>{
    return <p>{ab.ability.name}</p>
  })

  const movMap = moves.map((move) =>{
    return <p>{move.move.name}</p>
  })


  return (
      <div className="Pokemon">
        <Link to="/pokedex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        </Link>
        <div className="hero-show">
          <img className="show" src="show.png" alt="poke"/>
          <img className="pokeimg" src={img} alt="poke"/>
          <h1>{datas.name}</h1>
        </div>
        <div className="poke-info">
          <h3>Height: {datas.height}</h3>
          <h3>Weight: {datas.weight}</h3>
          <h3>Order: {datas.order}</h3>
        </div>
        <Link to={`/${match.params.id}/en`} replace>Encounters</Link>
        <div>
          <h4>Abilities</h4>
          {abMap.length > 0 ? abMap : null}
        </div>
        <div>
          <h4>Moves</h4>
          {movMap.length > 0 ? movMap : null}
        </div>
      </div>
    )
}
export default Pokemon