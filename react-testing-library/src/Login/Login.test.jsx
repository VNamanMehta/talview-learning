import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Login from "./Login";

describe("login",() => {
    it("shows error when name is 1 letter",async() => {
    render(<Login />)
    const input = screen.getByTestId("name")
    const button = screen.getByRole('button', {name: /submit/i})
    await userEvent.type(input, "1")
    await userEvent.click(button)
    expect(screen.getByRole("alert")).toHaveTextContent("Name should be more than a single letter")
    })
    it("shows name when name is more than 1 letter",async() => {
    render(<Login />)
    const input = screen.getByTestId("name")
    const button = screen.getByRole('button', {name: /submit/i})
    const display = screen.getByTestId("display")
    await userEvent.type(input, "naman")
    await userEvent.click(button)
    expect(display).toHaveTextContent("naman")
    })
    
})