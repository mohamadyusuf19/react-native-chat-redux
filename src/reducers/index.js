import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import AddFriendReducers from './AddFriendReducers'
import Friendreducers from './FriendReducers'
import MessageReducers from './MessageReducers'

export default combineReducers({
    auth: AuthReducer,
    addfriend: AddFriendReducers,
    friend: Friendreducers,      
    message: MessageReducers
})