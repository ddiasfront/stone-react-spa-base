import React from "react";
import { TitleComponent } from "./Title.component";
import { shallow } from "enzyme";

describe("Renders the Title component", () => {
  it("renders the h1", () => {
    const wrapper = shallow(<TitleComponent titleType="h1" >Render h1</TitleComponent>);
    expect(wrapper.exists("h1")).toEqual(true);
  });
  it("renders the h2", () => {
    const wrapper = shallow(<TitleComponent titleType="h2" >Render h2</TitleComponent>);
    expect(wrapper.exists("h2")).toEqual(true);
  });
  it("renders the h3", () => {
    const wrapper = shallow(<TitleComponent titleType="h3" >Render h3</TitleComponent>);
    expect(wrapper.exists("h3")).toEqual(true);
  });
  it("renders the h4", () => {
    const wrapper = shallow(<TitleComponent titleType="h4" >Render h4</TitleComponent>);
    expect(wrapper.exists("h4")).toEqual(true);
  });
});
