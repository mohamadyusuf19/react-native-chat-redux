import firebase from 'firebase'
import moment from 'moment'

import {
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_CHANGED,
    FETCH_MESSAGE_SUCCESS
} from './types'

export const messageChanged = (text) => {
    return {
        type: SEND_MESSAGE_CHANGED,
        payload: text
    }
}

export const sendMessage = (text, friend) => {
    const { currentUser } = firebase.auth();
    const lastMessageTime = moment().format('h:mm a');
    return (dispatch) => {
        firebase.database().ref(`/message/${friend.chatroomId}`)
            .push({ mail: currentUser.email, text, lastMessageTime })
            .then(() => {
                dispatch({ type: SEND_MESSAGE_SUCCESS })
            })
    } 
}

export const fetchMessage = (chatroom) => {
    return (dispatch) => {
        firebase.database().ref(`/message/${chatroom.chatroomId}`)
            .on('value', snapshot => {
                dispatch({
                    type: FETCH_MESSAGE_SUCCESS,
                    payload: snapshot.val()
                })
            })
    }
}