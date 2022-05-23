import { shallow } from "enzyme";
import App from "./App";

describe("<App/>", () => {
  it("test app", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  it('Tests app header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-header").length).toBe(1);
  });
  it('Test app body"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-body").length).toBe(1);
  });
  it('Test app footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-footer").length).toBe(1);
  });
});
