import React from 'react'

export default function Loading() {
  return (
    <div className="text-center">
      <div className="spinner-border loading" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
