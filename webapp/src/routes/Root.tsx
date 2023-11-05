import { Outlet } from 'react-router-dom'
import { Menu } from '../components/Menu'

export function Root() {
  return (
    <div>
      <Menu />
      <h1>open maths</h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
