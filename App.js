import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Navigation from './src/navigation';
// import Alarmsecond from './alarmsecond'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/reducers/reducer';
const store = createStore(reducer);
export default class App extends Component {
  render() {
    return (
      //  <Alarmsecond/>
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});
