'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='mt-8'>
      <h2 className='text-lg font-bold'>エラーが発生しました</h2>
      <p className='mt-2'>{error.message}</p>
      <button
        className='mt-8 btn btn-primary'
        onClick={
          () => { location.reload() }
        }
      >
        やり直す
      </button>
    </div>
  )
}