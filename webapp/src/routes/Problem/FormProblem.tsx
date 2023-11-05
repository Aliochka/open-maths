import { Form } from 'react-router-dom'
import { Problem } from '../../factories/problems'
import { useState } from 'react'

type FormProblem = {
  problem?: Problem
}

export function FormProblem({ problem }: FormProblem = {}) {
  const [title, setTitle] = useState(problem?.title ?? '')
  const [description, setDescription] = useState(problem?.description ?? '')
  const [tags, setTags] = useState(problem?.tags.join(', ') ?? '')

  return (
    <Form method="post">
      <div>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Description
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Tags
          <input
            type="text"
            name="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </Form>
  )
}
