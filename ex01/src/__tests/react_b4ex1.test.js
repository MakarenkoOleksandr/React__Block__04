import "@testing-library/jest-dom";
import App from "../App.js";
import { render, fireEvent, screen } from '@testing-library/react'

describe("b4ex01: Odd Counter", () => {
  it("#1 There should be a button with an onClick event", () => {
    render(<App />)
    const button = screen.getByRole("button")
    const key = Object.keys(button)[1]
    expect(Object.keys(button[key]).includes("onClick")).toBe(true)
  });
  it("#2 There should be an h2 with initial value 0", async () => {
    render(<App />);
    const h2 = await screen.findByRole('heading', { level: 2 })
    expect(h2.innerHTML).toBe("0")
  });
  it("#3 After pressing button 2 times, h2 should hold value: 1", async () => {
    render(<App />);
    const button = await screen.findByRole("button");
    fireEvent.click(button)
    fireEvent.click(button)
    const h2 = await screen.findByRole('heading', { level: 2 })
    expect(h2.innerHTML).toBe("1")
  });
  it("#4 After pressing button 4 times, h2 should hold value: 3", async () => {
    render(<App />);
    const button = await screen.findByRole("button");
    Array.from(Array(4).keys()).forEach(() => fireEvent.click(button))
    const h2 = await screen.findByRole('heading', { level: 2 })
    expect(h2.innerHTML).toBe("3")
  });
});
