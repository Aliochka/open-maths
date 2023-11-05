export function Problem() {
  const problem = {
    title: 'Problem 1',
    description: 'This is the first problem',
    tags: ['tag1', 'tag2'],
  }

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
