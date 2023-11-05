import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { Root } from './routes/Root/Root'
import { loader as rootLoader } from './routes/Root/loader'
import { ErrorPage } from './ErrorPage'
import { Problem } from './routes/Problem'
import { Home } from './routes/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Root />}
        errorElement={<ErrorPage />}
        loader={rootLoader}
      >
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
