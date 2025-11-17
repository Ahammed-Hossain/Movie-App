import React from 'react'
import Home from './Home'

export default function PageNotFound() {
  return (
    <div>
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <button onClick={<Home/>}>Go Back Home</button>
        </div>
    </div>
  )
}
