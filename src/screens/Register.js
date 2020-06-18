/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Button} from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';
import Text from '../components/Text';

const {width, height} = Dimensions.get('window');
export default class Register extends Component {
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
              Sign Up
            </Text>
            <View>
              <TextInput placeholder="Ful Name" style={styles.InputStyles} />
              <Icon
                name="user"
                style={{position: 'absolute', top: 26, left: 10, color: 'gray'}}
              />
            </View>
            <View>
              <TextInput placeholder="Email" style={styles.InputStyles} />
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
            <Button
              color="#ffb030"
              mode="text"
              style={styles.ButtonStyles}
              onPress={() => {
                alert('hello');
              }}>
              <Text buttonText>Sign Up</Text>
            </Button>
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
              <Text buttonText>Sign up with facebook</Text>
            </Button>

            <Button
              style={{marginTop: 10}}
              onPress={() => {
                this.props.navigation.navigate('login');
              }}>
              <Text sentence buttonText black>
                Already have an account?{' '}
                <Text bold style={{color: 'red'}} buttonText>
                  Sign In
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
