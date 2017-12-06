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
  it('Renders default state', () => {
    const { wrapper } = factory();
    expect(wrapper.type()).toBe(null);
  });

  it('Test in progress', () => {
    const { wrapper } = factory();
    wrapper.instance().show('test', 10000);
    wrapper.instance().show('test', '10000');
    wrapper.instance().close(10000);
    wrapper.instance().close('10000');
    wrapper.instance().getPosition();
    expect(wrapper.type()).toBe(null);
  });
});
