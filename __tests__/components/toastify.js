import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Toastify from '../../src';

describe('Toastify', () => {
  it('Renders default state', () => {
    const wrapper = shallow(<Toastify />);
    expect(wrapper.type()).toBe(null);
  });
});
