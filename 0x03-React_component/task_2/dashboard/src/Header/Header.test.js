/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
import logoImage from '../assets/holberton-logo.jpg';

configure({adapter: new Adapter()});
describe('<header />', () => {
  it('if <header /> renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("renders an image and h1 titles", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img").length).toEqual(1);
    expect(wrapper.find("h1").length).toEqual(1);
  });
});
