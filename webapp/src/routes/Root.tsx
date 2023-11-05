import { Outlet } from 'react-router-dom'

export function Root() {
  return (
    <div>
      <h1>open maths</h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
