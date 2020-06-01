/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import Text from '../components/Text';
export default class OcceanCard extends Component {
  render() {
    return (
      <ImageBackground
        blurRadius={10}
        imageStyle={{borderRadius: 20}}
        source={{
          uri:
            'https://static.vecteezy.com/system/resources/thumbnails/000/273/915/original/ocean-background.jpg',
        }}
        style={styles.ImageBackground}>
        <Text h3>{this.props.children}</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  ImageBackground: {
    height: 140,
    width: 140,
    borderRadius: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
