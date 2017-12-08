import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Toastify from '../../src';

function factory(props = {}) {
  return {
    props,
    wrapper: shallow(<Toastify ref="toastify" {...props} />, { context: {} }),
  };
}

describe('Toastify', () => {
  it('Render with default state', () => {
    const { wrapper } = factory();
    const expected = {
      defaultCloseDelay: 250,
      durationLong: 2000,
      durationShort: 500,
      end: 0,
      fadeInDuration: 500,
      fadeOutDuration: 500,
      opacity: 1,
      position: 'bottom',
      positionValue: 120,
      textStyle: { color: '#fff' },
    };
    expect(wrapper.type()).toBe(null);
    expect(wrapper.instance().props).toEqual(expected);
  });

  it('Render when toast is showing', () => {
    const { wrapper } = factory();
    wrapper.instance().show('Hello word !', 10000);
    expect(wrapper.state('isShow')).toEqual(true);
    expect(wrapper.state('text')).toEqual('Hello word !');
    expect(wrapper.state('duration')).toEqual(10000);
  });

  it('Render with hiding state', () => {
    const { wrapper } = factory();
    wrapper.instance().close();
    expect(wrapper.state('isShow')).toEqual(false);
    expect(wrapper.state('text')).toEqual('');
  });

  it('Test position method (top)', () => {
    const { wrapper } = factory({ position: 'top' });
    expect(wrapper.instance().position()).toEqual(120);
  });

  it('Test position method (bottom)', () => {
    const { wrapper } = factory({ position: 'bottom' });
    expect(wrapper.instance().position()).toEqual(1214);
  });

  it('Test position method (center)', () => {
    const { wrapper } = factory({ position: 'center' });
    expect(wrapper.instance().position()).toEqual(667);
  });
});
