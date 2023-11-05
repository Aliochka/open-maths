import { backendUrl } from '../../env'

export async function loader() {
  const response = await fetch(backendUrl + '/problems', {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  })
  if (!response.ok) {
    throw new Error('Failed to fetch')
  }
  const problems = await response.json()

  return {
    problems,
  }
}
