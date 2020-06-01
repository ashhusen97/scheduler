/* eslint-disable prettier/prettier */
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

class Home extends Component {
  render() {
    return (
      <ImageBackground
        blurRadius={2}
        style={styles.ImageBackground}
        source={require('../assets/home-bg.jpg')}>
        <ScrollView style={styles.contentContainer}>
          <Text fontFamily="Poppins-Regular" title>
            Welcome
          </Text>
          <Text fontFamily="Poppins-Bold" h1>
            {this.props.myname} !
          </Text>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    myname: state.name,
  };
};

const styles = StyleSheet.create({
  contentContainer: {paddingBottom: 30},
  ImageBackground: {
    width,
    height,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
});

export default connect(MapStateToProps, null)(Home);
