import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">MoviesLib</Link>
      </h2>
      <form>
        <input type="text" placeholder="Busque por um filme" />
        <button type='submit'>Buscar</button>
      </form>
    </nav>
  )
}

//17:09
