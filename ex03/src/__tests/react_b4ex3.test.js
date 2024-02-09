import "@testing-library/jest-dom";
import App from "../App.js";
import { render, fireEvent, screen, act } from '@testing-library/react'

describe("b4ex03: Input validation", () => {
  it("#1 App.js has form, 2 inputs and 1 button", () => {
    render(<App />)
    const btn = screen.getByRole("button")
    const key = Object.keys(btn)[0]
    expect(btn[key].return.elementType).toBe("form")
    expect(screen.getAllByRole("textbox").length).toBe(2)
    expect(screen.getByRole("button")).toBeInTheDocument()
  });
  it("#2 Each input has onChange event and form has onSubmit event", () => {
    render(<App />)
    const inputs = screen.getAllByRole("textbox")
    inputs.forEach((input) => {
      const key = Object.keys(input)[0]
      expect(Object.keys((input[key].pendingProps)).includes("onChange")).toBe(true)
    })
    const btn = screen.getByRole("button")
    const key = Object.keys(btn)[0]
    expect(Object.keys(btn[key].return.return.child.pendingProps).includes("onSubmit")).toBe(true)
  });
  it("#3 If no match, you should render `Match not found`", () => {
    render(<App />)
    const message = screen.getByRole("heading", { level: 2 })
    const btn = screen.getByRole("button")
    fireEvent.click(btn)
    expect(message.innerHTML).toBe("Match not found")
  });
  it("#4 If match, you should render `Match found successfully!`", () => {
    render(<App />)
    fillCorrectly();
    const btn = screen.getByRole("button")
    fireEvent.click(btn)
    const message = screen.getByRole("heading", { level: 2 })
    expect(message.innerHTML).toBe("Match found successfully")
  });
  it("#5 If match, message should be green", () => {
    render(<App />)
    fillCorrectly();
    const btn = screen.getByRole("button")
    fireEvent.click(btn)
    const message = screen.getByRole("heading", { level: 2 })
    const key = Object.keys(message)[0]
    const key2 = Object.keys(message[key].stateNode)[1]
    expect(message[key].stateNode[key2].style.color).toBe("green")
  });
  it("#6 If no match, message should be red", () => {
    render(<App />)
    const btn = screen.getByRole("button")
    fireEvent.click(btn);
    const message = screen.getByRole("heading", { level: 2 })
    const key = Object.keys(message)[0]
    const key2 = Object.keys(message[key].stateNode)[1]
    expect(message[key].stateNode[key2].style.color).toBe("red")
  });
  it("#7 Renders disappearing messages", async () => {
    render(<App />)
    const btn = screen.getByRole("button")
    fireEvent.click(btn);
    const message = screen.getByRole("heading", { level: 3 })
    expect(message.innerHTML).toBe("This message will disappear in 3")
    await waitOneSecond()
    expect(message.innerHTML).toBe("This message will disappear in 2")
    await waitOneSecond()
    expect(message.innerHTML).toBe("This message will disappear in 1")
    await waitOneSecond()
    expect(message.innerHTML).toBe("")
  });
});

const waitOneSecond = async () => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });
};

const fillCorrectly = () => {
  const inputs = screen.getAllByRole("textbox")
  inputs.forEach(input => {
    const key = Object.keys(input)[1]
    const name = input[key].name
    fireEvent.change(input, { target: { value: name === "email" ? "a@a.com" : name === "password" && "a" } })
  })
};
