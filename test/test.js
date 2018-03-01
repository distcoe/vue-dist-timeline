import { mount } from "@vue/test-utils";
import distTimeline from "../src/distTimeline.vue";

describe("distTimeline.vue", () => {
  const wrapper = mount(distTimeline, {
    propsData: {
      currentTime: 0,
      data: []
    }
  });
  it("no data to show", () => {
    // expect(wrapper.html()).toContain("没有数据");
  });
  it("show timeline with required props", () => {
    const currentTime = 2015
    const data = [2013, 2014];
    wrapper.setProps({ currentTime, data });
  });
});
