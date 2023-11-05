import { backendUrl } from '../../env'

export async function loader() {
  const problems = await fetch(backendUrl + '/problems', {
    credentials: 'include',
  })

  return {
    problems,
  }
}
