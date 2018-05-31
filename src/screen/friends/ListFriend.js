import React, { Component } from 'react';
import {  ScrollView, Text, TouchableOpacity } from 'react-native';
import Card from '../../components/Card';
import { Actions } from 'react-native-router-flux';

const accountIcon = require('../../assets/user.png')

//scrollview tidak boleh di flex: 1
class ListFriend extends Component {

  constructor(props) {
    super(props);
    this.onPressID = this.onPressID.bind(this)
  }

  onPressID() {
    Actions.messages({ friend: this.props.friend })
  }

  render() {
    const { id } = this.props.friend

    return (
      <ScrollView>
        <TouchableOpacity onPress={this.onPressID.bind(this)}>
          <Card
              source={accountIcon}
              textProfile={id}         
          />                        
        </TouchableOpacity>        
      </ScrollView>
    );
  }
}

export default ListFriend