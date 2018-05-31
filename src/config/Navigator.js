import React, { Component } from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { StyleSheet, Image } from 'react-native'

import SignIn from '../screen/auth/SignIn';
import SignUp from '../screen/auth/SignUp';

const signinIcon = require('../assets/signInButton.png')
const signupIcon = require('../assets/signUpButton.png')

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20
  }
});

const LoginForm = createBottomTabNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            header: null,
            tabBarIcon: ({ tintColor }) => (
                <Image
                  source={signinIcon}
                  style={[styles.icon, { tintColor }]}
                />
            )
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            header: null,
            tabBarIcon: ({ tintColor }) => (
                <Image
                  source={signupIcon}
                  style={[styles.icon, { tintColor }]}
                />
            )
        }
    }
})

export default LoginForm;