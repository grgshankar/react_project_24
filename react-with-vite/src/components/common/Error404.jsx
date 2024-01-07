import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className="text-warning">
        <p>404</p>
        <Link to="/">Back to Home page</Link>
    </div>
  )
}

export default Error404