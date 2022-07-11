import { useContext, useEffect } from "react"
import { PokemonContext } from "../context/PokemonContext"
import { CardPokemon } from "./CardPokemon"

export function ListPokemons() {
  const { renderPokemons, pokeDados, page } = useContext(PokemonContext)

  useEffect(() => {
    renderPokemons()
  }, [page])

  return (
    <>
      {pokeDados && pokeDados.map(pokemon => (
        <CardPokemon
          key={pokemon.id}
          image={pokemon.sprites.other.dream_world.front_default}
          name={pokemon.name}
          id={pokemon.id}
          types={pokemon.types}
        />
      ))}
    </>
  )
}