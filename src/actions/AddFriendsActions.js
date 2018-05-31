import _ from 'lodash';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
    ADD_FRIEND_LOADING,
    ADD_EMAIL_CHANGED,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAIL
} from './types'

export const addFriend = ({ email }) => {
    return (dispatch) => {
        const { currentUser } = firebase.auth()
        let addFriendFlag = false;
        
        dispatch({ type: ADD_FRIEND_LOADING })

        firebase.database().ref(`users/mail`)
            .on('value', snapshot => {
                const value = _.map(snapshot.val(), (val, uid) => {
                    return { ...val, uid }
                });

                value.forEach((v) => {
                    console.log('value:', v);
                    if ( email === v.email ) {
                        addFriendFlag = true;
                        addFriendSuccess(dispatch, firebase.auth().currentUser, v);
                    }
                });

                if (addFriendFlag == false) {
                    dispatch({ type: ADD_FRIEND_FAIL })
                }
            });

    };
}

export const addEmailChanged = (text) => {
    return {
        type: ADD_EMAIL_CHANGED,
        payload: text
    }
}

const addFriendSuccess = (dispatch, user, friend) => {    
    const { currentUser } = firebase.auth()
    const chatroomId = Math.floor(randomId(1, 1000000));

    firebase.database().ref(`users/chatroom/${currentUser.uid}/friends`)
        .push({
            id: friend.email,
            uid: friend.userid,
            chatroomId
        })
        .then(() => {
            firebase.database().ref(`users/chatroom/${friend.userid}/friends`)
                .push({ id: user.email, uid: user.uid, chatroomId })
                .then(() => {
                    dispatch({ type: ADD_FRIEND_SUCCESS })                    
                })
                Actions.home()
        })
}

const randomId = (min, max) => {
    return (Math.random() * (max-min)) + min;
};