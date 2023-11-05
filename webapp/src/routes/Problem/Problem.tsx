import { Link } from 'react-router-dom'
import { Problem } from '../../factories/problems'
import { useLoaderData } from '../../hooks/useLoaderData'

export function Problem() {
  const { problem } = useLoaderData<{ problem: Problem }>()

  return (
    <div>
      <h1>{problem.title}</h1>
      <p>{problem.description}</p>
      {/* <ul>{problem?.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul> */}
      <Link to={`/problems/${problem.id}/edit`}>Edit</Link>
    </div>
  )
}
