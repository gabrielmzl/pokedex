import { Router } from "./Router";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonContext";

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>

        <div className="relative flex flex-col items-stretch py-6 px-20">
          <Header />
        </div>

        <Router />
      </BrowserRouter>
    </PokemonProvider>
  )
}

export default App