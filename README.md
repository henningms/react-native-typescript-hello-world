# Hello World React Native Typescript

This is the Hello World React Native sample made in TypeScript.

Supports iOS, Android and Windows 10 UWP.

# Running

```
npm install -g react-native-cli
npm install -g typescript
npm install -g typings
npm install --save-dev rnpm-plugin-windows

npm install
```

To create the Javascript files necessary for running you have to compile them
using `tsc` which is the Typescript compiler.

`tsc` supports watch mode so it can auto-compile upon file changes: `tsc --watch`

```
react-native run-ios
react-native run-android
react-native run-windows
```
