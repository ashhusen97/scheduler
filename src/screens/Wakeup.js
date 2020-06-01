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
import OcceanCard from '../containers/OcceanCard';
const {width, height} = Dimensions.get('window');

class Wakeup extends Component {
  render() {
    return (
      <ImageBackground
        blurRadius={1.5}
        style={styles.ImageBackground}
        source={require('../assets/wakeup-bg.jpg')}>
        <ScrollView style={styles.contentContainer}>
          <Text fontFamily="Poppins-Regular" h1>
            Categories
          </Text>
          <View style={styles.CategoriesCardContainer}>
            <OcceanCard>Ocean</OcceanCard>
            <OcceanCard>Ocean</OcceanCard>
            <OcceanCard>Ocean</OcceanCard>
          </View>
          <View></View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

// class end
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
  CategoriesCardContainer: {
    marginTop: 30,
    flexDirection: 'row',
  },
});
export default connect(MapStateToProps, null)(Wakeup);
