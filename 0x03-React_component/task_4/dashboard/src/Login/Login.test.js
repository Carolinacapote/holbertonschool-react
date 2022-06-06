/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './Login';

configure({adapter: new Adapter()});
describe('<login />', () => {
  it('if <login /> renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });
  it('renders 2 labels and 2 inputs', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label").length).toEqual(2);
    expect(wrapper.find("input").length).toEqual(2);
  });
});
