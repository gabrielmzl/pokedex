import { useState } from "react";
import api from "../../services/api";

export default function usePokemon() {
  const [pokemon, setPokemon] = useState();
  const [totalPages, setTotalPages] = useState();
  const [pokeDados, setPokeDados] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [page, setPage] = useState(0);
  
  const itensPerPage = 9
  const offset = itensPerPage * page

  async function getPokemon({ id }) {
    const { data } = await api.get("/pokemon/" + id);
    setPokemon(data)
  }
  
  async function renderPokemons() {
    const { data } = await api.get("/pokemon/?offset=" + offset + "&limit=" + itensPerPage);
    const pokemons = data.results;

    let pokemonsDados = [];
    for (let i = 0; i < pokemons.length; i++) {
      const response = await api.get(pokemons[i].url);
      pokemonsDados.push(response.data);
    }
    setPokeDados(pokemonsDados)
    setTotalPages(Math.ceil(data.count / itensPerPage ))
  }

  return { getPokemon, pokemon, page, totalPages, renderPokemons, pokeDados, setPage, setModalIsOpen, modalIsOpen };
}