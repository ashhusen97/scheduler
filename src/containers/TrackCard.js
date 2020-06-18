/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground, Dimensions} from 'react-native';

import Text from '../components/Text';
const {width} = Dimensions.get('window');
export default class TrackCard extends Component {
  render() {
    return (
      <ImageBackground
        blurRadius={2}
        imageStyle={{borderRadius: 20}}
        source={{
          uri:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        }}
        style={styles.ImageBackground}>
        <Text h3>{this.props.children}</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  ImageBackground: {
    height: 155,
    width: width / 2 - 30,
    borderRadius: 20,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
