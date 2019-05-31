/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";

import App from "./App.vue";
import CounterComponent from "./components/CounterComponent.vue";

describe("test App Component", () => {

  test("should use CounterComponent in App component", () => {
    const wrapper = shallowMount(App);
    wrapper.setData({ count: 4 });
    expect(wrapper.find(CounterComponent).exists()).toBe(true);
  });
});
