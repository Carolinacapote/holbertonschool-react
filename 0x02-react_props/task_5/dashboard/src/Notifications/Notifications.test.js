/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Notifications from './Notifications';

configure({adapter: new Adapter()});
describe('<notifications />', () => {
  it('if <notifications /> renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('menu item is displayed and div.Notifications is not when displayDrawer=false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false}/>);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  it('menu item and div.Notifications are being displayed when displayDrawer=true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('div.Notifications')).toHaveLength(1);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });
});
