import React from "react";
import { TextComponent } from "./text.component";
import { shallow } from "enzyme";

describe("Renders the text component", () => {
  it("renders the span", () => {
    const wrapper = shallow(<TextComponent texttype="span" >Test</TextComponent>);
    expect(wrapper.exists("span")).toEqual(true);
  });
  it("renders the paragraph", () => {
    const wrapper = shallow(<TextComponent>Test</TextComponent>);
    expect(wrapper.exists("p")).toEqual(true);
  });
});
