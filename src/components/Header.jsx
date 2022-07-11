import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="text-6xl text-text-primary font-bold flex gap-6 items-center">
      <h1>Pokédex</h1>
      <ul className="text-sm flex items-center gap-4">
        <li className="hover:text-text-secondary transition-all">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="hover:text-text-secondary transition-all">
          <Link to="/favorites">
            Favorites
          </Link>
        </li>
      </ul>
    </header>
  )
}