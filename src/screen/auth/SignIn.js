import React, { Component } from 'react';
import {  View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { InputText, Spinner } from '../../components';
import { loginUser, emailChanged, passwordChanged } from '../../actions'

const accountIcon = require('../../assets/user.png')
const passwordIcon = require('../../assets/lock.png')
const getWidth = Dimensions.get('window').width*0.8

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.onButtonPress = this.onButtonPress.bind(this)
    }

    onButtonPress = () => {
        const { email, password } = this.props
        this.props.loginUser({ email, password })        
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner size="large" />            
        }
        return (
            <View style={styles.container}>
                <InputText
                    source={accountIcon}
                    placeholder="Email@gmail.com"
                    value={this.props.email}
                    onChangeText={text => this.props.emailChanged(text)}
                />
                <InputText
                    secureTextEntry={true}
                    source={passwordIcon}
                    placeholder="password"
                    value={this.props.password}
                    onChangeText={text => this.props.passwordChanged(text)}
                />
                <TouchableOpacity style={styles.button} onPress={this.onButtonPress}>        
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>  
            </View>
        )
    }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.renderButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#000',
        height: 40,
        width: getWidth,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:20
    },
    textButton: {
        fontSize: 18,
        color: '#fff'
    },
})

const mapStateToProps = state => {
    const { email, password, loading } = state.auth
    return { email, password, loading }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(SignIn)