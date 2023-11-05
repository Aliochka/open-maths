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
import { Problem } from './routes/Problem/Problem'
import { Home } from './routes/Home'
import { CreateProblem } from './routes/Problem/CreateProblem'
import { loader as problemLoader } from './routes/Problem/loader'
import { EditProblem } from './routes/Problem/EditProblem'
import { create, edit } from './routes/Problem/actions'

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
        <Route
          path="/problems/create"
          element={<CreateProblem />}
          action={create}
        />
        <Route
          path="/problems/:problemId"
          element={<Problem />}
          loader={problemLoader}
        />
        <Route
          path="/problems/:problemId/edit"
          element={<EditProblem />}
          loader={problemLoader}
          action={edit}
        />
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
