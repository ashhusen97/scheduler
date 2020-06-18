/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import ResultList from '../containers/ResultList';
const {width, height} = Dimensions.get('window');

class Wakeup extends Component {
  render() {
    console.log(this.props.data);
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          blurRadius={1.5}
          style={styles.ImageBackground}
          source={require('../assets/wakeup-bg.jpg')}>
          <ScrollView
            style={styles.contentContainer}
            showsVerticalScrollIndicator={false}>
            <ResultList title={'Categories'} data={this.props.data} />
            <ResultList
              title={'Ocean'}
              subtitle={'Positive'}
              data={this.props.data}
            />
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

// class end
const MapStateToProps = (state) => {
  return {
    data: state.categories,
  };
};

const styles = StyleSheet.create({
  contentContainer: {paddingBottom: 30},
  ImageBackground: {
    width,
    height,
    paddingBottom: 30,
  },
});
export default connect(MapStateToProps, null)(Wakeup);
