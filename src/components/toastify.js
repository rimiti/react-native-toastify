import React, { Component } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/toastify';

export default class Toastify extends Component {
  static propTypes = {
    style: View.propTypes.style,
    position: PropTypes.oneOf([
      'top',
      'center',
      'bottom',
    ]),
    textStyle: Text.propTypes.style,
    positionValue: PropTypes.number,
    fadeInDuration: PropTypes.number,
    fadeOutDuration: PropTypes.number,
    opacity: PropTypes.number,
  };

  static defaultProps = {
    position: 'bottom',
    textStyle: styles.text,
    positionValue: 120,
    fadeInDuration: 500,
    fadeOutDuration: 500,
    opacity: 1,
  };

  constructor() {
    super();
  }
}
