import React, { Component } from 'react';
import {  View, Text, StyleSheet, TextInput, FlatList, Image } from 'react-native';
import _ from 'lodash';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { messageChanged, sendMessage, fetchMessage } from '../../actions/MessageAction'
const accountIcon = require('../../assets/user.png')

class Messages extends Component {
    state = {
      scrollViewHeight: 0,
      inputHeight: 0
    }

    componentWillMount() {
        const { friend } = this.props;
        this.props.fetchMessage(friend)
    }

    onChangeText(text) {
        this.props.messageChanged(text)
    }

    onSendMessage() {
        const { friend, text } = this.props;

        this.props.sendMessage(text, friend);
    }

    _scrollToInput(reactRef) {
      this.refs.scroll.scrollToFocusedInput(ReactNative.findNodeHandle(reactRef));
    }

    renderMessage = ({item}) => {
        console.log(this.props.friend)
        if (item.mail != this.props.friend.id) {
            return (
                <View style={[styles.msg, styles.friend]}>
                  <Text style={styles.textFriend}>{item.text}</Text>
                  <Text style={styles.textMail}>{item.lastMessageTime}</Text>
                </View>
            )    
        }
        return (
          <View style={[styles.msg, styles.me]}>
            <Text style={styles.textMe}>{item.text}</Text>
            <Text style={styles.mailMe}>{item.lastMessageTime}</Text>
          </View>
        )
    }


    onScrollViewLayout = (event) => {
      const layout = event.nativeEvent.layout;

      this.setState({
          scrollViewHeight: layout.height
      });
    }

    onInputLayout = (event) => {
      const layout = event.nativeEvent.layout;

      this.setState({
          inputHeight: layout.height
      });
    }

  render() {
      console.log(this.props.messages)
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={accountIcon} style={{ height: 40, width: 40, marginRight: 10, tintColor: '#fff' }} />
            <Text style={styles.toolbar}>{this.props.friend.id}</Text>
          </View>          
          <KeyboardAwareScrollView 
            ref="scroll"
            onLayout={this.onScrollViewLayout}>
            <FlatList                
                data={this.props.messages}            
                keyExtractor={(x, i) => i.toString()}
                renderItem={this.renderMessage}                
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={this.props.text}
                    onChangeText={this.onChangeText.bind(this)}
                    onSubmitEditing={this.onSendMessage.bind(this)}                    
                />
            </View>
          </KeyboardAwareScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        height: 80,
        backgroundColor: '#000',        
        padding: 10,        
        alignItems: 'center'
    },
    toolbar: {        
        color: '#fff',
        fontSize: 14,            
    },
    content: {
        flex: 1,
    },
    inputContainer: {
        backgroundColor: '#bdc3c7',padding: 5,
    },
    input: {
        height: 40,
        backgroundColor: '#fff',
    },
    msg: {
        margin: 5,
        padding: 10,
        borderRadius: 10,
    },
    me: {
        alignSelf: 'flex-start',
        backgroundColor: '#000',
        marginRight: 100,
    },
    friend: {
        alignSelf: 'flex-end',
        backgroundColor: '#fff',
        marginLeft: 100,
    },
    textFriend: {
        fontSize: 16,
        color: '#000',
        marginBottom: 5,
    },
    textMail: {
        fontSize: 12,
        color: '#000',
        alignSelf: 'flex-end',
    },
    textMe: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 5,
    },
    mailMe: {
        fontSize: 12,
        color: '#fff',
        alignSelf: 'flex-end',        
    }
});

const mapStateToProps = state => {
    const { text } = state.message;
    const messages = _.map(state.message.messageList, (val, uid) => {
        return { ...val, uid };
    });
    console.log('messageList', messages);

    return { text, messages };
}

export default connect(mapStateToProps, { 
    sendMessage,
    messageChanged,
    fetchMessage
 })(Messages);