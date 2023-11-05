import { LoaderFunctionArgs } from 'react-router-dom'
import { backendUrl } from '../../env'
import { Problem } from '../../factories/problems'

export async function loader({ params }: LoaderFunctionArgs<Problem>) {
  const response = await fetch(backendUrl + '/problems/' + params.problemId, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch')
  }
  const problem = await response.json()

  return {
    problem,
  }
}
