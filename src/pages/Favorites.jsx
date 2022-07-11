export function Favorites() {
  const favorites = localStorage.getItem("favoritePokemon");

  return favorites ? (
    <div className="relative flex flex-col items-stretch px-20">
      <h1>Favorites</h1>
    
      
    </div>
  ) : (
    <div className="relative flex flex-col items-stretch px-20">
      <h1 className="font-bold text-xl text-text-primary">
        Nenhum pokémon favoritado :(
      </h1>
    </div>
  )
}