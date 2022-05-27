/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({adapter: new Adapter()});
describe('<App />', () => {
  it('if <App /> renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
  it('has Header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').length).toEqual(1);   
  });
  it('has Notifications', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications').length).toEqual(1);   
  });
  it('has Login', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login').length).toEqual(1);   
  });
  it('has Footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer').length).toEqual(1);   
  });
});
