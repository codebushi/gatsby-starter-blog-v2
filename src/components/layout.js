import React from 'react'
import { Link } from 'gatsby'
import '../assets/scss/main.scss'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    if (location.pathname === rootPath) {

    } else {

    }

    return (
      <div className="body">
        <h3>
          <Link to={'/'}>
            Gatsby Starter Blog
          </Link>
        </h3>
        {children}
      </div>
    )
  }
}

export default Template
