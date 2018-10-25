// components
import React, {Component} from 'react'
import Helmet from '../../components/Helmet'
import BtnFollow from '../../components/buttons/user/BtnFollow'
import BtnDelete from '../../components/buttons/user/BtnDelete'

// others
import {connect} from 'react-redux'
import {fetchUserDetail} from '../../../store/users/actions'

class UserDetail extends Component 
{
  static fetchData(store, params, query)
  {
    return store.dispatch(fetchUserDetail(params.username))
  }

  componentDidMount()
  {
    // check store before request
    if(!this.props.data[this.props.match.params.username])
      this.props.dispatch(fetchUserDetail(this.props.match.params.username))
  }

  render()
  {
    const user = this.props.data[this.props.match.params.username]
    return(
      <div>
        <Helmet
         title={this.props.match.params.username}
         description={`${this.props.match.params.username} profile`}
         />
        <h1>get user {this.props.match.params.username}</h1>
        {
          user && user.status ?
            user.status == 200 ?
              <div>
                <p>
                  <img style={{width:'100px'}} src={user.avatar_url} alt={user.login}/><br/>
                  {/* sample local action */}
                  <BtnFollow {...user} dispatch={this.props.dispatch} /><br/>
                  username : {user.login}<br/>
                  followers : {user.followers}<br/>
                  following : {user.following}<br/>
                  blog : {user.blog || '-'}<br/>
                </p>
              </div>
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
    data: Users.detail
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
)(UserDetail)
