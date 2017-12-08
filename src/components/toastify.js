import React, { Component } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/toastify';

const { height } = Dimensions.get('window');

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
    durationShort: PropTypes.number,
    defaultCloseDelay: PropTypes.number,
    end: PropTypes.number,
  };

  static defaultProps = {
    style: {},
    position: 'bottom',
    textStyle: styles.text,
    positionValue: 120,
    fadeInDuration: 500,
    fadeOutDuration: 500,
    opacity: 1,
    durationShort: 500,
    defaultCloseDelay: 250,
    end: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      text: '',
      opacityValue: new Animated.Value(this.props.opacity),
    };
  }

  componentWillUnmount() {
    this.resetTimeout();
  }

  show(text, duration) {
    this.setState({
      isShow: true,
      text,
      duration: typeof duration === 'number' ? duration : this.props.durationShort,
    });

    Animated.timing(this.state.opacityValue, {
      toValue: this.props.opacity,
      duration: this.props.fadeInDuration,
    })
      .start(() => {
        this.isShow = true;
        if (duration !== this.props.end) this.close();
      });
  }

  close(duration) {
    let delay = typeof duration === 'number' ? duration : this.state.duration;
    if (delay === this.props.end) delay = this.props.defaultCloseDelay;

    if (!this.isShow && !this.state.isShow) return;
    this.resetTimeout();
    this.timer = setTimeout(() => Animated.timing(this.state.opacityValue, {
      toValue: 0.0,
      duration: this.props.fadeOutDuration,
    })
      .start(() => {
        this.setState({ isShow: false });
        this.isShow = false;
      }), delay);
  }

  resetTimeout() {
    clearTimeout(this.timer);
  }

  position() {
    if (this.props.position === 'top') return this.props.positionValue;
    else if (this.props.position === 'center') return height / 2;
    return height - this.props.positionValue;
  }

  render() {
    return this.state.isShow ?
      <View style={[styles.container, { top: this.position() }]} pointerEvents="none">
        <Animated.View
          style={[styles.content, { opacity: this.state.opacityValue }, this.props.style]}
        >
          <Text style={this.props.textStyle}>{this.state.text}</Text>
        </Animated.View>
      </View> : null;
  }
}
