import React from 'react'
import {
  ErrorResponse,
  isRouteErrorResponse,
  useRouteError,
} from 'react-router-dom'

type ErrorTemplate = {
  error: ErrorResponse
  children: React.ReactNode
}

function ErrorTemplate({ error, children }: ErrorTemplate) {
  return (
    <div>
      <p>
        {error.status} - {error.statusText}
      </p>
      <div>{children}</div>
    </div>
  )
}

export function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <ErrorTemplate error={error}>This page doesn't exist!</ErrorTemplate>
      )
    }

    if (error.status === 401 || error.status === 403) {
      return (
        <ErrorTemplate error={error}>
          You aren't authorized to see this
        </ErrorTemplate>
      )
    }

    if (error.status === 503) {
      return (
        <ErrorTemplate error={error}>Looks like our API is down</ErrorTemplate>
      )
    }
  }

  return (
    <div>
      <p>Oops, something went wrong</p>
      {error instanceof Error && <p>{error.message}</p>}
    </div>
  )
}
