import "@testing-library/jest-dom";
import App from "../App.js";
import { render, fireEvent, screen } from '@testing-library/react'

describe("b4ex04: Display cart", () => {
  it("#1 App.js has 6 buttons with onClick event, two for each product", () => {
    render(<App />)
    const buttons = screen.getAllByRole("button")
    expect(buttons.length).toBe(6)
  });
  it("#2 If total < 500 you should render 'Shipping will be charged' in red", () => {
    render(<App />)
    const message = screen.getByText(/Shipping will be charged/)
    expect(message).toBeInTheDocument()
    const key = Object.keys(message)[0]
    const key2 = Object.keys(message[key].stateNode)[1]
    expect(message[key].stateNode[key2].style.color).toBe("red")
  });
  it("#3 Adding a product should change the total", () => {
    render(<App />)
    const total = screen.getByRole("heading", { level: 2 })
    const first = total.innerHTML
    const button = screen.getAllByRole("button")[0]
    fireEvent.click(button)
    if (first === total.innerHTML) return false
  });
  it("#4 Pressing each button '+' 7 times will render green message 'Free Shipping'", () => {
    render(<App />)
    const buttons = screen.getAllByRole("button")
    buttons.forEach(button => {
      if (button.innerHTML === "+") {
        for (let i = 0; i < 7; i++) {
          fireEvent.click(button)
        }
      }
    })
    expect(screen.getByText(/Free Shipping/)).toBeInTheDocument()
  });
});
