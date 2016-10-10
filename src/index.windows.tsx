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
} from 'react-native';

import App from './app';

class TypescriptDemo extends Component<any, any> {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('TypescriptDemo', () => TypescriptDemo);