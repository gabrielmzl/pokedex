import { createContext } from "react";
import usePokemon from "./hooks/usePokemon";

const PokemonContext = createContext();

function PokemonProvider({ children }) {
  const { getPokemon, pokemon, page, totalPages, renderPokemons, pokeDados, setPage, setModalIsOpen, modalIsOpen } = usePokemon();

  return (
    <PokemonContext.Provider value={{ getPokemon, pokemon, page, totalPages, renderPokemons, pokeDados, setPage, setModalIsOpen, modalIsOpen }}>
      {children}
    </PokemonContext.Provider>
  );
}

export {
  PokemonContext,
  PokemonProvider,
}