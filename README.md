# react-native-toastify

[![Dependencies][prod-dependencies-badge]][prod-dependencies]
[![Dependencies][dev-dependencies-badge]][dev-dependencies]
[![Code Climate score][codeclimate-score-badge]][codeclimate-score]
[![Codecov][codecov-coverage-badge]][codecov-coverage]
[![Code Climate coverage][codeclimate-issues-badge]][codeclimate-issues]
[![Node.js version][nodejs-badge]][nodejs]
[![NPM version][npm-badge]][npm]
[![Build Status][travis-badge]][travis-ci]
[![Security version][security-version-badge]][security-version]
[![MIT License][license-badge]][LICENSE]
[![PRs Welcome][prs-badge]][prs]

## Description

React Native cross-plateform (iOS/Android) toast notification component highly customizable.

## Install

```
$ npm install react-native-toastify --save
```

## Demo

<!-- ![Example](https://github.com/rimiti/react-native-toastify/blob/master/demo/android.gif) -->
<img src="https://github.com/rimiti/react-native-toastify/blob/master/demo/android.gif" height="550">

## Examples

```
import React, {Component} from 'react';
import {Button, View} from 'react-native';
import Toast from 'react-native-toastify';

export default class Layout extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View style={{paddingTop: 300}}>
				<Button	onPress={() => this.toastify.show('Hello World !', 1000)}	title="Demo" />
				<Toast ref={(c) => this.toastify = c} />
			</View>
		)
	}
}
```

## Documentation

```
Props                     Type                  Description                                                 Usage
----------------------------------------------------------------------------------------------------------------------
style                     {View}                Style definitions for the global element                    (optional)
position                  {top, center, bottom} Position of toast.                                          (optional)
textStyle                 {Text}                Style definitions for the toast text element                (optional)
positionValue             {number}              Position value of toast                                     (optional)
fadeInDuration            {number}              Duration of fade in                                         (optional)
fadeOutDuration           {number}              Duration of fade out                                        (optional)
opacity                   {number}              Opacity value                                               (optional)
durationShort             {number}              Show duration                                               (optional)
defaultCloseDelay         {number}              Close delay duration                                        (optional)
end                       {number}              End value of animation                                      (optional)

```

## Scripts

Run using npm run <script> command.

    clean - remove coverage data, Jest cache and transpiled files,
    lint - lint source files and tests,
    test - lint, typecheck and run tests with coverage,
    test-only - run tests with coverage,
    test:watch - interactive watch mode to automatically re-run tests,
    build - compile source files,
    build:watch - interactive watch mode, compile sources on change.


## License
MIT © [Dimitri DO BAIRRO](https://github.com/rimiti/react-native-toastify/blob/master/LICENSE)

[prod-dependencies-badge]: https://david-dm.org/rimiti/react-native-toastify/status.svg
[prod-dependencies]: https://david-dm.org/rimiti/react-native-toastify
[dev-dependencies-badge]: https://david-dm.org/rimiti/react-native-toastify/dev-status.svg
[dev-dependencies]: https://david-dm.org/rimiti/react-native-toastify?type=dev
[security-version-badge]: https://nodesecurity.io/orgs/dim-solution/projects/e0282cd3-680f-406a-9fa3-22e94c596073/badge
[security-version]: https://nodesecurity.io/orgs/dim-solution/projects/e0282cd3-680f-406a-9fa3-22e94c596073
[codeclimate-score-badge]: https://api.codeclimate.com/v1/badges/e90f04fc308e5efeabac/maintainability
[codeclimate-score]: https://codeclimate.com/github/rimiti/react-native-toastify/maintainability
[codecov-coverage-badge]: https://codecov.io/gh/rimiti/react-native-toastify/branch/master/graph/badge.svg
[codecov-coverage]: https://codecov.io/gh/rimiti/react-native-toastify
[codeclimate-issues-badge]: https://codeclimate.com/github/rimiti/react-native-toastify/badges/issue_count.svg
[codeclimate-issues]: https://codeclimate.com/github/rimiti/react-native-toastify
[nodejs-badge]: https://img.shields.io/badge/node->=%206.9.0-blue.svg?style=flat-square
[nodejs]: https://nodejs.org/dist/latest-v6.x/docs/api/
[npm-badge]: https://img.shields.io/badge/npm->=%203.10.8-blue.svg?style=flat-square
[npm]: https://docs.npmjs.com/
[travis-badge]: https://travis-ci.org/rimiti/react-native-toastify.svg?branch=master
[travis-ci]: https://travis-ci.org/rimiti/react-native-toastify
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license]: https://github.com/rimiti/react-native-toastify/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
