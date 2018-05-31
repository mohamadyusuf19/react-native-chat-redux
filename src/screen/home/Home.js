import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import FriendList from '../friends/FriendList';
import FriendAdd from '../friends/FriendAdd';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
    };
  }

  handleChangeTab(index) {
    this.setState({ selected: index.i });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView
            onChangeTab={(index) => this.handleChangeTab(index)}
            tabBarUnderlineColor="#000"
            tabBarUnderlineStyle={{backgroundColor: "#456463"}}
            tabBarBackgroundColor ="#fff"
            tabBarActiveTextColor="#456463"
            tabBarInactiveTextColor="#b9b9b9"
            tabBarPosition='top'
            >            
            <FriendList tabLabel="CHATS" {...this.props} />
            <FriendAdd tabLabel="ADD CONTACT" {...this.props} />
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  icon: {
    width: 22,
    height: 22,
  }
})

export default Home