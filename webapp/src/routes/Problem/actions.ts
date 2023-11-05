import { ActionFunctionArgs, redirect } from 'react-router-dom'
import { backendUrl } from '../../env'
import { Problem } from '../../factories/problems'

export async function create({ request }: ActionFunctionArgs<Problem>) {
  const formData = await request.formData()
  const body = Object.fromEntries(formData)

  await fetch(backendUrl + '/problems/create', {
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })

  return redirect('/home')
}

export async function edit({ request, params }: ActionFunctionArgs<Problem>) {
  const formData = await request.formData()
  const body = Object.fromEntries(formData)

  await fetch(backendUrl + `/problems/${params.problemId}/edit`, {
    credentials: 'include',
    method: 'PUT',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })

  return redirect(`/problems/${params.problemId}`)
}
