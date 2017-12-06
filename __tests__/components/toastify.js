import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Toastify from '../../src';

describe('Toastify', () => {
  it('Renders default state', () => {
    const wrapper = shallow(<Toastify ref="toastify"/>);
    this.wrapper.refs.toast.show('hello world!');
  });
});
