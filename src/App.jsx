import { Router } from "./Router";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonContext";

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </PokemonProvider>
  )
}

export default App