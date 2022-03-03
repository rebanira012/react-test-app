import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import Render from "./Render";
import RenderInput from "./RenderInput"

afterEach(() => cleanup());

describe("Rendering", () => {
  it("Should render all the elements correctly", () => {
    render(<RenderInput />);
    //screen.debug();
    expect(screen.getAllByRole("button")).toBeTruthy();
    expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
    
  });
});

describe("Input form onChange event", () => {
    it("Should update input value correctly", () => {
      render(<RenderInput />)
      const inputValue = screen.getByPlaceholderText("Enter");
      userEvent.type(inputValue, "test");
      expect(inputValue.value).toBe("test")
    })
})

describe("Console button conditionary trigger", () => {
  it("Should not trigger output function", () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole}/>)
    userEvent.click(screen.getByRole("button"))
    expect(outputConsole).not.toHaveBeenCalled(); 
  })
  it("Should trigger output function", () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole}/>);
    const inputValue = screen.getByPlaceholderText("Enter");
    userEvent.type(inputValue, "test");
    userEvent.click(screen.getByRole("button"))
    expect(outputConsole).toHaveBeenCalledTimes(1); 
  })
})