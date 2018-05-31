import {
    ADD_FRIEND_LOADING,
    ADD_EMAIL_CHANGED,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAIL
} from '../actions/types'

const INITIAL_STATE = {
    email: '',
    error: '',
    loading: false
};

export default (state=INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_EMAIL_CHANGED:        
            return { ...state, email: action.payload }
        case ADD_FRIEND_SUCCESS:
            return { INITIAL_STATE }
        case ADD_FRIEND_FAIL:
            return { ...state, error: 'Maaf email tidak ada', loading: false }
        case ADD_FRIEND_LOADING:
            return { ...state, loading: true, error: '' }
        default:
            return state
    }
}