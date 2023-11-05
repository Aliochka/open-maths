export type Problem = {
  id: number
  title: string
  description: string
  tags: string[]
}

let problemId = 1

export function makeProblem(problem?: Partial<Problem>) {
  const fakeProblem = {
    id: problemId,
    title: `Problem ${problem?.id ?? problemId}`,
    description: 'This is the first problem',
    tags: ['tag1', 'tag2'],
    ...problem,
  }
  problemId++
  return fakeProblem
}

export async function getProblems() {
  return [makeProblem(), makeProblem()]
}

export async function getProblem(problemId: number) {
  return makeProblem({ id: problemId })
}
