import React, {Component} from 'react'
import PropTypes from 'prop-types'

// components
import Helmet from '../../components/Helmet'

class Home extends Component 
{
  static propTypes = {
    route: PropTypes.object.isRequired
  }

  render()
  {
    return(
      <div>
        <Helmet />
        this is home
      </div>
    )
  }
}

export default Home