import { Problem } from '../../factories/problems'
import { useLoaderData } from '../../hooks/useLoaderData'
import { FormProblem } from './FormProblem'

export function EditProblem() {
  const { problem } = useLoaderData<{ problem: Problem }>()

  return (
    <div>
      <h1>Edit your problem</h1>
      <FormProblem problem={problem} />
    </div>
  )
}
