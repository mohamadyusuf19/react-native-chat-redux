import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { friendFetch } from '../../actions/FriendActions';
import ListFriend from './ListFriend';

const addAccountIcon = require('../../assets/adduser.png')

class FriendList extends Component {
  componentWillMount() {
    this.props.friendFetch()   
  }

  _renderItem({item}) {
    return (
      <ListFriend 
        friend={item}         
        {...this.props} />
    )      
  }  

  render() {
    console.log(this.props.friends)
    return (
      <View style={{flex: 1}}>    
        <FlatList
            data={this.props.friends}            
            keyExtractor={(x, i) => i.toString()}
            renderItem={this._renderItem}
        />          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#000'
  }
})

const mapStateToProps = state => {
  const friends =  _.map(state.friend, (val, uid) => {
    return { ...val, uid };
  });
  return { friends };
}

export default connect(mapStateToProps, { friendFetch })(FriendList);