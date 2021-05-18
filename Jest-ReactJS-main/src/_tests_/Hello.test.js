import React from "react";
import Hello from "../components/Hello";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Add tests to React", () => {
    test("Checking text received by prop", () => {
        const data = { title: 'Hello Unit Testing With Jest' };
        const wrapper = mount(
            <Hello title={data.title} />
        );
        const p = wrapper.find(`h1`);
        expect(p.text()).toBe('Hello Unit Testing With Jest' );
    });
});