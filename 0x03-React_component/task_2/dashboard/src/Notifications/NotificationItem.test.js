import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotificationItem from './NotificationItem';

configure({adapter: new Adapter()});
describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('render the correct html', () => {
    const wrapper = shallow(<NotificationItem type="default"  value="New test available" />);
    expect(wrapper.html()).toEqual('<li data-notification-type="default">New test available</li>');
  });

  it('render the correct html by passing html prop', () => {
    const wrapper = shallow(<NotificationItem type="urgent" html={{ __html: '<u>Test html</u>' }} />);
    expect(wrapper.html()).toEqual('<li data-notification-type="urgent"><u>Test html</u></li>');
  });

  it("Display the message when markAsRead is called", () => {
    const id = 2;
    const wrapper = shallow(
      <NotificationItem type="default" value="test" id={id} />
    );
    const instance = wrapper;
    instance.markAsRead = jest.fn();
    const listItem = wrapper.find("li").first();
    listItem.simulate("click");
    instance.markAsRead(id);
    expect(instance.markAsRead).toHaveBeenCalledWith(2);
    jest.restoreAllMocks();
  });
});
