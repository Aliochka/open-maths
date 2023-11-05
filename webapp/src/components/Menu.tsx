import { Link } from 'react-router-dom'
import { Problem } from '../factories/problems'

type Menu = {
  problems: Problem[]
}

export function Menu({ problems }: Menu) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/problems/create">Create a new problem</Link>
        </li>
        {problems.map((problem) => (
          <li key={problem.id}>
            <Link to={`/problems/${problem.id}`}>{problem.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
