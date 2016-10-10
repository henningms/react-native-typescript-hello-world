/// <reference path="../typings/index.d.ts" />

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BaseStyle from './styles/baseStyle';

interface Props {

}

interface State {

}

export default class App extends Component<Props, State> {
  render() {
    return (
      <View style={BaseStyle.container}>
        <Text style={BaseStyle.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={BaseStyle.instructions}>
          Sup dooods! Ai ai ai!sdsds
        </Text>
        <Text style={BaseStyle.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}