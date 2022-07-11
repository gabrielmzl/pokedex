import { X } from "phosphor-react";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

export function PokemonModal() {

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
    },
    hp: {
      abbreviation: 'HP',
      background: "bg-abilitys-hp-bg",
      color: "bg-abilitys-hp-circle"
    },
    attack: {
      abbreviation: 'ATK',
      background: "bg-abilitys-attack-bg",
      color: "bg-abilitys-attack-circle"
    },
    defense: {
      abbreviation: 'DEF',
      background: "bg-abilitys-defense-bg",
      color: "bg-abilitys-defense-circle"
    },
    'special-attack': {
      abbreviation: 'SpA',
      background: "bg-abilitys-specialAttack-bg",
      color: "bg-abilitys-special-attack-circle"
    },
    'special-defense': {
      abbreviation: 'SpD',
      background: "bg-abilitys-specialDefense-bg",
      color: "bg-abilitys-special-defense-circle"
    },
    speed: {
      abbreviation: 'SPD',
      background: "bg-abilitys-speed-bg",
      color: "bg-abilitys-speed-circle"
    }
  }

  const { pokemon, modalIsOpen, setModalIsOpen } = useContext(PokemonContext);

  return modalIsOpen ? (
    <div className={styles[pokemon.types[0].type.name].background + " absolute top-0 right-0 h-full p-9 shadow-2xl w-[500px] overflow-y-scroll scrollbar scrollbar-thumb-text-primary scrollbar-track-text-secondary"}>
      <X
        size={32}
        color="#000"
        onClick={() => setModalIsOpen(false)}
        className="cursor-pointer"
      />
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={pokemon.sprites.other.dream_world.front_default} className="animate-floating" />
        </div>
        <span className="text-2xl font-bold tracking-widest text-text-secondary mt-4">
          #{pokemon.id}
        </span>

        <span className="text-5xl font-bold leading-10 text-white capitalize mt-4">
          {pokemon.name}
        </span>

        <div className="flex items-center mt-4 gap-3">
          {pokemon.types.map(type => {
            return (
              <div key={type.type.name} className={styles[type.type.name].button + " flex shadow-shadow items-center p-2 rounded mt-3"}>
                <span className="text-white font-medium leading-4 capitalize text-2xl px-4 py-2">
                  {type.type.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center mt-16">
          <span className="text-2xl font-bold tracking-widest text-text-secondary mt-4">
            Abilitys
          </span>

          <div className="flex items-center mt-4 gap-3">
            {pokemon.abilities.map(ability => {
              return (
                <span className="text-xl text-white capitalize">
                  {ability.ability.name}
                </span>
              );
            })}
          </div>
        </div>

        <div className="flex items-center mt-8 gap-6">
          <div className="flex flex-col items-center gap-3">
            <span className="text-2xl font-bold tracking-widest text-text-secondary mt-4">
              Height
            </span>
            <span className="text-xl text-white capitalize">
              {pokemon.height}
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-2xl font-bold tracking-widest text-text-secondary mt-4">
              Weight
            </span>
            <span className="text-xl text-white capitalize">
              {pokemon.weight}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center mt-8">
          <span className="text-2xl font-bold tracking-widest text-text-secondary mt-4">
            Base EXP
          </span>

          <div className="flex items-center mt-4 gap-3">
            <span className="text-xl text-white capitalize">
              {pokemon.base_experience}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center mt-8">
          <span className="text-2xl font-bold tracking-widest text-text-secondary mt-4">
            Abilitys
          </span>
          {pokemon.stats.map(stat => {
            return (
              <div className="flex mt-6 bg-[#00000008] p-3 w-[300px] rounded-full justify-between items-center">
                <span className={styles[stat.stat.name].background + " text-white rounded-full p-2 text-xl"}>
                  {styles[stat.stat.name].abbreviation}
                </span>
                <span className="text-text-primary rounded-full p-2 text-xl">
                  {stat.base_stat}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div >
  ) : (
    null
  )
}