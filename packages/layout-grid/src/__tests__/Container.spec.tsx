import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Container from "../Container";

describe("Container", () => {
    it("Should have mdc-layout-grid classname", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-layout-grid")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });

    it("Should render margin/gutter property as CSS variable", () => {
        let wrapper;

        wrapper = enzyme.mount(<Container margin={8} gutter={12} />);
        expect(wrapper.hasClass("mdc-layout-grid")).toBeTruthy();

        // TODO: Validate CSS variables for --mdc-layout-grid-margin and --mdc-layout-grid-gutter
    });
});
