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

describe(" verify that Notifications renders correctly if you pass an empty array or if you do not pass the listNotifications property", () => {
  beforeEach(() => {
    listNotifications = [];
  });

  it("check output with empty listNotifications", () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={ listNotifications } />
    );
    expect(wrapper.find("NotificationItem").html()).toEqual(
      '<li data-notification-type="default">No new notification for now</li>'
    );
  });

  it("chck output without listNotifications", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find("NotificationItem").html()).toEqual(
      '<li data-notification-type="default">No new notification for now</li>'
    );
  });
});

describe("verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem", () => {
  beforeEach(() => {
    latestNotification = getLatestNotification();
    listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: latestNotification } },
    ];
  });

  it("Notifications renders Notification Items and have the correct html", () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={ listNotifications } />
    );
    expect(wrapper.find("NotificationItem").at(0).html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
    expect(wrapper.find("NotificationItem").at(1).html()).toEqual(
      '<li data-notification-type="urgent">New resume available</li>'
    );
    expect(wrapper.find("NotificationItem").at(2).html()).toEqual(
      `<li data-notification-type="urgent">${latestNotification}</li>`
    );
  });
});
