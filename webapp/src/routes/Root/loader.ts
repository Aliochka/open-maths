import { Problem, getProblems } from '../../factories/problems'

type Loader = Promise<{ problems: Problem[] }>

export async function loader(): Loader {
  const problems = await getProblems()

  return {
    problems,
  }
}
