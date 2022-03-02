import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvetn from "@testing-library/user-event"
import Render from "./Render";
import RenderInput from "./RenderInput"

afterEach

describe("Rendering", () => {
  it("Should render all the elements correctly", () => {
    render(<RenderInput />);
    //screen.debug();
    expect(screen.getAllByRole("button")).toBeTruthy();
    expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
    
  });
});

describe("Input form onChange event", () => {
    it("Should update input value correctly", () => {})
})