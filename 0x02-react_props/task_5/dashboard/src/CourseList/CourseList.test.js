/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CourseList from "./CourseList";

configure({adapter: new Adapter()});
describe("<CourseList />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("renders the rows", () => {
    const wrapper = shallow(<CourseList />);
    const item = wrapper.find("CourseListRow");

    expect(item.at(0).prop("textFirstCell")).toEqual("Available courses");
    expect(item.at(0).prop("isHeader")).toEqual(true);

    expect(item.at(1).prop("textFirstCell")).toEqual("Course name");
    expect(item.at(1).prop("textSecondCell")).toEqual("Credit");
    expect(item.at(1).prop("isHeader")).toEqual(true);

    expect(item.at(2).prop("textFirstCell")).toEqual("ES6");
    expect(item.at(2).prop("textSecondCell")).toEqual("60");
    expect(item.at(2).prop("isHeader")).toEqual(false);

    expect(item.at(3).prop("textFirstCell")).toEqual("Webpack");
    expect(item.at(3).prop("textSecondCell")).toEqual("20");
    expect(item.at(3).prop("isHeader")).toEqual(false);

    expect(item.at(4).prop("textFirstCell")).toEqual("React");
    expect(item.at(4).prop("textSecondCell")).toEqual("40");
    expect(item.at(4).prop("isHeader")).toEqual(false);
  });
});

describe("verify that when you pass a list of courses, the component renders it correctly", () => {
  beforeEach(() => {
    listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
  });

  it("checcks correct output", () => {
    const wrapper = shallow(<CourseList listCourses={ listCourses } />);

    expect(wrapper.find('CourseListRow').at(0).prop('textFirstCell')).toEqual('Available courses');
    expect(wrapper.find('CourseListRow').at(0).prop('isHeader')).toEqual(true);

    expect(wrapper.find('CourseListRow').at(1).prop('textFirstCell')).toEqual('Course name');
    expect(wrapper.find('CourseListRow').at(1).prop('textSecondCell')).toEqual('Credit');
    expect(wrapper.find('CourseListRow').at(1).prop('isHeader')).toEqual(true);

    expect(wrapper.find('CourseListRow').at(2).prop('textFirstCell')).toEqual('ES6');
    expect(wrapper.find('CourseListRow').at(2).prop('textSecondCell')).toEqual(60);
    expect(wrapper.find('CourseListRow').at(2).prop('isHeader')).toEqual(false);

    expect(wrapper.find('CourseListRow').at(3).prop('textFirstCell')).toEqual('Webpack');
    expect(wrapper.find('CourseListRow').at(3).prop('textSecondCell')).toEqual(20);
    expect(wrapper.find('CourseListRow').at(3).prop('isHeader')).toEqual(false);

    expect(wrapper.find('CourseListRow').at(4).prop('textFirstCell')).toEqual('React');
    expect(wrapper.find('CourseListRow').at(4).prop('textSecondCell')).toEqual(40);
    expect(wrapper.find('CourseListRow').at(4).prop('isHeader')).toEqual(false);
  });
});

describe("verify that CourseList renders correctly if you pass an empty array or if you do not pass the listCourses property", () => {
  beforeEach(() => {
    listCourses = [];
  });

  it('checks correct output', () => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.find('CourseListRow').at(0).prop('textFirstCell')).toEqual('Available courses');
    expect(wrapper.find('CourseListRow').at(0).prop('isHeader')).toEqual(true);

    expect(wrapper.find('CourseListRow').at(1).prop('textFirstCell')).toEqual('Course name');
    expect(wrapper.find('CourseListRow').at(1).prop('textSecondCell')).toEqual('Credit');
    expect(wrapper.find('CourseListRow').at(1).prop('isHeader')).toEqual(true);

    expect(wrapper.find('CourseListRow').at(2).prop('textFirstCell')).toEqual('No course available yet');
    expect(wrapper.find('CourseListRow').at(2).prop('textSecondCell')).toEqual(null);
    expect(wrapper.find('CourseListRow').at(2).prop('isHeader')).toEqual(false);
  });
});
