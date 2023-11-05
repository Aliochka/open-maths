import { Link } from 'react-router-dom'
import { Problem } from '../factories/problems'

type Menu = {
  problems: Problem[]
}

export function Menu({ problems }: Menu) {
  return (
    <nav>
      <ul>
        {problems.map((problem) => (
          <li key={problem.id}>
            <Link to={`/problems/${problem.id}`}>{problem.title}</Link>
          </li>
        ))}
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </nav>
  )
}
