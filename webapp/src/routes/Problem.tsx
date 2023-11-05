import { useParams } from 'react-router-dom'
import { makeProblem } from '../factories/problems'

export function Problem() {
  const { problemId } = useParams()
  const problem = makeProblem({ id: Number(problemId) })

  return (
    <div>
      <h1>{problem.title}</h1>
      <p>{problem.description}</p>
      <ul>
        {problem.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  )
}
