import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Toastify from '../../src';

function factory(props = {}) {
  const wrapper = shallow(<Toastify {...props} />, { context: {} });
  return {
    props,
    wrapper,
  };
}

describe('Toastify', () => {
  it('Renders default state', () => {
    const { wrapper } = factory();
    expect(wrapper.type()).toBe(null);
  });
});
