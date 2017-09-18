import {combineReducers} from 'redux'
import {GET_USERS, GET_USERS_DETAIL, FOLLOW} from './actions'
import {receiveData} from '../modules/handleData'

function data(state={}, action)
{
    switch(action.type)
    {
        case GET_USERS:
            return receiveData(state, action)
        case FOLLOW:
            Object.keys(state).map((key) => {
                state[key].result.map((n, key) => {
                    if(action.extradata.username == n.login)
                        n.is_follow = action.extradata.follow
                })
            })
            return Object.assign({}, state)
        default:
            return state
    }
}

function detail(state={}, action)
{
    switch(action.type)
    {
        case GET_USERS_DETAIL:
            return receiveData(state, action)
        case FOLLOW :
            if(state[action.extradata.username])
                state[action.extradata.username].is_follow = action.extradata.follow
            return Object.assign({}, state)
        default:
            return state
    }
}

export default combineReducers({
    data,
    detail,
})