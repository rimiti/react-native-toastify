import React, {Component} from 'react';
import {View, Text, Animated, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/toastify';

export const DURATION = {
  LENGTH_LONG: 2000,
  LENGTH_SHORT: 500,
  FOREVER: 0,
};

const {height} = Dimensions.get('window');

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

  constructor(props) {
    super(props);
    console.log('proppppppppps:', this.props);
    this.state = {
      isShow: false,
      text: '',
      opacityValue: new Animated.Value(this.props.opacity),
    }
  }

  show(text, duration) {
    this.duration = typeof duration === 'number' ? duration : DURATION.LENGTH_SHORT;

    this.setState({isShow: true, text});
    Animated.timing(this.state.opacityValue, {
      toValue: this.props.opacity,
      duration: this.props.fadeInDuration,
    })
      .start(() => {
        this.isShow = true;
        if (duration !== DURATION.FOREVER) this.close();
      });
  }

  close(duration) {
    let delay = typeof duration === 'undefined' ? this.duration : duration;
    if (delay === DURATION.FOREVER) delay = this.props.defaultCloseDelay || 250;

    if (!this.isShow && !this.state.isShow) return;
    this.timer && clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      Animated.timing(this.state.opacityValue, {
        toValue: 0.0,
        duration: this.props.fadeOutDuration,
      })
        .start(() => {
          this.setState({isShow: false});
          this.isShow = false;
        });
    }, delay);
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  getPosition() {
    if (this.props.position === 'top') return this.props.positionValue;
    else if(this.props.position === 'center') return height / 2;
    else if(this.props.position === 'bottom') return height - this.props.positionValue;
  }

  render() {
    return this.state.isShow ?
      <View style={[styles.container, {top: this.getPosition()}]} pointerEvents="none">
        <Animated.View style={[styles.content, {opacity: this.state.opacityValue}, this.props.style]}>
          <Text style={this.props.textStyle}>{this.state.text}</Text>
        </Animated.View>
      </View> : null;
  }
}
