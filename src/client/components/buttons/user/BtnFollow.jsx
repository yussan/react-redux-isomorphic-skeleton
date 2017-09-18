import React from 'react'
import {follow} from '../../../../store/users/actions'

export default (props) => {
    return <button onClick={() => handleFollow(props)}>
        {props.is_follow ? 'unfollow' : 'follow'}
    </button>
}

function handleFollow(props)
{
    return props.dispatch(follow(props.login, props.is_follow != true))
}