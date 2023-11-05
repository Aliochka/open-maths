import { Link } from 'react-router-dom'

export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/problems/1">Problem 1</Link>
        </li>
        <li>
          <Link to="/problems/2">Problem 2</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </nav>
  )
}
