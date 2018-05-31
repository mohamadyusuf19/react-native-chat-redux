import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image, TextInput, Dimensions } from 'react-native';

const getWidth = Dimensions.get('window').width*0.8

const InputText = (props) => {
    return (      
        <View style={styles.row}>
            <Image style={styles.searchIcon} source={props.source} color="#000"/>
            <TextInput
                style={styles.textInput}
                underlineColorAndroid='transparent'
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChangeText}   
                secureTextEntry={props.secureTextEntry}             
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',      
        borderRadius: 20,
        width: getWidth,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 10
    },
    searchIcon: {
        marginRight: 10,
        height: 26,
        width: 26
    },
    textInput: {        
        height: 40,
        borderRadius: 5,
        width: getWidth*0.8,
    },
});

export {InputText}