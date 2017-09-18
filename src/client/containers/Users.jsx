// components
import React, {Component} from 'react'
import UserCard from '../components/cards/UserCard'
import Helmet from '../components/Helmet'

// others
import {connect} from 'react-redux'
import {fetchUsers} from '../../store/users/actions'

// sample action static params
const Filter = 'list'
const Query = {per_page: 5}

class Users extends Component 
{
  static fetchData(store, params, query)
  {
    return store.dispatch(fetchUsers(Filter, Query))
  }

  componentDidMount()
  {
    // check store before request
    if(!this.props.data[Filter])
      this.props.dispatch(fetchUsers(Filter, Query))
  }

  render()
  {
    const users = this.props.data[Filter]
    return(
      <div>
        <Helmet
         title='Users'
         description='list of users'
         />
        <h1>Users</h1>
        {
          users && users.status ?
            users.status == 200 ?
              users.result.map((n, key) => (
                <UserCard key={key} dispatch={this.props.dispatch} {...n} />
            ))
            : 'something wrong !'
          : 'loading...'
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {Users} = state
  return {
    data: Users.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
