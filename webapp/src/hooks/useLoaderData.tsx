import { useLoaderData as useOriginalLoaderData } from 'react-router-dom'

export function useLoaderData<T>() {
  return useOriginalLoaderData() as T
}
