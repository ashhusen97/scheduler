/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerHeadlessTask('timer', () => require('./SomeTaskName'));
AppRegistry.registerComponent(appName, () => App);
