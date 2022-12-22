import { useState, useEffect, useContext } from "react";
import { DataContext } from '../contexts/DataProvider'

export default function Pokemon() {
    const [pokemon, setPokemon] = useState({})
    const [loadState, setLoadState] = useState("LOADING")
    const { fetchPokemon } = useContext(DataContext)
    
    useEffect(() => {
        async function handleFetchPokemon() {
            const data = await fetchPokemon(1)
            setPokemon(data)
            setLoadState("LOADED")
        }

        handleFetchPokemon()
    }, [])

    // original function and use effect
    // async function fetchPokemon(parameter) {
    //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${parameter}`)
    //     const data = await response.json()
    //     console.log("API REQUEST")
    //     // setPokemonId(data.id)
    //     setPokemon(data)
    //     // setPokemonQuery("")
    //     setLoadState("LOADED")
    // }
    // useEffect(() => {
    //     fetchPokemon(1)
    // }, [])

    async function searchPokemon(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        console.log(formData.get('pokemonName'))

        const data = await fetchPokemon(formData.get('pokemonName'))
        setPokemon(data)
        setLoadState("LOADED")

        event.target.reset()
    }

    async function buttonClick(val) {
        pokemon.id += val
        const data = await fetchPokemon(pokemon.id)
        setPokemon(data)
        setLoadState("LOADED")
    }

    return (
        <div className='pokemon'>
            <h1>Pokemon</h1>
            <p>Showing pokemon ID: { pokemon.id }</p>
            <form onSubmit={searchPokemon}>
                <input type="text" name="pokemonName" />
                <button>Search</button>
            </form>
            {
                (loadState === 'LOADED') ?
                <>
                    <img src={ pokemon.sprites.front_default } alt="" />
                    <h2>{ pokemon.name }</h2>
                    <p>Height: { pokemon.height }</p>
                    <p>Weight: { pokemon.weight }</p>    
                </> :
                <p>Loading...</p>
            }
            {
                (pokemon.id > 1) ?
                <button onClick={() => buttonClick(-1)}>Previous Pokemon</button>
                : <></>
            }
            {
                (pokemon.id < 905) ?
                <button onClick={() => buttonClick(1)}>Next Pokemon</button>
                : <></>
            }
        </div>
    )
}