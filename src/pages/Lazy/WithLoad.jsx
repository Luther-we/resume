import React, { Suspense } from 'react'
import Loader from './Loader'

export const WithLoad = LoadedComponent => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <LoadedComponent />
      </Suspense>
    </>
  )
}
