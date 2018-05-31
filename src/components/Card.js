import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = (props) => {
    return(        
        <View style={styles.container}>
            <View style={styles.row}>
                <Image source={props.source} style={styles.image} />
            </View>
            <View style={styles.border}>
                    <Text style={styles.profile}>{props.textProfile}</Text>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'center',  
        alignItems: 'center',
        flex: 0.2,      
        padding: 10,
    },
    container: {
        flexDirection: 'row',
    },
    profile: {
        fontSize: 14,
        color: '#000',
        alignSelf: 'flex-end',
    },
    value: {
        fontSize: 14,
        color: '#000'
    },
    image: {
        height: 50,
        width: 50,
        margin: 5,
    },
    textEnd: {
        alignItems: 'flex-end',
    },
    border: {
        borderBottomWidth: 2,
        borderColor: '#f1f1f1',
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'center',  
        alignItems: 'flex-end',
        flex: 0.8,      
        padding: 10,
    }
})

export default Card