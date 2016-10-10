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

/**
 * The main component of the app.. Called App..
 * 
 * Component is extendig with Props, and State, whic in this case
 * is two empty interfaces. Since it's Typescript it would be wise
 * to try at least to define what kind of props and state that should
 * be dealt with in components. Otherwise you can still use the any keyword
 */
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