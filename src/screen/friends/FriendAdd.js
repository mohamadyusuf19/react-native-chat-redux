import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addEmailChanged, addFriend } from '../../actions/AddFriendsActions';
import { Spinner } from '../../components/Spinner';

class FriendAdd extends Component {
  onEmailChange(text) {
    this.props.addEmailChanged(text);
  }

  onButtonPress() {
    const { email } = this.props;

    this.props.addFriend({ email });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.button}>
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{flex: 1, padding: 10}}>
          <TextInput            
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
          {this.renderButton()}
      </View>        
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }, 
  button: {
    backgroundColor: '#000',
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',    
    borderRadius: 5,
  },
  text: {
      color: '#fff',
      fontSize: 18
  }
});

const mapStateToProps = state => {
  const { email, loading, error } = state.addfriend;

  return {
    email,
    loading,
    error
  };
};

export default connect(mapStateToProps, { addEmailChanged, addFriend })(FriendAdd);
