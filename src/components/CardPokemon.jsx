import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { BackgroundCard } from "./BackgroundCard";

export function CardPokemon({ image, name, id, types }) {

  const styles = {
    bug: {
      background: "bg-pokemons-bug-bg",
      button: "bg-pokemons-bug-button-bg"
    },
    dark: {
      background: "bg-pokemons-dark-bg",
      button: "bg-pokemons-dark-button-bg"
    },
    dragon: {
      background: "bg-pokemons-dragon-bg",
      button: "bg-pokemons-dragon-button-bg"
    },
    electric: {
      background: "bg-pokemons-electric-bg",
      button: "bg-pokemons-electric-button-bg"
    },
    fairy: {
      background: "bg-pokemons-fairy-bg",
      button: "bg-pokemons-fairy-button-bg"
    },
    fighting: {
      background: "bg-pokemons-fighting-bg",
      button: "bg-pokemons-fighting-button-bg"
    },
    fire: {
      background: "bg-pokemons-fire-bg",
      button: "bg-pokemons-fire-button-bg"
    },
    flying: {
      background: "bg-pokemons-flying-bg",
      button: "bg-pokemons-flying-button-bg"
    },
    ghost: {
      background: "bg-pokemons-ghost-bg",
      button: "bg-pokemons-ghost-button-bg"
    },
    grass: {
      background: "bg-pokemons-grass-bg",
      button: "bg-pokemons-grass-button-bg"
    },
    ground: {
      background: "bg-pokemons-ground-bg",
      button: "bg-pokemons-ground-button-bg"
    },
    ice: {
      background: "bg-pokemons-ice-bg",
      button: "bg-pokemons-ice-button-bg"
    },
    normal: {
      background: "bg-pokemons-normal-bg",
      button: "bg-pokemons-normal-button-bg"
    },
    poison: {
      background: "bg-pokemons-poison-bg",
      button: "bg-pokemons-poison-button-bg"
    },
    psychic: {
      background: "bg-pokemons-psychic-bg",
      button: "bg-pokemons-psychic-button-bg"
    },
    rock: {
      background: "bg-pokemons-rock-bg",
      button: "bg-pokemons-rock-button-bg"
    },
    steel: {
      background: "bg-pokemons-steel-bg",
      button: "bg-pokemons-steel-button-bg"
    },
    water: {
      background: "bg-pokemons-water-bg",
      button: "bg-pokemons-water-button-bg"
    }
  }

  const { getPokemon, setModalIsOpen } = useContext(PokemonContext);

  async function gPokemon() {
    await getPokemon({ id })

    setModalIsOpen(true)
  }

  return (
    <div
      className={styles[types[0].type.name].background + " relative flex h-52 rounded-md shadow-shadow transition-all group cursor-pointer hover:rounded-2xl"}
      onClick={() => gPokemon()}
    >
      <div className="flex-1 flex flex-col items-stretch justify-center relative pl-7">
        <span className="text-xl font-bold tracking-widest text-text-secondary">
          #{id}
        </span>

        <span className="text-5xl font-bold leading-10 text-white capitalize">
          {name}
        </span>

        <div className="flex items-center mt-1 gap-3">
          {types.map(type => {
            return (
              <div key={type.type.name} className={styles[type.type.name].button + " flex items-center p-2 rounded mt-3"}>
                <span className="text-white font-medium leading-4 capitalize text-2xl px-4 py-2">
                  {type.type.name}
                </span>
              </div>
            );
          })}
        </div>


        <BackgroundCard />
      </div>

      <img
        src={image}
        alt={name}
        className="absolute right-0 -top-12 h-52 w-52 transition-all grayscale group-hover:grayscale-0 group-hover:-top-11"
      />
    </div>
  )
}