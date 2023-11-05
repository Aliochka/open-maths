import { Outlet } from 'react-router-dom'
import { Menu } from '../../components/Menu'
import { Problem } from '../../factories/problems'
import { useLoaderData } from '../../hooks/useLoaderData'

export function Root() {
  const { problems } = useLoaderData<{ problems: Problem[] }>()

  return (
    <div>
      <Menu problems={problems} />
      <h1>open maths</h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
