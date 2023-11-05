import { FormProblem } from './FormProblem'

export function CreateProblem() {
  console.log('CreateProblem')
  return (
    <div>
      <h1>Create a new problem</h1>
      <FormProblem action="create" />
    </div>
  )
}
