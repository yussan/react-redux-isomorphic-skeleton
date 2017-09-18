export function receiveData(state, action)
{
    if(action.json) //received data
    {
        state[action.filter].in_progress = false
        return Object.assign({}, state, {[action.filter]: action.json})
    }else //waiting
    {
        if(!state[action.filter]) state[action.filter] = {}
        state[action.filter].in_progress = true
        return state
    }
}