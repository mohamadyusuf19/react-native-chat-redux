import firebase from 'firebase'
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED
} from './types'
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const signupUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: SIGNUP_USER });
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(user => signupUserSuccess(dispatch, user))
                .catch(() => signupUserFailed(dispatch))
    }
}

const signupUserSuccess = (dispatch, user) => {
    const { currentUser } = firebase.auth()

    firebase.database().ref(`users/mail`)
        .push({
            email: currentUser.email,
            userid: currentUser.uid
        })
        .then(() => {
            dispatch({
                type: SIGNUP_USER_SUCCESS,
                payload: user
            })
            Actions.main()
        })
}

const signupUserFailed = (dispatch) => {
    dispatch({
        type: SIGNUP_USER_FAILED
    })
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user => loginUserSuccess(dispatch, user))
                .catch(() => loginUserFailed(dispatch))
    }
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })
    Actions.main()
}

const loginUserFailed = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAILED
    })
}