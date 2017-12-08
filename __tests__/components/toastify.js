import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Toastify from '../../src';

function factory(props = {}) {
  return {
    props,
    wrapper: shallow(<Toastify {...props} />, { context: {} }),
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
      style: {},
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
    expect(wrapper.instance().resetTimeout());
  });

  it('Render with hiding state with configuration 1', () => {
    const { wrapper } = factory();
    wrapper.instance().close(10);
    expect(wrapper.state('isShow')).toEqual(false);
    expect(wrapper.state('text')).toEqual('');
  });

  it('Render with hiding state with configuration 2', () => {
    const { wrapper } = factory();
    wrapper.instance().show('Hello word !', 100000);
    expect(wrapper.state('isShow')).toEqual(true);
    expect(wrapper.state('text')).toEqual('Hello word !');
    wrapper.instance().close(0);
    expect(wrapper.state('isShow')).toEqual(true);
  });

  it('Render with hiding (no show delay)', () => {
    const { wrapper } = factory();
    wrapper.instance().show('Hello word !');
    expect(wrapper.state('isShow')).toEqual(true);
    expect(wrapper.state('text')).toEqual('Hello word !');
    wrapper.instance().close(10);
    expect(wrapper.state('isShow')).toEqual(true);
  });

  it('Render with hiding (no show and close delay)', (done) => {
    const { wrapper } = factory({ fadeOutDuration: 0, fadeInDuration: 0 });
    wrapper.instance().show('Hello word !');
    expect(wrapper.state('isShow')).toEqual(true);
    expect(wrapper.state('text')).toEqual('Hello word !');
    wrapper.instance().close();
    expect(wrapper.state('isShow')).toEqual(true);
    setTimeout(() => done(), 1000);
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

  it('Test position method (center)', () => {
    const { wrapper } = factory({ position: 'center' });
    expect(wrapper.instance().position()).toEqual(667);
  });
});
