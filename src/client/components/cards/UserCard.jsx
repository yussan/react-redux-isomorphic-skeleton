import React from 'react'
import {Link} from 'react-router-dom'
import BtnFollow from '../buttons/user/BtnFollow'

// it's call pure react component
export default (props) => (
    <div>
        <Link to={`/users/${props.login}`}>
            <img style={{width:'50px'}} src={props.avatar_url} alt={props.login} />
            {props.login}
        </Link>
        <BtnFollow {...props} />
    </div>
)