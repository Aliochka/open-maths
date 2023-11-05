import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { Root } from './routes/Root'
import { ErrorPage } from './ErrorPage'
import { Problem } from './routes/Problem'
import { Home } from './routes/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route path="/home/" element={<Home />} />
        <Route path="/problems/:problemId" element={<Problem />} />
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
