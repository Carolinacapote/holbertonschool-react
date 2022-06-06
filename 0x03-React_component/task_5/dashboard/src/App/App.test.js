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
  it('checks that CourseList is not displayed', () => {
    const wrapper = shallow(<App isLoggedIn={false}/>);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });
  it('verifies that the Login component is not included and the CourseList is included', () => {
    const wrapper = shallow(<App isLoggedIn={true}/>);
    expect(wrapper.find('Login')).toHaveLength(0);
    expect(wrapper.find('CourseList')).toHaveLength(1);
  });

  it("when user types ctrl + h, display alert with 'Logging you out' text", () => {
    const events = {};
    const logout = jest.fn();
    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });
    window.alert = jest.fn();
    shallow(<App logOut={logout} />);
    events.keydown({ key: "h", ctrlKey: true });
    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(logout).toHaveBeenCalled();
    jest.restoreAllMocks();
  });
});
