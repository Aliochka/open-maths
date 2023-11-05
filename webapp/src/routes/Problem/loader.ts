import { LoaderFunctionArgs } from 'react-router-dom'
import { Problem, getProblem } from '../../factories/problems'

type Loader = Promise<{ problem: Problem }>

export async function loader({ params }: LoaderFunctionArgs<Problem>): Loader {
  const problem = await getProblem(Number(params.problemId))

  return {
    problem,
  }
}
