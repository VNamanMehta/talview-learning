import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Counter from "./Counter";

describe("counter",() => {
    it("renders with initial count of 0",() => {
        render(<Counter />)
        expect(screen.getByTestId("count")).toHaveTextContent(0)
    })
    it("increments count when + is clicked",async () => {
        render(<Counter />)
        await userEvent.click(screen.getByText('+'))
        const counter = screen.getByTestId("count")
        expect(counter).toHaveTextContent("Count: 1")
    })
    it("decrements count when - is clicked",async () => {
        render(<Counter />)
        await userEvent.click(screen.getByText('-'))
        const counter = screen.getByTestId("count")
        expect(counter).toHaveTextContent("Count: -1")
    })
    it("decrements count when - is clicked",async () => {
        render(<Counter />)
        await userEvent.click(screen.getByText('Reset'))
        const counter = screen.getByTestId("count")
        expect(counter).toHaveTextContent("Count: 0")
    })
})