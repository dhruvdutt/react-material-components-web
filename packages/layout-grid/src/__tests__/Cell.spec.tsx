import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Cell from "../Cell";

describe("Cell", () => {
    it("Should have mdc-layout-grid__cell classname", () => {
        const wrapper = enzyme.mount(<Cell />);
        expect(wrapper.hasClass("mdc-layout-grid__cell")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<Cell />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<Cell span={1} />);
        expect(wrapper.hasClass("mdc-layout-grid__cell")).toBeTruthy();
        expect(wrapper.hasClass("mdc-layout-grid__cell--span-1")).toBeTruthy();

        // TODO: Test spanDesktop spanTablet spanPhone order align
    });
});
