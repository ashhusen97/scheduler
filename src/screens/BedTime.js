import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import Text from '../components/Text';
const {width, height} = Dimensions.get('window');

export default class BedTime extends Component {
  render() {
    return (
      <ImageBackground
        blurRadius={1}
        style={styles.ImageBackground}
        source={require('../assets/bedtime-bg.jpg')}>
        <ScrollView style={styles.contentContainer}>
          <Text fontFamily="Poppins-Regular" title>
            Welcome
          </Text>
          <Text fontFamily="Poppins-Bold" h1>
            {this.props.myname}
          </Text>
        </ScrollView>
      </ImageBackground>
    );
    x;
  }
}
const styles = StyleSheet.create({
  contentContainer: {},
  ImageBackground: {
    width,
    height,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
});
