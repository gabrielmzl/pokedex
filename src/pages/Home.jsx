import { Background } from "../components/Background";
import { ListPokemons } from "../components/ListPokemons";
import { Header } from "../components/Header";
import { PokemonModal } from "../components/PokemonModal";
import { Pagination } from "../components/Pagination";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

export function Home() {
  const { page, totalPages, setPage } = useContext(PokemonContext);

  function onLeftClickHandler() {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  function onRightClickHandler() {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  }
  return (
    <>
      <div className="relative flex flex-col items-stretch py-8 px-20">
        <Background />
        <Header />

        <div className="grid gap-14 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 flex-1 mt-10">
          <ListPokemons />
        </div>

        <div className="mt-14 flex items-center justify-center">
          <Pagination
            page={page + 1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
          />
        </div>
      </div>

      <PokemonModal />
    </>
  );
}