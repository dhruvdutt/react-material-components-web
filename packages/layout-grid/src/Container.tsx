import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

import {
    BASE_CLASS_NAME,
    GUTTER_CSS_VARIABLE,
    MARGIN_CSS_VARIABLE,
} from "./constants";
import { Gutter, Margin } from "./types";

export const CLASS_NAME = BASE_CLASS_NAME;

export type MetaProps = {
    margin?: Margin,
    gutter?: Gutter,
};

export type ChildProps = {
    className?: string,
};

/**
 * Wrapper component of mdc-layout-grid
 */
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    public renderNativeDOMProps() {
        const cssVariables = {};
        if (this.props.margin != null) {
            cssVariables[MARGIN_CSS_VARIABLE] = this.normalizeMarginAndGutter(this.props.margin);
        }
        if (this.props.gutter != null) {
            cssVariables[GUTTER_CSS_VARIABLE] = this.normalizeMarginAndGutter(this.props.gutter);
        }
        return {cssVariables};
    }

    protected renderBaseClassName() {
        return CLASS_NAME;
    }

    private normalizeMarginAndGutter(value: Margin | Gutter): string {
        if (typeof value === "number") {
            return `${value}px`;
        } else {
            return value;
        }
    }
}

export default class Container extends DefaultComponentBase<React.HTMLProps<HTMLDivElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [
            "margin",
            "gutter",
        ];
    }

    protected getChildComponent() {
        return "div";
    }
}
