import React from 'react'
import { renderRoutes } from 'react-router-config'
import {Link} from 'react-router-dom'

export default (props) => {
  return <div>
    <nav>
      <Link to='/'>Home</Link>
      {' '}
      <Link to='/users'>Users</Link>
      {' '}
      <Link to='/about'>About</Link>
    </nav>
    <hr />
    {renderRoutes(props.route.routes)}
  </div>
}