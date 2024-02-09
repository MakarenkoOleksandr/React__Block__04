import React from 'react'
import "@testing-library/jest-dom";
import App from "../App.js";
import { render, fireEvent, screen, waitFor } from '@testing-library/react'

describe("b4ex02: Converter EUR -> USD", () => {
  it("#1 Has 2 functional components", () => {
    const view = render(<App />)
    const key = Object.keys(view)[0]
    const key2 = Object.keys(view[key])[0]
    const key3 = Object.keys(view[key][key2].alternate.child.child.stateNode)[1]
    const key4 = Object.keys(view[key][key2].alternate.child.child.stateNode[key3])[0]
    const arr = []
    view[key][key2].alternate.child.child.stateNode[key3][key4].forEach(comp => {
      if (`${comp.type}`.includes("function")) arr.push(arr.length)
    })
    expect(arr.length).toBe(2)
  });
  it("#2 Has input type number with onChange event", async () => {
    render(<App />);
    const input = screen.getByRole("spinbutton");
    const key = Object.keys(input)[0]
    expect(Object.keys(input[key].pendingProps).includes("onChange")).toBe(true)
  });
  it("#3 Has an h1 rendering conversion", async () => {
    let allGood = false
    render(<App />);
    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: 20 } })
    const result = await getData()
    await waitFor(() => {
      const h1 = screen.getByRole("heading", { level: 1 }).innerHTML
      if (h1 === `${20 / result.quotes.USDEUR}` || h1 === `${20 / 1.17}`) {
        allGood = true
      }
    })
    if (!allGood) return false
  });
});

const getData = async () => {
  try {
    const data = await fetch("https://api.apilayer.com/currency_data/live?apikey=6fMGKpiWr5kDWxomxIY8qX4SGqrxuQHx&format=1")
      .then((res) => res.json())
      .then((res2) => res2);
    return data;
  } catch (err) {
    console.error(err);
  }
};
