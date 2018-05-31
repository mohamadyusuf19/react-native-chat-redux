import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: null
}

export default (state=INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case SIGNUP_USER:
            return { ...state, loading: true }
        case SIGNUP_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload }
        case SIGNUP_USER_FAILED:
            return { ...state, password: '', loading: false }
        case LOGIN_USER:
            return { ...state, loading: true }
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload }
        case LOGIN_USER_FAILED:
            return { ...state, password: '', loading: false }
        default:
            return state
    }
}