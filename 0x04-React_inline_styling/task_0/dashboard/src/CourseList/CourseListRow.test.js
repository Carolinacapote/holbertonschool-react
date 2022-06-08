/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CourseListRow from "./CourseListRow";

configure({adapter: new Adapter()});
describe('<CourseListRow />', () => {
  it('renders a cell with colspan 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Testing the title"/>);
    expect(wrapper.find('th').prop("colSpan")).toEqual("2");
  });

  it('tests the component renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Course Name" textSecondCell="Amount of students"/>);
    const th = wrapper.find("th");
    expect(th.at(0).text()).toEqual("Course Name");
    expect(th.at(1).text()).toEqual("Amount of students");
  });

  it('tests the component renders correctly two td elements within a tr element', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Frontend with Angular" textSecondCell="3"/>);
    const tr = wrapper.find("tr");
    expect(tr.children("td")).toHaveLength(2);
  });
});
