import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Toastify from '../../src';

function factory(props = {}) {
  const wrapper = shallow(<Toastify ref="toastify" {...props} />, { context: {} });
  return {
    props,
    wrapper,
  };
}

describe('Toastify', () => {
  it('Render with default state', () => {
    const { wrapper } = factory();
    expect(wrapper.type()).toBe(null);
  });

  it('Render with open state', () => {
    const { wrapper } = factory();
    wrapper.instance().open(10000);
  });

  // it('Render with close state', () => {
  //   const { wrapper } = factory();
  //   wrapper.instance().show('test', 10000);
  //   expect(wrapper.type()).toBe(null);
  // });
  //
  // it('Test position method', () => {
  //   const { wrapper } = factory();
  //   wrapper.instance().position();
  //   expect(wrapper.type()).toBe(null);
  // });
});
