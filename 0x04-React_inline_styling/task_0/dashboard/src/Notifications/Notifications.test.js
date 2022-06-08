import { shallow, configure } from "enzyme";
import React from "react";
import NotificationItem from "./NotificationItem";
import Notifications from "./Notifications";
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe("<Notifications />", () => {
  it("NotificationItem renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Verify that by passing dummy type and value props, it renders the correct html", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    wrapper.update();
    const listItem = wrapper.find("li");

    expect(listItem).toHaveLength(1);
    expect(listItem.text()).toEqual("test");
    expect(listItem.prop("data-notification-type")).toEqual("default");
  });
  it("Passing a dummy html prop, it renders the correct html (for example", () => {
    const text = "Here is the list of notifications";
    const wrapper = shallow(
      <NotificationItem html={{ __html: "<u>test</u>" }} />
    );
    wrapper.update();
    const listItem = wrapper.find("li");
    expect(listItem.html()).toEqual(
      '<li data-notification-type="default"><u>test</u></li>'
    );
  });

  it("calls the markAsRead function and displays the right message", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" }
    ];
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
    console.log = jest.fn();
    const instance = wrapper.instance();
    const id = 1;
    instance.markAsRead(id);
    expect(console.log).toHaveBeenCalledWith(
      `Notification ${id} has been marked as read`
    );
    jest.restoreAllMocks();
  });

  it("when updating the props of the component with the same list, the component doesn't rerender", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];

    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );

    const shouldComponentUpdate = jest.spyOn(
      Notifications.prototype,
      "shouldComponentUpdate"
    );

    wrapper.setProps({ listNotifications: listNotifications });

    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(false);

    jest.restoreAllMocks();
  });

  it("when updating the props of the component with a longer list, the component does rerender", () => {
    let listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];

    const listNotifications2 = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "default", value: "New quiz available" }
    ];

    console.log(listNotifications);
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );

    const shouldComponentUpdate = jest.spyOn(
      Notifications.prototype,
      "shouldComponentUpdate"
    );

    wrapper.setProps({ listNotifications: listNotifications2 });

    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(true);

    jest.restoreAllMocks();
  });
});
