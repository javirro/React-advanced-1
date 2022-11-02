import React, { useState, useEffect } from "react"
import '../styles/pokemon.css'

export const PokemonSlideShow = () => {
  const [pokemonNameList, setPokemonNameList] = useState([])
  const [currentName, setCurrentName] = useState(null)
  const [pokemonData, setPokemonData] = useState([])
  const [pokemonToShow, setPokemonToShow] = useState(null)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setPokemonNameList([...pokemonNameList, currentName])
  }
  useEffect(() => {
    (async function () {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonNameList[pokemonNameList.length - 1])
      const pokeData = await res.json()
      setPokemonData(s => [...s, pokeData])
    })()
  }, [pokemonNameList])

  useEffect(() => {
    const t = setInterval(() => {
      if (pokemonData.length !== 0) {
        setPokemonToShow(s => {
          const pokemonNumber = pokemonData.length
          const index = pokemonData.indexOf(s)
          if (index === undefined || index === null || index === -1) return (pokemonData[0])
          if (index < pokemonNumber - 1) return (pokemonData[index + 1])
          else return (pokemonData[0])
        })
      }
    }, 2000)
    return () => { clearInterval(t) }
  }, [pokemonData])

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" value={currentName} onChange={(e) => setCurrentName(e.target.value)} />
        <button id="submit-bt">Añadir pokemon</button>
      </form>

      {pokemonToShow !== null &&
        <div className="pokemon-img-div">
          <h4> {pokemonToShow.name} </h4>
          <img key={pokemonToShow.name} src={pokemonToShow?.sprites?.front_default} alt={pokemonToShow.name} />
        </div>}
    </div>
  )
}