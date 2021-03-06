/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  ImageBackground,
  Dimensions,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Text from '../components/Text';
import {connect} from 'react-redux';
import {add_token, update_login} from '../actions/token';
const {width} = Dimensions.get('window');
class Login extends Component {
  state = {
    username: '',
    password: '',
    loading: false,
  };

  handleLogin = () => {
    this.setState({loading: true});
    const {username, password} = this.state;
    if (username === 'aashir' && password === '123456') {
      setTimeout(() => {
        const token = '' + Math.random();
        AsyncStorage.setItem('token', token);

        this.props.updateToken(token);
        this.props.updateLoginStatus(true);
        this.setState({loading: false});
      }, 2000);
    } else {
      setTimeout(() => {
        alert('Wrong');
        this.setState({loading: false});
      }, 2000);
    }
  };

  handleUsername(username) {
    this.setState({username});
  }
  handlePassword(password) {
    this.setState({password});
  }
  render() {
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}>
        <ImageBackground
          source={{
            uri: 'https://cdn.wallpapersafari.com/73/8/iLjZRh.jpg',
          }}
          blurRadius={2}
          style={{width, flex: 1}}>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,0.6)',
              flex: 1,
              padding: 15,
              paddingTop: 40,
            }}>
            <Text
              title
              center
              gray
              fontFamily="Roboto-Thin"
              style={{
                margin: 10,
                borderRadius: 10,
              }}>
              Sign In
            </Text>
            <View>
              <TextInput
                placeholder="Email"
                style={styles.InputStyles}
                value={this.state.username}
                onChangeText={(e) => this.handleUsername(e)}
              />
              <Icon
                name="envelope"
                style={{position: 'absolute', top: 26, left: 10, color: 'gray'}}
              />
            </View>
            <View>
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.InputStyles}
                value={this.state.password}
                onChangeText={(e) => this.handlePassword(e)}
              />
              <Icon
                name="lock"
                style={{
                  position: 'absolute',
                  top: 26,
                  left: 13,
                  color: 'gray',
                }}
              />
            </View>
            {this.state.loading ? (
              <ActivityIndicator size={25} color="red" />
            ) : (
              <Button
                color="#ffb030"
                mode="text"
                style={styles.ButtonStyles}
                onPress={this.handleLogin}>
                <Text buttonText>Sign In</Text>
              </Button>
            )}
            <View
              style={{
                flexDirection: 'row',
                marginTop: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: width / 2 - 50,
                  height: 1,
                  borderColor: 'white',
                  borderWidth: 1,
                  marginRight: 5,
                }}></View>
              <Text buttonText black>
                OR
              </Text>
              <View
                style={{
                  width: width / 2 - 50,
                  height: 1,
                  borderColor: 'white',
                  borderWidth: 1,
                  marginLeft: 5,
                }}></View>
            </View>
            <Button
              color="white"
              mode="text"
              icon="facebook"
              style={{
                ...styles.ButtonStyles,
                backgroundColor: '#4267B2',
                marginTop: 20,
              }}
              onPress={() => {
                alert('hello');
              }}>
              <Text buttonText>Sign in with facebook</Text>
            </Button>

            <Button
              style={{marginTop: 10}}
              onPress={() => {
                this.props.navigation.navigate('register');
              }}>
              <Text sentence buttonText black>
                Dont have an account?{' '}
                <Text bold style={{color: 'red'}} buttonText>
                  Sign up
                </Text>
              </Text>
            </Button>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  InputStyles: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    fontFamily: 'Poppins-Regular',
    paddingLeft: 30,
  },
  ButtonStyles: {
    backgroundColor: 'rgba(255, 176, 48,0.9)',
    borderRadius: 20,
    paddingVertical: 5,
  },
});
const MapStateToProps = (state) => {
  return {
    username: state.user,
  };
};
const mapsDispatchToProps = (dispatch) => {
  return {
    updateToken: (token) => {
      dispatch(add_token(token));
    },
    updateLoginStatus: (status) => {
      dispatch(update_login(status));
    },
  };
};
export default connect(MapStateToProps, mapsDispatchToProps)(Login);
