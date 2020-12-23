import React from "react";
import TestRenderer from "react-test-renderer";
import User from "./index";
import {BrowserRouter} from "react-router-dom";

describe("User component", () => {
    test("button is not loading condition by default", () => {
        const component = TestRenderer.create(<BrowserRouter><User userData={{followed: false}} /></BrowserRouter>);
        console.log(component.toJSON());
        // expect(instance.state.isLoading).toBe(false);

    });
});