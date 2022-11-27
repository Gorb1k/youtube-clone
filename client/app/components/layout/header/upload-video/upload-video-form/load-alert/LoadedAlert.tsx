import React, { FC } from 'react'

const LoadedAlert: FC = () => {
  return (
    <div
      className={
        'absolute top-0 left-1/4 flex items-center justify-center p-2 z-10 shadow-block animate-scaleIn w-1/2 bg-green-500 text-white text-center mx-auto'
      }
    >
      Video is successfully loaded
    </div>
  )
}

export default LoadedAlert
